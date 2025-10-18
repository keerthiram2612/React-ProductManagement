import React, { useState } from "react";
import { addOrder } from "../utils/orderService";
import { useAuth } from "../contexts/AuthContext";

export default function Cart() {
  const { user } = useAuth();

  const cartItems = [
    { id: 1, name: "Smartphone", price: 499, quantity: 1 },
    { id: 2, name: "Bluetooth Speaker", price: 59, quantity: 2 },
  ];

  const addresses = [
    { id: 1, label: "Home", addressLine: "123, Green Street, Chennai" },
    { id: 2, label: "Office", addressLine: "456, Tech Park, Bengaluru" },
  ];

  const [selectedAddress, setSelectedAddress] = useState(null);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleConfirmOrder = () => {
    if (!selectedAddress) {
      alert("Please select an address.");
      return;
    }

    const order = {
      id: Date.now(),
      user: user ? user.email : "guest@example.com",
      items: cartItems,
      total: totalPrice,
      address: addresses.find((a) => a.id === selectedAddress),
      date: new Date().toISOString().split("T")[0],
      status: "On Process", // default
    };

    addOrder(order);
    setOrderConfirmed(true);
  };

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
          borderRadius: "20px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
          width: "100%",
          maxWidth: "700px",
          padding: "30px",
        }}
      >
        {/* CART ITEMS */}
        <h2 style={{ color: "#14532d", marginBottom: "15px" }}>Items in Cart</h2>
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
              <p style={{ color: "#6b7280" }}>
                ${item.price} × {item.quantity}
              </p>
            </div>
            <div style={{ fontWeight: "bold" }}>
              ${item.price * item.quantity}
            </div>
          </div>
        ))}

        <div
          style={{
            marginTop: "15px",
            textAlign: "right",
            fontSize: "1.1rem",
            fontWeight: "bold",
          }}
        >
          Total: ${totalPrice}
        </div>

        {/* ADDRESS */}
        <div style={{ marginTop: "30px" }}>
          <h2 style={{ color: "#14532d" }}>🏠 Select Address</h2>
          {addresses.map((addr) => (
            <label
              key={addr.id}
              style={{
                display: "block",
                background:
                  selectedAddress === addr.id ? "#d1fae5" : "#f9fafb",
                border: "1px solid #d1d5db",
                borderRadius: "10px",
                padding: "12px",
                marginBottom: "10px",
                cursor: "pointer",
              }}
            >
              <input
                type="radio"
                name="address"
                checked={selectedAddress === addr.id}
                onChange={() => setSelectedAddress(addr.id)}
                style={{ marginRight: "10px" }}
              />
              <strong>{addr.label}</strong> — {addr.addressLine}
            </label>
          ))}
        </div>

        <button
          style={{
            marginTop: "25px",
            background: "#3b82f6",
            color: "white",
            padding: "12px 25px",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "bold",
            width: "100%",
          }}
          onClick={handleConfirmOrder}
        >
          Confirm Order
        </button>

        {orderConfirmed && (
          <div
            style={{
              marginTop: "25px",
              background: "#ecfdf5",
              border: "2px solid #34d399",
              color: "#065f46",
              padding: "15px",
              borderRadius: "10px",
              textAlign: "center",
              fontWeight: "500",
            }}
          >
            ✅ Order placed successfully! Status: <b>On Process</b>
          </div>
        )}
      </div>
    </div>
  );
}
