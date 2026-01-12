import React from "react";

const Maintenance = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0e0e11",
        color: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <div>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "12px" }}>
          Website Under Maintenance
        </h1>
        <p style={{ fontSize: "1.1rem", color: "#cbd5e1" }}>
          We’re making some updates.  
          The site will be live again soon.
        </p>
      </div>
    </div>
  );
};

export default Maintenance;
