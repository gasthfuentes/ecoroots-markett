import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config"; // Importa la configuración de Firestore
import ItemList from "./ItemList";
import Navbar from "./Navbar";

function ItemListContainer({ greeting }) {
  const { categoryId } = useParams();
  console.log(categoryId)

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsRef = collection(db, "productos");
        let q = productsRef;

        if (categoryId) {
          q = query(productsRef, where("category", "==", categoryId));
        }

        const querySnapshot = await getDocs(q);
        const productsList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(productsList);
        setProducts(productsList);
      } catch (error) {
        console.error("❌ Error obteniendo productos:", error);
      }
    };

    fetchProducts();
  }, [categoryId]);

  return (
    <div>
      <h2>{greeting}</h2>
      <Navbar/>
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;