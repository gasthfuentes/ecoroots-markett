import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const docRef = doc(db, "products", itemId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProduct({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log("❌ No se encontró el producto");
        }
      } catch (error) {
        console.error("❌ Error obteniendo el producto:", error);
      }
    };

    fetchProduct();
  }, [itemId]);

  return <div>{product ? <ItemDetail product={product} /> : <p>Cargando...</p>}</div>;
}

export default ItemDetailContainer;