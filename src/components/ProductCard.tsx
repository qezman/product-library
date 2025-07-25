import { Link } from "react-router-dom";
import Badge from "./types/Badge";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

// Component receives a product prop and renders a clickable card
export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="block border rounded-lg overflow-hidden shadow hover:shadow-lg transition bg-white"
    >
      <div className="p-4 bg-gray-50">
        <img
          src={product.image}
          alt={product.title}
          className="w-[20%] h-48 mx-auto"
        />
      </div>

      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-bold text-lg line-clamp-2">{product.title}</h2>
          <Badge text={product.category} color="green" />
        </div>
        <p className="text-indigo-600 font-semibold">${product.price}</p>
      </div>
    </Link>
  );
}
