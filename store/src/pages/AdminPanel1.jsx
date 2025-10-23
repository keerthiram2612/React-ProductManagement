import React, { useState } from "react";
import { getOrders, updateOrderStatus } from "../utils/orderService";
import { useAuth } from "../contexts/AuthContext";

export default function AdminPanel() {
  const { user } = useAuth();
  const [orders, setOrders] = useState(getOrders());

  const ADMIN_EMAIL = "admin@gmail.com"; // Define your admin email here

  // Check if user is admin
  if (!user || user.email !== ADMIN_EMAIL) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <div
          style={{
            background: "#fff",
            padding: "40px 60px",
            borderRadius: "16px",
            boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          <h2 style={{ color: "#9d174d" }}>🚫 Access Denied</h2>
          <p style={{ color: "#6b7280" }}>
            Only admins can access this page.
          </p>
        </div>
      </div>
    );
  }

  const handleStatusChange = (id, newStatus) => {
    updateOrderStatus(id, newStatus);
    setOrders(getOrders());
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%)",
        padding: "40px",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <h1
        style={{
          color: "#9d174d",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        🛠️ Admin Panel — Manage Orders
      </h1>

      <table
        style={{
          borderCollapse: "collapse",
          width: "90%",
          maxWidth: "900px",
          margin: "0 auto",
          background: "#fff",
          borderRadius: "12px",
          boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
        }}
      >
        <thead>
          <tr style={{ background: "#db2777", color: "#fff" }}>
            <th style={{ padding: "12px" }}>Order ID</th>
            <th style={{ padding: "12px" }}>User</th>
            <th style={{ padding: "12px" }}>Date</th>
            <th style={{ padding: "12px" }}>Total</th>
            <th style={{ padding: "12px" }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr
              key={order.id}
              style={{
                textAlign: "center",
                borderBottom: "1px solid #e5e7eb",
              }}
            >
              <td style={{ padding: "12px" }}>#{order.id}</td>
              <td style={{ padding: "12px" }}>{order.user}</td>
              <td style={{ padding: "12px" }}>{order.date}</td>
              <td style={{ padding: "12px" }}>${order.total}</td>
              <td style={{ padding: "12px" }}>
                <select
                  value={order.status}
                  onChange={(e) =>
                    handleStatusChange(order.id, e.target.value)
                  }
                  style={{
                    padding: "6px 12px",
                    borderRadius: "6px",
                    border: "1px solid #d1d5db",
                    background: "#f9fafb",
                    cursor: "pointer",
                  }}
                >
                  <option>On Process</option>
                  <option>Shipped</option>
                  <option>Delivered</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
