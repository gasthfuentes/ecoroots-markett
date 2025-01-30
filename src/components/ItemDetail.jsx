function ItemDetail({ product }) {
  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
    </div>
  );
}

export default ItemDetail;
