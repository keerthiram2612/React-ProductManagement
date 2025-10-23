// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Navbar() {
  const { user, signInWithGoogle, signOut } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  async function handleLogin() {
    try {
      await signInWithGoogle();
    } catch (e) {
      alert("Login failed. Please try again.");
    }
  }

  async function handleLogout() {
    await signOut();
    navigate("/");
  }

  return (
    <nav
      style={{
        padding: "14px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "linear-gradient(135deg, #2563eb 0%, #1e3a8a 100%)",
        color: "white",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        position: "sticky",
        top: 0,
        zIndex: 100,
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Logo / Brand */}
      <div>
        <Link
          to="/"
          style={{
            color: "white",
            fontSize: "1.4rem",
            fontWeight: "700",
            textDecoration: "none",
            letterSpacing: "0.5px",
          }}
        >
          🛍️ Shopiefy Store
        </Link>
      </div>

      {/* Right Section */}
      <div>
        {!user ? (
          <button
            onClick={handleLogin}
            style={{
              background: "white",
              color: "#1e3a8a",
              border: "none",
              borderRadius: "8px",
              padding: "8px 18px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#e0e7ff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "white";
            }}
          >
            Sign in with Google
          </button>
        ) : (
          <div style={{ position: "relative", display: "inline-block" }}>
            <button
              onClick={() => setOpen((s) => !s)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                background: "transparent",
                border: "none",
                color: "white",
                cursor: "pointer",
                fontWeight: "500",
                fontSize: "1rem",
                padding: "6px 10px",
                borderRadius: "8px",
                transition: "background 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "rgba(255,255,255,0.15)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              <img
                src={user.photoURL}
                alt="avatar"
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: "50%",
                  border: "2px solid white",
                }}
              />
              <span>{user.displayName}</span>
              <span
                style={{
                  fontSize: "0.8rem",
                  marginLeft: 5,
                  opacity: 0.8,
                }}
              >
                ▼
              </span>
            </button>

            {/* Dropdown Menu */}
            {open && (
              <div
                style={{
                  position: "absolute",
                  right: 0,
                  marginTop: 10,
                  background: "#ffffff",
                  color: "#1e3a8a",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                  borderRadius: "10px",
                  overflow: "hidden",
                  width: "180px",
                  animation: "fadeIn 0.2s ease-in-out",
                }}
              >
                <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                  <li>
                    <Link
                      to="/dashboard"
                      onClick={() => setOpen(false)}
                      style={{
                        display: "block",
                        padding: "10px 16px",
                        textDecoration: "none",
                        color: "#1e3a8a",
                        fontWeight: "500",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.background = "#eff6ff")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.background = "white")
                      }
                    >
                      🧭 My Dashboard
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/admin"
                      onClick={() => setOpen(false)}
                      style={{
                        display: "block",
                        padding: "10px 16px",
                        textDecoration: "none",
                        color: "#1e3a8a",
                        fontWeight: "500",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.background = "#eff6ff")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.background = "white")
                      }
                    >
                      ⚙️ Admin Panel
                    </Link>
                  </li>

                  <li>
                    <button
                      onClick={handleLogout}
                      style={{
                        display: "block",
                        padding: "10px 16px",
                        border: "none",
                        width: "100%",
                        background: "white",
                        textAlign: "left",
                        color: "#b91c1c",
                        fontWeight: "600",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.background = "#fee2e2")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.background = "white")
                      }
                    >
                      🚪 Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
