import ProductList from "@/components/ProductList";
import SearchForm from "@/components/SearchForm";
import instance from "@/lib/axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Search() {
  const router = useRouter();
  const { q } = router.query;
  const [searchResult, setSearchResult] = useState([]);

  const getSearchResult = async (q) => {
    try {
      const res = await instance.get(`/products/?q=${q}`);
      const results = res.data.results;
      setSearchResult(results);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getSearchResult(q);
  }, [q]);
  return (
    <div>
      <h1>Search 페이지</h1>
      <SearchForm initialValue={q} />
      <div>{q} 검색결과</div>
      <ProductList products={searchResult} />
    </div>
  );
}
