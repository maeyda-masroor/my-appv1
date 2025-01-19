

"use client"
import React, { createContext, useContext, useState } from "react";

// Define cart item type
type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image:string;
};

// Define cart context type
type CartContextType = {
  cart: { items: CartItem[] };
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateCartItem: (id: string, quantity: number) => void; // Update item by ID and quantity
  clearCart: () => void;
};

// Create context
const CartContext = createContext<CartContextType | undefined>(undefined);

// CartProvider wraps the application and provides cart state
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<{ items: CartItem[] }>({ items: [] });

  // Add an item to the cart or increase its quantity
  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.items.find((i) => i.id === item.id);
      if (existingItem) {
        // If the item already exists, increase its quantity
        return {
          items: prevCart.items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
          ),
        };
      } else {
        // Otherwise, add it to the cart
        return { items: [...prevCart.items, item] };
      }
    });
  };

  // Remove an item from the cart by ID
  const removeFromCart = (id: string) => {
    setCart((prevCart) => ({
      items: prevCart.items.filter((item) => item.id !== id),
    }));
  };

  // Update an item's quantity in the cart
  const updateCartItem = (id: string, quantity: number) => {
    setCart((prevCart) => ({
      items: prevCart.items.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(0, quantity) } : item
      ),
    }));
  };

  // Clear the entire cart
  const clearCart = () => {
    setCart({ items: [] });
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateCartItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};