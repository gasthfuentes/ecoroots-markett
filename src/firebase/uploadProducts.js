const { collection, addDoc } = require("firebase/firestore");
const { db } = require("./config");

const products = [
  { name: "Café Justo", category: "Infusiones", description: "Café orgánico de comercio justo.", price: 1200, stock: 50 },
  { name: "Té Chai en Hebras", category: "Infusiones", description: "Mezcla especiada de té negro.", price: 900, stock: 30 },
  { name: "Té Rojo", category: "Infusiones", description: "Té fermentado con propiedades únicas.", price: 1000, stock: 40 },
  { name: "Miel Orgánica", category: "Envasados", description: "Miel pura sin conservantes.", price: 2500, stock: 20 },
  { name: "Mermelada de Durazno Orgánica", category: "Envasados", description: "Elaborada con duraznos naturales.", price: 1800, stock: 25 },
  { name: "Quinoa Andina", category: "Legumbres", description: "Rica en proteínas y sin gluten.", price: 2200, stock: 35 },
  { name: "Feijão Preto Orgânico de Brasil", category: "Legumbres", description: "Frijol negro tradicional brasileño.", price: 1600, stock: 50 },
  { name: "Soja Orgánica", category: "Legumbres", description: "Soja sin modificaciones genéticas.", price: 1400, stock: 45 },
];

const uploadProducts = async () => {
  try {
    const collectionRef = collection(db, "products");
    for (const product of products) {
      await addDoc(collectionRef, product);
    }
    console.log("✅ Productos subidos correctamente.");
  } catch (error) {
    console.error("❌ Error al subir los productos:", error);
  }
};

uploadProducts();