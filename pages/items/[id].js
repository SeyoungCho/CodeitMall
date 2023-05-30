import { useRouter } from "next/router";
import instance from "@/lib/axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import SizeReviewList from "@/components/SizeReviewList";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState();
  const [sizeReviews, setSizeRevies] = useState([]);

  const getProduct = async (targetId) => {
    const res = await instance.get(`/products/${targetId}`);
    const nextProduct = res.data;
    setProduct(nextProduct);
  };
  const getSizeReviews = async (targetId) => {
    const res = await instance.get(`/size_reviews/?product_id=${targetId}`);
    const nextSizeReviews = res.data.results ?? [];
    setSizeRevies(nextSizeReviews);
  };
  useEffect(() => {
    if (!id) return;
    getProduct(id);
    getSizeReviews(id);
  }, [id]);
  if (!product) return null;
  return (
    <div>
      <h1>{product.name}</h1>
      <Image src={product.imgUrl} alt={product.name} width={200} height={200} />
      <SizeReviewList sizeReviews={sizeReviews} />
    </div>
  );
}
