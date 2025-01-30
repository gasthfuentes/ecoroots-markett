import { Link } from "react-router-dom";

function Item({ product }) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <Link to={`/item/${product.id}`}>Ver más</Link>
    </div>
  );
}

export default Item;