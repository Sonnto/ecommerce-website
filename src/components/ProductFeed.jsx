import Product from "./Product";

function ProductFeed({ products }) {
  return (
    <div>
      <h1>Products Here...</h1>
      {console.log(`Checking if products be working: ${products}`)}
      {products.map(({ id, title, price, description, category, image }) => (
        <Product
          key={id} //key (id) for React to identify products and map efficiently
          id={id}
          title={title}
          price={price}
          description={description}
          category={category}
          image={image}
        />
      ))}
    </div>
  );
}

export default ProductFeed;
