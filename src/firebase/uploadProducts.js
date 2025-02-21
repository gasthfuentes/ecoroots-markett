const { collection, addDoc } = require("firebase/firestore");
const { db } = require("./config");

const products = [
  { name: "Café Justo", category: "Infusiones", description: "Café orgánico de comercio justo.", price: 1200, stock: 50, image: "/assets/cafe_justo.jpeg" },
  { name: "Té Chai en Hebras", category: "Infusiones", description: "Mezcla especiada de té negro.", price: 900, stock: 30, image: "/assets/te_chai_en_hebras.jpeg" },
  { name: "Té Rojo", category: "Infusiones", description: "Té fermentado con propiedades únicas.", price: 1000, stock: 40, image: "/assets/te_rojo.jpeg" },
  { name: "Miel Orgánica", category: "Envasados", description: "Miel pura sin conservantes.", price: 2500, stock: 20, image: "/assets/miel_organica.jpeg" },
  { name: "Mermelada de Durazno Orgánica", category: "Envasados", description: "Elaborada con duraznos naturales.", price: 1800, stock: 25, image: "/assets/mermelada_de_durazno.jpeg" },
  { name: "Quinoa Andina", category: "Legumbres", description: "Rica en proteínas y sin gluten.", price: 2200, stock: 35, image: "/assests/quinoa_andina.jpeg" },
  { name: "Feijão Preto Orgânico de Brasil", category: "Legumbres", description: "Frijol negro tradicional brasileño.", price: 1600, stock: 50, image: "/assets/feijao_preto.jpeg" },
  { name: "Soja Orgánica", category: "Legumbres", description: "Soja sin modificaciones genéticas.", price: 1400, stock: 45, image: "/assets/soja_em_graos_organico.jpeg" },
];

const uploadProducts = async () => {
  try {
    const collectionRef = collection(db, "products");
    for (const product of products) {
      await addDoc(collectionRef, product);
    }
    console.log("✅ Productos con imágenes subidos correctamente.");
  } catch (error) {
    console.error("❌ Error al subir los productos:", error);
  }
};

uploadProducts();
