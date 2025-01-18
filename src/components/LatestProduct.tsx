"use client"
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { useEffect, useState } from "react";
import Image from "next/image";
import Sale from '../../public/website/Group 153.png';
import wish from '../../public/webiste/Group 162.png';
import cart from '../../public/website/Group 27.png';
import HEART from '../../public/website/uil_heart-alt.png';
import Cart from "../../public/website/fluent_cart-24-regular.png";
import MAGNIFY from '../../public/website/uil_search-plus.png';
import magnify from '../../public/website/Group 28.png';
function Products() {
    const [products, setProduct] = useState<any[]>([]);
  
    useEffect(() => {
      async function fetchData() {
        const query = `
        *[_type == "product" &&  isLatestProduct == true] {
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

return (
    <section className="space-y-4 lg:pr-56 lg:pl-56 pt-20 overflow-x-hidden">
    <div className="text-center">
    <h1 className="text-3xl font-semibold">Latest Products</h1>
  </div>  
    <div className="">
    <Tabs className="">
      {/* Tab List */}
      <TabList className="flex space-x-2 justify-center">
      <Tab className="px-4 py-2 text-gray-500 hover:text-pink cursor-pointer selected:bg-pink selected:text-black selected:text-pink">
          New Arrival
        </Tab>
        <Tab className="px-4 py-2 text-gray-500 hover:text-pink cursor-pointer selected:bg-pink selected:text-black selected:text-pink">
          Best Seller
        </Tab>
        <Tab className="px-4 py-2 text-gray-500 hover:text-pink cursor-pointer selected:bg-pink selected:text-black selected:text-pink">
          Featured
        </Tab>
        <Tab className="px-4 py-2 text-gray-500 hover:text-pink cursor-pointer selected:bg-pink selected:text-black selected:text-pink">
          Special Offer
        </Tab>
      </TabList>
      {/* Tab 1 */}
      <TabPanel>
        <div className="lg:overflow-x-auto">
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Items for Tab 1 */}
            {products.slice(0,5).map((product) => (
            <div key={product.id}>
              <div className=" shadow-md rounded-lg transition-shadow duration-300 group relative mx-auto">
                <div className="w-[270px] h-[350px]  p-4">
                <div className="flex">
                <div className="hidden group-hover:block h-[29px] w-[90px]">
                <div className="">
                    <Image src={cart} alt="c"width={50} height={50}/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <Image src={HEART} alt="c"width={15} height={15}/>
                    <Image src={magnify} alt="c"width={15} height={15}/>
                    <Image src={MAGNIFY} alt="x" width={15} height={15}/>
                </div>
                </div>
                <div className="">
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
                </div>
                </div>
                <div className="flex gap-10">
                <h3 className="text-lg font-semibold mb-2 text-pink text-center">{product.name}</h3>
                <p className="text-gray-600 mb-2 text-center">{product.price}<del className="text-gray-400">{product.discount}</del></p>
                </div>
                <div className="hover:bg-blue">
              </div>
              </div>
            </div>
            </div>
          ))}

          {/* Additional Items (will be scrollable) */}
        </div>
        </div>
      </TabPanel>

      {/* Tab 2 */}
      <TabPanel>
        <div className="overflow-x-auto">
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product.id}>
              <div className=" shadow-md rounded-lg transition-shadow duration-300 group relative">
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
                <div className="flex gap-10">
                <h3 className="text-lg font-semibold mb-2 text-pink text-center">{product.name}</h3>
                <p className="text-gray-600 mb-2 text-center">{product.price}<del className="text-gray-400">{product.discount}</del></p>
                </div>
                <div className="hover:bg-blue">
                </div>
              </div>
              </div>
            </div>
          ))}

          </div>
          </div>
      </TabPanel>

      {/* Tab 3 */}
      <TabPanel>
        <div className="overflow-x-auto">
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Items for Tab 3 */}
            {products.map((product) => (
            <div key={product.id}>
              <div className=" shadow-md rounded-lg transition-shadow duration-300 group relative">
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
                <div className="flex gap-10">
                <h3 className="text-lg font-semibold mb-2 text-pink text-center">{product.name}</h3>
                <p className="text-gray-600 mb-2 text-center">{product.price}<del className="text-gray-400">{product.discount}</del></p>
                </div>
                <div className="hover:bg-blue">
                </div>
              </div>
              </div>
            </div>
          ))} 
          </div>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="overflow-x-auto">
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Items for Tab 3 */}
            {products.map((product) => (
            <div key={product.id}>
              <div className=" shadow-md rounded-lg transition-shadow duration-300 group relative">
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
                <div className="flex gap-10">
                <h3 className="text-lg font-semibold mb-2 text-pink text-center">{product.name}</h3>
                <p className="text-gray-600 mb-2 text-center">{product.price}<del className="text-gray-400">{product.discount}</del></p>
                </div>
                <div className="hover:bg-blue">
                </div>
              </div>
              </div>
            </div>
          ))} 
          </div>
        </div>
      </TabPanel>
    
    </Tabs>
    </div>
    </section>
  );
};

export default Products;