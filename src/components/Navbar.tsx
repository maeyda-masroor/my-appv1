"use client";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import Image from "next/image";
import Search from '../../public/website/uil_search-plus.png';
import React, { useState } from "react";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState<any>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSearch = async () => {
    if (!searchQuery) return;
    setLoading(true);
  
    try {
      const result = await client.fetch(
        `*[_type == "product" && name match ${searchQuery}] {
          _id,
          name,
          price,
          "imageUrl": image.asset->url
        }`,
      );
  setProducts(result);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
      setIsModalOpen(true); // Open modal after search
    }
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setProducts([]); // Clear results when closing
  };
    return (
      <nav className="bg-white lg:pl-56 lg:pr-56 p-4 overflow-x-hidden">
        <div
          className="
            grid
            grid-cols-1 gap-4
            lg:grid-cols-3 lg:items-center
          "
        >
          {/* Logo */}
          <div className="logo text-black text-2xl font-bold lg:justify-self-start">
            <Link href="/">Hekto</Link>
          </div>
  
          {/* Middle List */}
          <ul className="flex flex-col items-center space-y-2 lg:flex-row lg:justify-center lg:space-y-0 lg:space-x-6 text-black">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/product">Product</Link></li>
            <li><Link href="/blog">BLog</Link></li>
            <li><Link href="/shop">Shop</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
          {/* Search Bar */}
          <div className="search-bar flex justify-center lg:justify-end">
            
          <div className="flex items-center bg-gray-100 rounded px-2 py-1">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="bg-transparent border-none outline-none px-2 py-1"
            />
            <button
              onClick={handleSearch}
              className="p-2 bg-pink-500 text-white rounded hover:bg-pink-600"
            >
              <Image src={Search} alt="Search" width={20} height={20} />
            </button>
          </div>
           {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-4/5 max-h-[80vh] overflow-auto">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-bold">Search Results</h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-4">
              {loading ? (
                <p>Loading...</p>
              ) : products.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                  {products.map((product:any) => (
                    <div
                      key={product._id}
                      className="border p-4 rounded shadow hover:shadow-lg"
                    >
                      <img
                        src={product?.imageUrl}
                        alt={product.name}
                        className="w-full h-40 object-cover"
                      />
                      <h3 className="text-lg font-bold">{product.name}</h3>
                      <p className="text-gray-500">${product.price}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No products found</p>
              )}
            </div>
          </div>
        </div>
      )}
          </div>
        </div>
      </nav>
    );
  }
  