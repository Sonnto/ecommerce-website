function ProductFeed({ products }) {
  return (
    <div>
      <h1>Products Here...</h1>
      {console.log("Here:" + products)}
      {products.map((product) => (
        <p>{product.title}</p>
      ))}
    </div>
  );
}

export default ProductFeed;
