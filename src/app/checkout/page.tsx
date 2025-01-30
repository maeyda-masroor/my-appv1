"use client";

"use client";

import { useCart } from "../context/CartContext";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { cart, getCartTotal, removeFromCart } = useCart();
  const router = useRouter();
  const [user, setUser] = useState({ name: "", email: "", address: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user.name || !user.email || !user.address) {
      alert("Please fill in all fields.");
      return;
    }

    const order = {
      user,
      products: cart.items,
      total: getCartTotal(),
    };
    console.log("🛒 Cart Items in Checkout:", cart.items); // Debugging
    const response = await fetch("/api/payment", {
      method: "POST",
      body: JSON.stringify(order),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      alert("Order placed successfully!");
      router.push("/thank-you");
      localStorage.removeItem("cart"); // Clear cart after checkout
    } else {
      alert("Failed to place order.");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Checkout</h1>

      {/* Cart Items */}
      {cart.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.items.map((item) => (
            <div key={item.id} className="flex justify-between p-2 border-b">
              <span>{item.name} (x{item.quantity})</span>
              <span>${item.price * item.quantity}</span>
              <button onClick={() => removeFromCart(item.id)} className="text-red-500">
                Remove
              </button>
            </div>
          ))}
          <p className="font-bold mt-2">Total: ${getCartTotal()}</p>
        </>
      )}

      {/* User Form */}
      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4">
        <input
          type="text"
          placeholder="Full Name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          className="border p-2"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          className="border p-2"
          required
        />
        <input
          type="text"
          placeholder="Address"
          value={user.address}
          onChange={(e) => setUser({ ...user, address: e.target.value })}
          className="border p-2"
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Place Order
        </button>
      </form>
    </div>
  );
}
