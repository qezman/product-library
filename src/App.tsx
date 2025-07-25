import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { CartContext } from "./CartContext";

export default function App() {
  const { cart } = useContext(CartContext); //Access cart from context
  return (
    <div className="min-h-screen ">
      <header className="shadow p-4 bg-white fixed top-0 w-full z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link to={"/"} className="text-xl font-bold text-indigo-600">
            ProductLib
          </Link>

          <Link to={"/cart"} className="text-sm text-gray-700 hover:underline">
            Cart({cart.length})
          </Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6 mt-30">
        <Outlet />
      </main>
    </div>
  );
}
