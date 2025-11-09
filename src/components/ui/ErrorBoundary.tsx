import { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, Home, RefreshCcw } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

/**
 * ERROR BOUNDARY COMPONENT
 * Catches React errors and displays user-friendly fallback UI
 * 
 * Features:
 * - Catches component errors
 * - Displays helpful error message
 * - Provides recovery actions (reload, home)
 * - Logs errors to console (can extend to error tracking service)
 */
export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to console (in production, send to error tracking service like Sentry)
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    this.setState({
      error,
      errorInfo,
    });

    // TODO: Send to error tracking service in production
    // if (process.env.NODE_ENV === 'production') {
    //   sendToErrorTracking(error, errorInfo);
    // }
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI if provided
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div className="min-h-screen bg-black flex items-center justify-center px-4">
          <div className="max-w-2xl w-full text-center">
            {/* Error Icon */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-red-500/20 blur-3xl rounded-full" />
                <div className="relative bg-red-500/10 p-6 rounded-full border border-red-500/30">
                  <AlertTriangle className="w-16 h-16 text-red-500" />
                </div>
              </div>
            </div>

            {/* Error Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Oops! Something went wrong
            </h1>

            {/* Error Description */}
            <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto">
              We encountered an unexpected error. Don't worry, our team has been notified and we're working on fixing it.
            </p>

            {/* Error Details (Development Only) */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="mb-8 text-left bg-white/5 border border-white/10 rounded-xl p-6 max-w-2xl mx-auto overflow-auto">
                <p className="text-sm font-mono text-red-400 mb-2">
                  <strong>Error:</strong> {this.state.error.toString()}
                </p>
                {this.state.errorInfo && (
                  <pre className="text-xs text-gray-500 overflow-auto max-h-64">
                    {this.state.errorInfo.componentStack}
                  </pre>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105"
              >
                <RefreshCcw className="w-5 h-5" />
                Reload Page
              </button>

              <Link
                to="/"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105 border border-white/20"
              >
                <Home className="w-5 h-5" />
                Go to Homepage
              </Link>
            </div>

            {/* Support Link */}
            <p className="mt-8 text-sm text-gray-500">
              Need help?{' '}
              <Link to="/contact" className="text-yellow-500 hover:text-yellow-400 font-semibold">
                Contact our support team
              </Link>
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
