import { useParams } from "react-router-dom";
import type { Product } from "../components/ProductCard";
import Badge from "../components/types/Badge";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../CartContext";
import { SkeletonCard } from "../Skeleton";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((data) => setProduct(data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <SkeletonCard />;
  if (error || !product)
    return <p className="text-center text-red-500">Product not found</p>;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded-lg">
      <img
        src={product.image}
        alt={product.title}
        className="mx-auto w-64 h-64 object-contain mb-4"
      />
      <h1 className="font-bold text-2xl mb-2">{product.title}</h1>
      <div className="flex justify-between items-center mb-4 ">
        <p className="text-indigo-600 font-semibold text-xl mb-4">
          ${product.price}
        </p>
        <Badge text={product.category} color="green" />
      </div>
      <p className="text-gray-700">{product.description}</p>
      <button
        className="px-4 py-2 mt-6 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}

