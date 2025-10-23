import React from "react";

export default function Wishlist() {
  const products = [
    { id: 1, name: "Wireless Headphones", price: "$99" },
    { id: 2, name: "Smart Watch", price: "$149" },
  ];

  // Add to cart handler
  const handleAddToCart = (product) => {
    // Convert price to number (remove $)
    const numericPrice = parseFloat(product.price.replace("$", ""));

    // Get current cart items from localStorage
    const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Check if product already exists in cart
    const isAlreadyInCart = existingCart.some((item) => item.id === product.id);

    if (isAlreadyInCart) {
      alert("Item already added to cart!");
      return;
    }

    // Add new product with quantity = 1
    const updatedCart = [
      ...existingCart,
      { ...product, price: numericPrice, quantity: 1 },
    ];

    // Save back to localStorage
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));

    alert(`${product.name} added to cart!`);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #fff1f2 0%, #ffe4e6 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <h1 style={{ color: "#be123c", marginBottom: "20px" }}>❤️ Wishlist</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          width: "100%",
          maxWidth: "800px",
        }}
      >
        {products.map((item) => (
          <div
            key={item.id}
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              textAlign: "center",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          >
            <h3>{item.name}</h3>
            <p style={{ color: "#9ca3af" }}>{item.price}</p>
            <button
              style={{
                background: "#3b82f6",
                color: "#fff",
                padding: "8px 16px",
                borderRadius: "6px",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() => handleAddToCart(item)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
