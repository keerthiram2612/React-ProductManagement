import React from "react";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #f0f4ff 0%, #dfe9f3 100%)",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "16px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
          padding: "40px 60px",
          textAlign: "center",
          maxWidth: "500px",
          width: "90%",
          transition: "transform 0.2s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            marginBottom: "20px",
            color: "#1e40af",
          }}
        >
          Welcome 👋
        </h1>
        <p
          style={{
            fontSize: "1.1rem",
            color: "#4b5563",
            marginBottom: "20px",
          }}
        >
          Home page — click <strong>Sign in with Google</strong> to get started.
        </p>
        <img
          src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
          alt="Google sign-in illustration"
          style={{ width: "100px", marginTop: "10px", opacity: "0.85" }}
        />
      </div>
    </div>
  );
}
