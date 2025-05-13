"use client";

import Link from "next/link";
import React, { useState } from "react";

const ProductsList = ({ initialData }) => {
  const [data, setData] = useState(initialData);

  console.log('render');

  const refetch = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      cache: "default",
    });
    const new_data = await res.json();
    setData(new_data);
  };

  return (
    <div>
      <button onClick={refetch}>Refetch</button>
      <ul>
        {data?.map((item, index) => (
          <li key={item?.id}>
            <Link href={`/products/detail/${item?.id}`}>
              {index + 1}. {item?.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
