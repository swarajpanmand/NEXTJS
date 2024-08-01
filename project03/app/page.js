"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let response = await fetch("https://dummyjson.com/products");
        let data = await response.json();
        console.log(data);
        setProduct(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      {product.map((item) => (
        <h1 key={item.id}>Name: {item.title}</h1>
      ))}
    </div>
  );
}