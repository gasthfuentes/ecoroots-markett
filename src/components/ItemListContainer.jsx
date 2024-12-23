import React from "react";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

const mockProducts = [
  { id: 1, name: 'Café Orgánico', category: 'cafe-justo' },
  { id: 2, name: 'Quinoa Premium', category: 'quinoa-andina' },
  { id: 3, name: 'Miel de Flores', category: 'miel-organica' },
];

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

function ItemListContainer({ greeting }) {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    new Promise((resolve) => {
      setTimeout(() => {
        if (categoryId) {
          resolve(mockProducts.filter(product => product.category === categoryId));
        } else {
          resolve(mockProducts);
        }
      }, 1000);
    }).then(data => setProducts(data));
  }, [categoryId]);

  return (
    <div>
      <h2>{greeting}</h2>
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;
