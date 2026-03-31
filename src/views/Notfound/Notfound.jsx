import React from "react";
import "./Notfound.css";
import Button from "../../components/Button/Button";

function Notfound() {
  return (
    <div className="notfound-page">
      <main className="notfound-content">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>
          Oops! The page you are looking for doesn’t exist or has been moved.
          Let’s get you back on track.
        </p>
        <Button variant="primary" onClick={() => window.location.href = "/"}>
          Go to Homepage
        </Button>
      </main>

      <footer className="notfound-footer">
        <p>© {new Date().getFullYear()} Blooming Flowers</p>
      </footer>
    </div>
  );
}

export default Notfound;
