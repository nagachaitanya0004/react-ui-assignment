import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error) {
    // Keep console visibility for debugging while avoiding blank UI.
    console.error("Unhandled UI error:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: "100vh",
            display: "grid",
            placeItems: "center",
            background: "#f5f5f5",
            padding: "24px",
            color: "#1a1a1a",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
          }}
        >
          <div style={{ textAlign: "center", maxWidth: "420px" }}>
            <h1 style={{ fontSize: "1.5rem", marginBottom: "8px" }}>Something went wrong</h1>
            <p style={{ color: "#6b7280" }}>
              The app hit an unexpected error. Refresh the page and try again.
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
