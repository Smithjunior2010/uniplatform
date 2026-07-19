import { createContext, useContext, useState, useCallback, useEffect, useRef } from 'react';

const ToastContext = createContext(null);

let toastId = 0;

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const timersRef = useRef({});
  const mountedRef = useRef(true);

  // Cleanup all timers on unmount
  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      // Clear all pending timers
      Object.values(timersRef.current).forEach(clearTimeout);
      timersRef.current = {};
    };
  }, []);

  const removeToast = useCallback((id) => {
    if (!mountedRef.current) return;
    setToasts((prev) => prev.filter((t) => t.id !== id));
    if (timersRef.current[id]) {
      clearTimeout(timersRef.current[id]);
      delete timersRef.current[id];
    }
  }, []);

  const toast = useCallback((message, type = 'info', duration = 3500) => {
    const id = ++toastId;

    if (!mountedRef.current) return id;

    // Limit to 5 toasts at once to prevent UI overload
    setToasts((prev) => {
      const trimmed = prev.length >= 5 ? prev.slice(prev.length - 4) : prev;
      return [...trimmed, { id, message, type }];
    });

    // Auto-dismiss timer
    timersRef.current[`dismiss_${id}`] = setTimeout(() => {
      if (!mountedRef.current) return;
      // Trigger exit animation
      setToasts((prev) =>
        prev.map((t) => (t.id === id ? { ...t, removing: true } : t))
      );
      // Remove after animation
      timersRef.current[`remove_${id}`] = setTimeout(() => {
        removeToast(id);
      }, 320);
    }, duration);

    return id;
  }, [removeToast]);

  const dismiss = useCallback((id) => {
    if (!mountedRef.current) return;
    // Clear auto-dismiss timer
    if (timersRef.current[`dismiss_${id}`]) {
      clearTimeout(timersRef.current[`dismiss_${id}`]);
      delete timersRef.current[`dismiss_${id}`];
    }
    setToasts((prev) =>
      prev.map((t) => (t.id === id ? { ...t, removing: true } : t))
    );
    timersRef.current[`remove_${id}`] = setTimeout(() => removeToast(id), 320);
  }, [removeToast]);

  return (
    <ToastContext.Provider value={{ toast, dismiss }}>
      {children}
      {/* Toast Container */}
      <div className="toast-container" role="status" aria-live="polite">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={`toast toast-${t.type}${t.removing ? ' removing' : ''}`}
          >
            <span className="toast-icon">
              {t.type === 'success' ? '\u2713' :
               t.type === 'error' ? '\u2715' :
               t.type === 'warning' ? '!' : 'i'}
            </span>
            <span className="toast-msg">{t.message}</span>
            <button
              className="toast-close"
              onClick={() => dismiss(t.id)}
              aria-label="Dismiss"
            >
              &times;
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within ToastProvider');
  return ctx;
}
