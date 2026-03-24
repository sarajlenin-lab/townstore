import React, { useState } from "react";

export default function App() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "Product 1", price: 25 },
    { id: 2, name: "Product 2", price: 40 },
    { id: 3, name: "Product 3", price: 15 },
    { id: 4, name: "Product 4", price: 60 },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleWhatsAppOrder = () => {
    const message = `Hello, I want to order:\n${cart
      .map((item) => `${item.name} - AED ${item.price}`)
      .join("\n")}\nTotal: AED ${total}`;

    const url = `https://wa.me/971529212773?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div style={{fontFamily: "Arial, sans-serif", padding: 20}}>
      <h1>Town</h1>
      <p>
        Welcome to Town, the retail shop where low prices meet high quality.
        We work hard to bring you the best deals in town, offering constant
        discounts, special offers, and budget-friendly options across all categories.
        Shop smart, save more — only at Town.
      </p>

      <h2>Products</h2>
      <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20}}>
        {products.map((product) => (
          <div key={product.id} style={{border: "1px solid #ddd", padding: 10}}>
            <div style={{height: 120, background: "#eee", marginBottom: 10, display:"flex", alignItems:"center", justifyContent:"center"}}>
              Image Coming Soon
            </div>
            <h3>{product.name}</h3>
            <p>AED {product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>No items yet.</p>
      ) : (
        <div>
          {cart.map((item, i) => (
            <p key={i}>{item.name} - AED {item.price}</p>
          ))}
          <p><strong>Total: AED {total}</strong></p>
          <button onClick={handleWhatsAppOrder}>Order via WhatsApp</button>
        </div>
      )}

      <h2>Contact</h2>
      <p>Phone / WhatsApp: +971529212773</p>
    </div>
  );
}