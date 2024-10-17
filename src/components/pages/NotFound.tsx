import React from "react";
import { Link } from "react-router-dom";
import { pages } from "../../App";

export default function NotFound() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404 - Page Not Found</h1>
      <p style={styles.message}>
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to={pages[0]?.path} style={styles.link}>
        Go back to Home
      </Link>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    textAlign: "center",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "1rem",
  },
  message: {
    fontSize: "1.2rem",
    marginBottom: "1rem",
  },
  link: {
    textDecoration: "none",
    color: "#007BFF",
    fontSize: "1rem",
  },
};
