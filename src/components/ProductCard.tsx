"use client"
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { useState ,useEffect } from "react";
import React from "react";
import Slider from "react-slick"; // Import react-slick
import "slick-carousel/slick/slick.css"; // Import Slick CSS
import "slick-carousel/slick/slick-theme.css"; // Import Slick Theme
import Image from "next/image";
import P1 from '../public/image 1.png';
function Products() {
    const [products, setProduct] = useState<any[]>([]);
    useEffect(() => {
      async function fetchData() {
        const query = `
        *[_type == "product"] {
        _id,
        name,
        price,
        description,
        discountPercentage,
        stockLevel,
        "categoryName": category->title, // Fetch the title of the referenced category
        rating,
        color[],
        additionalInfo,
        image
        }
        `;

        const data = await client.fetch(query);
        setProduct(data);
      }
  
      fetchData();
    }, []);

    const sliderSettings = {
        dots: true, // Pagination dots
        infinite: true, // Infinite scrolling
        speed: 500, // Transition speed
        slidesToShow: 4, // Default slides visible
        slidesToScroll: 1,
         // Scroll one slide at a time
        responsive: [
          {
            breakpoint: 1024, // lg and below
            settings: {
              slidesToShow: 1, // Show 1 slide
              vertical: true, // Enable vertical scrolling
            },
          },
          {
            breakpoint: 768, // lg and below
            settings: {
              slidesToShow: 1, // Show 1 slide
              vertical: true, // Enable vertical scrolling
            },
          },
          {
            breakpoint: 640, // md and below
            settings: {
              slidesToShow: 1, // Show 2 slides
              vertical: false, // Horizontal scrolling
            },
          },
        ],
      };
      return ( 
      <div className="lg:block pt-10 overflow-x-hidden">
        <Slider {...sliderSettings}>
          {products.map((product) => (
            <div key={product.id}>
              <div className=" shadow-md rounded-lg transition-shadow duration-300 group relative mx-auto">
                <div className="w-[270px] h-[350px]  p-4">
                {product.image ? (
                <Image
                src={urlFor(product.image).url()} // Use category.image
                alt={product.name || "Category Image"}
                width={200}
                height={200}
              />
            ) : (
              <p>No image available</p> // Fallback for missing images
            )}
                <h3 className="text-lg font-semibold mb-2 text-pink text-center">{product.name}</h3>
                <p className="text-gray-600 mb-2 text-center">Code:{product.price}<del className="text-gray-400">{product.discount}</del></p>
                </div>
                <div className="hover:bg-blue">
                </div>
              </div>
            </div>
          ))}
        </Slider>
        </div>
      )
}
export default Products;