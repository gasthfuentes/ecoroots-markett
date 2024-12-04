import React from "react";

function ItemListContainer({ text }) {
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f9f9f9",
        border: "1px solid #ddd",
        marginTop: "10px",
      }}
    >
      <p>{text}</p>
    </div>
  );
}

export default ItemListContainer;
