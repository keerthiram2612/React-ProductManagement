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
      alert("Login failed");
    }
  }

  async function handleLogout() {
    await signOut();
    navigate("/");
  }

  return (
    <nav style={{ padding: 12, display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #eee" }}>
      <div>
        <Link to="/">MyApp</Link>
      </div>

      <div>
        {!user ? (
          <button onClick={handleLogin}>Sign in with Google</button>
        ) : (
          <div style={{ position: "relative", display: "inline-block" }}>
            <button onClick={() => setOpen((s) => !s)} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <img src={user.photoURL} alt="avatar" style={{ width: 30, height: 30, borderRadius: "50%" }} />
              <span>{user.displayName}</span>
            </button>

            {open && (
              <div style={{ position: "absolute", right: 0, marginTop: 8, background: "white", boxShadow: "0 2px 8px rgba(0,0,0,0.15)", borderRadius: 6 }}>
                <ul style={{ listStyle: "none", padding: 8, margin: 0 }}>
                  <li>
                    <Link to="/dashboard" onClick={() => setOpen(false)} style={{ display: "block", padding: "8px 12px" }}>
                      My Dashboard
                    </Link>
                  </li>
                  <li>
                    <button onClick={handleLogout} style={{ display: "block", padding: "8px 12px", width: "100%", textAlign: "left" }}>
                      Logout
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
