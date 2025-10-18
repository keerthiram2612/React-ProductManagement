import React from "react";
import { getOrders } from "../utils/orderService";
import { useAuth } from "../contexts/AuthContext";

export default function Orders() {
  const { user } = useAuth();
  const allOrders = getOrders();
  const userOrders = allOrders.filter((o) => o.user === user.email);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <h1 style={{ color: "#1d4ed8", marginBottom: "20px" }}>📦 My Orders</h1>

      <table
        style={{
          borderCollapse: "collapse",
          width: "90%",
          maxWidth: "700px",
          background: "#fff",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
        }}
      >
        <thead>
          <tr style={{ background: "#3b82f6", color: "#fff" }}>
            <th style={{ padding: "12px" }}>Order ID</th>
            <th style={{ padding: "12px" }}>Date</th>
            <th style={{ padding: "12px" }}>Total</th>
            <th style={{ padding: "12px" }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {userOrders.length === 0 ? (
            <tr>
              <td colSpan="4" style={{ padding: "20px", textAlign: "center" }}>
                No orders yet.
              </td>
            </tr>
          ) : (
            userOrders.map((order) => (
              <tr
                key={order.id}
                style={{ textAlign: "center", borderBottom: "1px solid #e5e7eb" }}
              >
                <td style={{ padding: "12px" }}>#{order.id}</td>
                <td style={{ padding: "12px" }}>{order.date}</td>
                <td style={{ padding: "12px" }}>${order.total}</td>
                <td
                  style={{
                    padding: "12px",
                    color:
                      order.status === "Delivered"
                        ? "#16a34a"
                        : order.status === "Shipped"
                        ? "#2563eb"
                        : "#f59e0b",
                  }}
                >
                  {order.status}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
