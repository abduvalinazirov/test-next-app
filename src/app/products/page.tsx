import ProductsList from "@/components/ProductsList";
import React from "react";

const Products = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "default",
  });
  const data = await res.json();

  return (
    <div>
      <ProductsList initialData={data} />
    </div>
  );
};

export default Products;
