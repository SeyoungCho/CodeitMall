import SearchForm from "@/components/SearchForm";
import styles from "@/styles/Home.module.css";
import ProductList from "@/components/ProductList";
import instance from "@/lib/axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    try {
      const res = await instance.get("/products");
      const nextProducts = res.data.results;
      setProducts(nextProducts);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <h1>CodeitMall</h1>
      <SearchForm />
      <ProductList products={products} />
    </>
  );
}
