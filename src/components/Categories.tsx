"use client"
import Link from "next/link";
import React from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { useState ,useEffect } from "react";
import Slider from "react-slick"; // Import react-slick
import "slick-carousel/slick/slick.css"; // Import Slick CSS
import "slick-carousel/slick/slick-theme.css"; // Import Slick Theme
import Image from "next/image";
function Products() {
    const [products1, setProduct] = useState<any[]>([]);
  
    useEffect(() => {
      async function fetchData() {
        const query = `
        *[_type == "category1"] {
          _id,
          id,
          name,
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
          breakpoint:1366,
          settings:{
            slideToshow:2,
            vertical:false
          }
        },
        {
          breakpoint: 1024, // lg and below
          settings: {
            slidesToShow: 2, // Show 1 slide
            vertical: false, // Enable vertical scrolling
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
        <section className="space-y-4 lg:pr-32 lg:pl-32 pt-20 sm:pr-20 sm:pl-20 overflow-x-hidden">
          <div className="text-center">
            <h1 className="text-3xl font-semibold">Top Categories</h1>
          </div>
          <div className="lg:block pt-10 slider-container mx-auto p-2 sm:pl-10">
            <Slider {...sliderSettings}>
              {products1.length === 0 ? (
                <p>No categories available</p> // Fallback if no categories found
              ) : (
                products1.map((c) => (
                  <div key={c._id} className="flex justify-center">
                    <div className="w-[269px] h-[345px] bg-white group relative mx-auto">
                      {c.image ? (
                        <Image
                          src={urlFor(c.image).url()} // Use category.image
                          alt={c.name || "Category Image"}
                          width={200}
                          height={200}
                        />
                      ) : (
                        <p>No image available</p>
                      )}
                      <div className="h-auto text-center">
                        <h3 className="hover:text-pink text-gray-800">{c.name}</h3>
                        <Link href={`/category/${c._id}`}>
                          <p className="underline decoration-2 decoration-blue">
                            Read More
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </Slider>
          </div>
        </section>
      );
    }

export default Products;