import { useContext } from "react";
import { CartContext } from "./CartContext";

export default function Cart() {
  const { cart } = useContext(CartContext);

  if (cart.length === 0) {
    return <p className="text-center text-gray-600">Your cart is empty.</p>;
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.map((item, id) => (
        <div key={id} className="border p-4 bg-white rounded shadow">
          <div className="flex justify-between">
            <p className="font-semibold">{item.title}</p>
            <span className="text-indigo-600 font-medium">${item.price}</span>
          </div>
        </div>
      ))}
      <div className="text-right font-bold text-lg">
        Total: ${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
      </div>
    </div>
  );
}
