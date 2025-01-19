"use client"

import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { useEffect, useState } from "react";
import React from "react";
import Slider from "react-slick"; // Import react-slick
import "slick-carousel/slick/slick.css"; // Import Slick CSS
import "slick-carousel/slick/slick-theme.css"; // Import Slick Theme
import Image from "next/image";
import CART from '../../public/website/fluent_cart-24-regular.png';
import Heart from '../../public/website/uil_heart-alt.png';
import magnify from '../../public/website/uil_search-plus (1).png';

interface ProductsProps {
  category: string; // New prop to pass category name
}

function Products({ category }: ProductsProps) {
  const [products, setProduct] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      // Adjust the query to use category's name to fetch matching products
      const query = `
        *[_type == "product" && category -> _id  == $category] {
          _id,
          name,
          price,
          description,
          discountPercentage,
          stockLevel, // Fetch category title directly
          rating,
          color[],
          additionalInfo,
          image
        }
      `;
      // Pass the category name as a parameter for querying
      const data = await client.fetch(query, { category }); 
      setProduct(data);
    }

    fetchData();
  }, [category]); // Dependency on category prop to refetch when it changes

  const sliderSettings = {
    dots: true, // Pagination dots
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 4, // Default slides visible
    slidesToScroll: 1, // Scroll one slide at a time
    responsive: [
      {
        breakpoint: 1024, // lg and below
        settings: {
          slidesToShow: 1, // Show 1 slide
          vertical: true, // Enable vertical scrolling
        },
      },
    ],
  };

  return (
    <section className="space-y-4 lg:pr-56 lg:pl-56 pt-20 overflow-x-hidden">
      <div className="text-center">
        <h1 className="text-3xl font-semibold">Related Products </h1>
      </div>
      {/* Slick Carousel */}
      <div className="lg:block pt-10">
        <Slider {...sliderSettings}>
          {products.map((product) => (
            <div key={product._id}>
              <div className="bg-white shadow-md rounded-lg transition-shadow duration-300 group relative p-4 mx-auto">
                <div className="hidden group-hover:block h-[29px] w-[90px]">
                  <div className="flex">
                    <Image src={Heart} alt="c" width={15} height={15} />
                    <Image src={CART} alt="c" width={15} height={15} />
                    <Image src={magnify} alt="c" width={15} height={15} />
                  </div>
                </div>
                <div className="w-[270px] h-[236px] bg-gray-300 p-4">
                  {product.image ? (
                    <Image
                      src={urlFor(product.image).url()} 
                      alt={product.name || "Product Image"}
                      width={200}
                      height={200}
                    />
                  ) : (
                    <p>No image available</p> // Fallback for missing images
                  )}
                  <div className="hidden group-hover:block h-[29px] w-[94px] bg-green pl-1 pr-1 text-xs p-2 mt-3 ml-3">
                    View Details
                  </div>
                </div>
                <div className="hover:bg-blue hover:text-white">
                  <h3 className="text-lg font-semibold mb-2 text-pink text-center">{product.name}</h3>
                  <p className="text-gray-600 mb-2 text-center">Code: {product.code}</p>
                  <p className="text-gray-600 mb-2 text-center font-bold">{product.price}</p>
                  {/* Render category name here */}
                  <p className="text-black">{product.category}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Products;
