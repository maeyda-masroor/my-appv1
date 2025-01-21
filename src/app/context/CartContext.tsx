// Define cart item type
"use client";
/*import React, { createContext, useContext, useState ,useEffect } from "react";

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
  //const [cart, setCart] = useState<{ items: CartItem[] }>({ items: [] });
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  // Add an item to the cart or increase its quantity
  /*const addToCart = (item: CartItem) => {
    setCartItems((prevCart) => {
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
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

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
};*/
// context/CartContext.tsx

// context/CartContext.tsx

import React, { createContext, useContext, useState, useEffect } from "react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  cart: { items: CartItem[] };
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateCartItem: (id: string, quantity: number) => void;
  getCartTotal: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
const [cart, setCart] = useState<{ items: CartItem[] }>({ items: [] });

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      const existingItem = prev.items.find((i) => i.id === item.id);
      if (existingItem) {
        return {
          items: prev.items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }
      return { items: [...prev.items, item] };
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => ({
      items: prev.items.filter((item) => item.id !== id),
    }));
  };

  const updateCartItem = (id: string, quantity: number) => {
    setCart((prev) => ({
      items: prev.items.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item
      ),
    }));
  };

  const getCartTotal = () => {
    return cart.items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateCartItem, getCartTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
