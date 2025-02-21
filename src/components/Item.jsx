import { Link } from "react-router-dom";

function Item({ product }) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <img src={`/assets/${product.image}`} alt={product.image} style={{
    width: "100px",
    height: "auto",
    borderRadius: "8px",
    display: "block",
    margin: "10px auto",
}}/> 
      <p>{product.description}</p>
      <Link to={`/item/${product.id}`}>Ver más</Link>
    </div>
  );
}

export default Item;