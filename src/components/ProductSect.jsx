import React from "react";
import Product from "./Product";

function ProductSect({ products }) {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
      {products
        .slice(0, 4)
        .map(({ id, title, price, description, category, image, rating }) => (
          <Product
            key={id} //key (id) for React to identify products and map efficiently
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
            rate={rating.rate}
            count={rating.count}
          />
        ))}

      <img
        className="md:col-span-full"
        src="/images/banner_advert copy.jpg"
        alt="Banner advertisement"
      />

      <div className="md:col-span-2">
        {products
          .slice(4, 5)
          .map(({ id, title, price, description, category, image, rating }) => (
            <Product
              key={id} //key (id) for React to identify products and map efficiently
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
              rate={rating.rate}
              count={rating.count}
            />
          ))}
      </div>

      {products
        .slice(5, products.length)
        .map(({ id, title, price, description, category, image, rating }) => (
          <Product
            key={id} //key (id) for React to identify products and map efficiently
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
            rate={rating.rate}
            count={rating.count}
          />
        ))}
    </div>
  );
}

export default ProductSect;
