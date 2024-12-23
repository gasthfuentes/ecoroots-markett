import { Link } from 'react-router-dom';

function ItemList({ products }) {
  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          <Link to={`/item/${product.id}`}>{product.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default ItemList;