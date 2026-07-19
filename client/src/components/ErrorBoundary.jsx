import { Component } from 'react';

/**
 * Error Boundary – catches JS errors in child component tree.
 * Shows a graceful fallback UI instead of a blank white screen.
 */
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('[ErrorBoundary]', error, errorInfo);
    // In production, you could send to an error tracking service:
    // if (import.meta.env.PROD) { reportError(error, errorInfo); }
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return typeof this.props.fallback === 'function'
          ? this.props.fallback({ error: this.state.error, retry: this.handleRetry })
          : this.props.fallback;
      }

      return (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '60vh',
          padding: '2rem',
          textAlign: 'center',
          fontFamily: 'system-ui, sans-serif',
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚠️</div>
          <h1 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#1a1a2e' }}>
            Something went wrong
          </h1>
          <p style={{ color: '#6b7280', marginBottom: '1.5rem', maxWidth: '400px' }}>
            An unexpected error occurred. Please try again.
          </p>
          {!import.meta.env.PROD && this.state.error && (
            <pre style={{
              background: '#fef2f2',
              color: '#dc2626',
              padding: '1rem',
              borderRadius: '8px',
              maxWidth: '600px',
              overflow: 'auto',
              fontSize: '0.8rem',
              textAlign: 'left',
              marginBottom: '1rem',
            }}>
              {this.state.error.message}
            </pre>
          )}
          <button
            onClick={this.handleRetry}
            style={{
              background: '#2563eb',
              color: '#fff',
              border: 'none',
              padding: '0.75rem 2rem',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: 600,
            }}
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
