import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const mockProducts = [
  { id: 1, name: 'Café Orgánico', category: 'cafe-justo', description: 'Delicioso café orgánico.' },
  { id: 2, name: 'Quinoa Premium', category: 'quinoa-andina', description: 'Quinoa de calidad superior.' },
  { id: 3, name: 'Miel de Flores', category: 'miel-organica', description: 'Miel pura y orgánica.' },
];

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockProducts.find(product => product.id === parseInt(itemId)));
      }, 1000);
    }).then(data => setProduct(data));
  }, [itemId]);

  return (
    <div>
      {product ? <ItemDetail product={product} /> : <p>Cargando...</p>}
    </div>
  );
}

export default ItemDetailContainer;
