import React from "react";

export default function Cart() {
  const cartItems = [
    { id: 1, name: "Smartphone", price: "$499", quantity: 1 },
    { id: 2, name: "Bluetooth Speaker", price: "$59", quantity: 2 },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <h1 style={{ color: "#166534", marginBottom: "20px" }}>🛒 My Cart</h1>
      <div
        style={{
          background: "#fff",
          borderRadius: "16px",
          boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
          width: "100%",
          maxWidth: "600px",
          padding: "20px",
        }}
      >
        {cartItems.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid #e5e7eb",
              padding: "12px 0",
            }}
          >
            <div>
              <h4>{item.name}</h4>
              <p style={{ color: "#6b7280" }}>{item.price}</p>
            </div>
            <div>x{item.quantity}</div>
          </div>
        ))}
        <button
          style={{
            marginTop: "20px",
            background: "#3b82f6",
            color: "white",
            padding: "10px 25px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            width: "100%",
          }}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
