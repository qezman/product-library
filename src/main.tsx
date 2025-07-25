import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Product from "./pages/Product";
import "./index.css"; // <-- using the new CSS import
import Cart from "./Cart";
import { CartProvider } from "./CartContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "product/:id", element: <Product /> },
      {path: 'cart', element: <Cart/>}
    ],
  },
]);

// Wrap entire app with CartProvider
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);


