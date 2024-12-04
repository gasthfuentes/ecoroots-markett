import React from "react";

function CartWidget() {
  const itemCount = 3; 

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <span role="img" aria-label="cart" style={{ fontSize: "24px" }}>🛒</span>
      <span
        style={{
          position: "absolute",
          top: "-10px",
          right: "-10px",
          backgroundColor: "red",
          color: "white",
          borderRadius: "50%",
          padding: "5px",
          fontSize: "12px",
        }}
      >
        {itemCount}
      </span>
    </div>
  );
}

export default CartWidget;
