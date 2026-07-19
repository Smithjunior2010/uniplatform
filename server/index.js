import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { createClient } from '@supabase/supabase-js';

const app = express();
const PORT = process.env.PORT || 3001;
const isProduction = process.env.NODE_ENV === 'production';

// ═══════════════════════════════════════════
// Supabase Client (with validation)
// ═══════════════════════════════════════════
if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
  console.error('[Security] Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in environment variables');
  if (isProduction) process.exit(1);
}

export const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  }
);

// ═══════════════════════════════════════════
// Security Middleware
// ═══════════════════════════════════════════

// Helmet – secure HTTP headers
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'", "https://unpkg.com"],
        styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
        imgSrc: ["'self'", "data:", "https:", "blob:"],
        fontSrc: ["'self'", "https://fonts.gstatic.com"],
        connectSrc: ["'self'", process.env.SUPABASE_URL || '', "https://*.supabase.co"],
        mediaSrc: ["'self'"],
        frameSrc: ["'none'"],
        objectSrc: ["'none'"],
        upgradeInsecureRequests: [],
      },
    },
    crossOriginEmbedderPolicy: false,
    crossOriginResourcePolicy: { policy: 'cross-origin' },
    hsts: {
      maxAge: 31536000,
      includeSubDomains: true,
      preload: true,
    },
  })
);

// CORS – restricted origins
const allowedOrigins = process.env.CORS_ORIGINS
  ? process.env.CORS_ORIGINS.split(',')
  : ['http://localhost:3000'];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (postman, curl, server-to-server)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.warn(`[Security] CORS blocked origin: ${origin}`);
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    maxAge: 86400,
  })
);

// Rate Limiting
const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // 100 requests per window
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many requests, please try again later.' },
});

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 50,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many API requests, please try again later.' },
});

app.use(generalLimiter);
app.use('/api/', apiLimiter);

// Body parsing with size limits
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));

// ═══════════════════════════════════════════
// Health / API Routes
// ═══════════════════════════════════════════
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage().rss,
  });
});

// ═══════════════════════════════════════════
// Global Error Handler
// ═══════════════════════════════════════════
app.use((err, _req, res, _next) => {
  const status = err.status || 500;
  const message = isProduction && status === 500
    ? 'Internal server error'
    : err.message || 'Internal server error';

  console.error(`[Error] ${status}:`, err.message);
  if (!isProduction) console.error(err.stack);

  res.status(status).json({ error: message });
});

// ═══════════════════════════════════════════
// Graceful Shutdown
// ═══════════════════════════════════════════
let server;

const shutdown = (signal) => {
  console.log(`\n[Server] Received ${signal}, shutting down gracefully...`);
  if (server) {
    server.close(() => {
      console.log('[Server] HTTP server closed');
      process.exit(0);
    });
    // Force shutdown after 10s
    setTimeout(() => {
      console.error('[Server] Forced shutdown after timeout');
      process.exit(1);
    }, 10000);
  } else {
    process.exit(0);
  }
};

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));
process.on('unhandledRejection', (reason) => {
  console.error('[Server] Unhandled Rejection:', reason);
});
process.on('uncaughtException', (error) => {
  console.error('[Server] Uncaught Exception:', error);
  if (server) server.close(() => process.exit(1));
  else process.exit(1);
});

// ═══════════════════════════════════════════
// Start Server
// ═══════════════════════════════════════════
server = app.listen(PORT, () => {
  console.log(`[Server] Running on http://localhost:${PORT} (${process.env.NODE_ENV || 'development'})`);
});
