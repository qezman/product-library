import { createContext, useContext, useState, ReactNode } from "react";
import type { Product } from "./components/ProductCard";

interface CartContextType {
  cart: Product[]; // items in the cart
  addToCart: (product: Product) => void; // method to add items to cart
}

export const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
});

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Product[]>([]);

  // Function to add an item to the cart
  function addToCart(product: Product) {
    setCart((prev) => [...prev, product]);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}
