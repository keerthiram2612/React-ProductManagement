import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("");

  // ✅ Fetch data from your local json-server
  useEffect(() => {
    axios
      .get("http://localhost:4000/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  // ✅ Search + Sort
  const filteredProducts = products
    .filter((p) => p.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sortOption === "low-high") return a.price - b.price;
      if (sortOption === "high-low") return b.price - a.price;
      return 0;
    });

  // ✅ Cart / Wishlist logic
  const handleAddToCart = (product) => {
    if (product.stock === 0) {
      alert("❌ Out of stock! Cannot add to cart.");
      return;
    }
    alert(`🛒 ${product.title} added to cart!`);
  };

  const handleAddToWishlist = (product) => {
    if (product.stock === 0) {
      alert("❌ Out of stock! Cannot add to wishlist.");
      return;
    }
    alert(`💖 ${product.title} added to wishlist!`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🛍️ Product Store</h1>

      {/* Search and Sort */}
      <div style={{ marginBottom: "15px" }}>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "8px",
            marginRight: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          style={{ padding: "8px", borderRadius: "8px" }}
        >
          <option value="">Sort by</option>
          <option value="low-high">Price: Low → High</option>
          <option value="high-low">Price: High → Low</option>
        </select>
      </div>

      {/* Product Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              textAlign: "center",
              boxShadow: "0 0 5px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              width="150"
              height="150"
              style={{ borderRadius: "8px" }}
            />
            <h3>{product.title}</h3>
            <p>Category: {product.category}</p>
            <p>💲{product.price}</p>
            <p
              style={{
                color: product.stock === 0 ? "red" : "green",
                fontWeight: "bold",
              }}
            >
              {product.stock === 0
                ? "Out of Stock"
                : `In Stock: ${product.stock}`}
            </p>

            <button
              disabled={product.stock === 0}
              onClick={() => handleAddToCart(product)}
              style={{
                margin: "5px",
                padding: "8px 12px",
                borderRadius: "8px",
                border: "none",
                background: product.stock === 0 ? "#ccc" : "#007bff",
                color: "white",
                cursor: product.stock === 0 ? "not-allowed" : "pointer",
              }}
            >
              Add to Cart
            </button>

            <button
              disabled={product.stock === 0}
              onClick={() => handleAddToWishlist(product)}
              style={{
                margin: "5px",
                padding: "8px 12px",
                borderRadius: "8px",
                border: "none",
                background: product.stock === 0 ? "#ccc" : "#ff4081",
                color: "white",
                cursor: product.stock === 0 ? "not-allowed" : "pointer",
              }}
            >
              Add to Wishlist
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
