import React from "react";
import CartWidget from "./CartWidget";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#4CAF50",
        color: "white",
      }}
    >
      <h1>EcoRoots Market</h1>
      <ul style={{ display: "flex", listStyle: "none", gap: "20px", margin: 0 }}>
        <li><a href="#cafe-justo" style={{ color: "white", textDecoration: "none" }}>Café Justo</a></li>
        <li><a href="#quinoa-andina" style={{ color: "white", textDecoration: "none" }}>Quinoa Andina</a></li>
        <li><a href="#miel-organica" style={{ color: "white", textDecoration: "none" }}>Miel Orgánica</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
}

export default Navbar;
