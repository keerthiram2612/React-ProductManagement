import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();

  if (!user)
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 100%)",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <div
          style={{
            background: "#fff",
            padding: "40px 60px",
            borderRadius: "16px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          <h2 style={{ color: "#1e3a8a", marginBottom: "10px" }}>
            You must be logged in to view the dashboard.
          </h2>
        </div>
      </div>
    );

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
          borderRadius: "20px",
          padding: "50px 70px",
          textAlign: "center",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
          maxWidth: "500px",
          width: "90%",
          transition: "transform 0.2s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <img
          src={user.photoURL}
          alt="avatar"
          style={{
            width: 100,
            height: 100,
            borderRadius: "50%",
            objectFit: "cover",
            border: "4px solid #3b82f6",
            marginBottom: "20px",
          }}
        />
        <h1 style={{ fontSize: "2rem", color: "#1e40af", marginBottom: "10px" }}>
          Welcome, {user.displayName} 👋
        </h1>
        <p style={{ color: "#4b5563", fontSize: "1.1rem", marginBottom: "25px" }}>
          {user.email}
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Link
            to="/wishlist"
            style={{
              background: "#f59e0b",
              color: "white",
              padding: "10px 25px",
              borderRadius: "8px",
              textDecoration: "none",
            }}
          >
            ❤️ Wishlist
          </Link>
          <Link
            to="/cart"
            style={{
              background: "#22c55e",
              color: "white",
              padding: "10px 25px",
              borderRadius: "8px",
              textDecoration: "none",
            }}
          >
            🛒 My Cart
          </Link>
          <Link
            to="/orders"
            style={{
              background: "#3b82f6",
              color: "white",
              padding: "10px 25px",
              borderRadius: "8px",
              textDecoration: "none",
            }}
          >
            📦 Order History
          </Link>
        </div>
      </div>
    </div>
  );
}
