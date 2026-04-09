import { useNavigate } from "react-router-dom";
import "./Layout.css";

function Layout({ children }) {
  const navigate = useNavigate();

  return (
    <div className="layout">
      <div className="layout__container">
        <div className="layout__nav">
          <button
            type="button"
            className="layout__nav-button"
            onClick={() => navigate(-1)}
            aria-label="Go back"
          >
            ‹
          </button>
          <button
            type="button"
            className="layout__nav-button"
            onClick={() => navigate(1)}
            aria-label="Go forward"
          >
            ›
          </button>
        </div>
        <div className="layout__content">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
