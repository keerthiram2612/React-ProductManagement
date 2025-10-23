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
        background: "linear-gradient(135deg, #c7d2fe 0%, #e0e7ff 100%)",
        fontFamily: "'Poppins', sans-serif",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "20px",
          padding: "50px 70px",
          textAlign: "center",
          boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
          maxWidth: "550px",
          width: "95%",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.03)";
          e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.2)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.15)";
        }}
      >
        {/* Avatar */}
        <div
          style={{
            position: "relative",
            display: "inline-block",
            marginBottom: "20px",
          }}
        >
          <img
            src={user.photoURL}
            alt="avatar"
            style={{
              width: 110,
              height: 110,
              borderRadius: "50%",
              objectFit: "cover",
              border: "5px solid #3b82f6",
              boxShadow: "0 6px 15px rgba(59,130,246,0.4)",
            }}
          />
          <span
            style={{
              position: "absolute",
              bottom: 6,
              right: 8,
              width: 20,
              height: 20,
              background: "#22c55e",
              borderRadius: "50%",
              border: "3px solid white",
            }}
          ></span>
        </div>

        {/* Welcome text */}
        <h1
          style={{
            fontSize: "2rem",
            color: "#1e40af",
            marginBottom: "10px",
            fontWeight: "600",
          }}
        >
          Welcome, {user.displayName} 👋
        </h1>
        <p
          style={{
            color: "#4b5563",
            fontSize: "1.1rem",
            marginBottom: "25px",
          }}
        >
          {user.email}
        </p>

        <hr
          style={{
            border: "none",
            borderTop: "2px solid #e5e7eb",
            marginBottom: "25px",
          }}
        />

        {/* Navigation buttons */}
        <div
          style={{
            display: "grid",
            gap: "12px",
          }}
        >
             <Link
            to="/products"
            style={{
              background: "linear-gradient(135deg, #ec4899 0%, #db2777 100%)",
              color: "white",
              padding: "12px 25px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "500",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(236,72,153,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            🛍️ Products
          </Link>
          <Link
            to="/wishlist"
            style={{
              background: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)",
              color: "white",
              padding: "12px 25px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "500",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(251,191,36,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            ❤️ Wishlist
          </Link>

          <Link
            to="/cart"
            style={{
              background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
              color: "white",
              padding: "12px 25px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "500",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(34,197,94,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            🛒 My Cart
          </Link>

          <Link
            to="/orders"
            style={{
              background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
              color: "white",
              padding: "12px 25px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "500",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(59,130,246,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            📦 Order History
          </Link>
        </div>

        <p
          style={{
            marginTop: "35px",
            fontSize: "0.9rem",
            color: "#6b7280",
          }}
        >
          Last login: <b>{new Date().toLocaleDateString()}</b>
        </p>
      </div>
    </div>
  );
}
