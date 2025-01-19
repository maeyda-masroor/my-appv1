"use client"
import Link from "next/link";
import Image from "next/image";
import facebook from '../../../../../public/404.png';
import Related from '../../../components/RelatedProduct';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Sponser from "../../../components/Sponsers";
import ReviewForm from "@/components/ReveiwForm";
import StarRating from "@/components/StarRating";
import Share from '../../../../public/website/Group 205.png';
import { useCart } from "../../context/CartContext";
import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
export default function ProductPage({ params }: { params: { id: string } }) {
    const [product, setProduct] = useState<any>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);  
    const { addToCart } = useCart(); // useCart hook to access the cart context
    
    useEffect(() => {
        const fetchProductData = async () => {
          try {
            const query = `*[_type == "product" && _id == $productId]{
              _id,
              name,
              description,
              price,
              image,
              category-> { _id, name }
            }[0]`;
            const data = await client.fetch(query, { productId: params.id });
            setProduct(data);
          } catch (err) {
            setError("Failed to fetch product data");
          } finally {
            setIsLoading(false);
          }
        };
    
        fetchProductData();
      }, [params.id]);

      if (isLoading) return <div>Loading...</div>;
      const handleAddToCart = (product:any) => {
        addToCart({ ...product, quantity: 1 });
       };
      
  return (
    <div className=""> 
    <div className="mx-auto w-full  bg-lightpurple">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4   p-10">
      <nav className="text-sm">
      <h1 className="text-6xl text-black">Product Details</h1>
        <ol className="flex space-x-2">
          <li>
            <Link href="/" className="text-blue-500 hover:text-blue-700">Home</Link>
          </li>
          <li className="text-gray-500">.</li>
          <li>
            <Link href="#" className="text-blue-500 hover:text-blue-700">Product Details</Link>
          </li>
        </ol>
      </nav>
    </div> 
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4">
  <div className="p-4">
    {/* Inner grid with 20% and 80% columns */}
    <div className="grid grid-cols-5 gap-4 lg:pr-56 lg:pl-56">
      <div className="col-span-1 p-4">
        {product?.image && (
        <Image
          src={urlFor(product.image).url()}
          alt={product.name}
          width={400}
          height={400}
        />
      )}
      <br/>
      {product?.image && (
        <Image
          src={urlFor(product.image).url()}
          alt={product.name}
          width={400}
          height={400}
        />
      )}
      {product?.image && (
        <Image
          src={urlFor(product.image).url()}
          alt={product.name}
          width={400}
          height={400}
        />
      )}
      </div>
      <div className="col-span-4 bg-blue-500 p-4">{product?.image && (
        <Image
          src={urlFor(product.image).url()}
          alt={product.name}
          width={400}
          height={400}
        />
      )}</div>
    </div>
  </div>
  <div className="p-4">
    <h1 className="font-extrabold text-black">{product?.name}</h1>
    <StarRating rating={product?.rating}/>
    <p className="font-semibold text-black">{product?.price}<del className="text-pink">{product?.discount}</del></p>
    <p className="text-black">{product?.description}</p>
    <button className="bg-black text-white w-full h-16 mt-10" onClick={() => handleAddToCart(product)}>Add to Cart</button>
    <p>Categories </p>
    <p>Tags</p>
    <div className="flex">
      <h1 className="text-black">share</h1>
      <div className="flex"><Image src={Share} alt="x" width={50} height={50}/>
      </div>

    </div>
  </div>
</div>
<div className="bg-lightpurple lg:pl-56 lg:pr-56">
<Tabs className="place-items-start p-10">
      {/* Tab List */}
      <TabList className="flex space-x-2 p-10">
      <Tab className="px-4 py-2 text-gray-500 hover:text-pink cursor-pointer selected:bg-pink selected:text-black selected:text-pink">
          Description
        </Tab>
        <Tab className="px-4 py-2 text-gray-500 hover:text-pink cursor-pointer selected:bg-pink selected:text-black selected:text-pink">
            Additional Info
        </Tab>
        <Tab className="px-4 py-2 text-gray-500 hover:text-pink cursor-pointer selected:bg-pink selected:text-black selected:text-pink">
              Reviews
          </Tab>
          <Tab className="px-4 py-2 text-gray-500 hover:text-pink cursor-pointer selected:bg-pink selected:text-black selected:text-pink">
            video
          </Tab> 
      </TabList>

      {/* Tab Panels */}
      <TabPanel>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1 gap-4">
        <h3 className='text-3xl'>
          {product?.description}
        </h3>
        </div>
      </TabPanel>
      <TabPanel>
      <h3 className='text-3xl'>
        {product?.description}
      </h3>
      </TabPanel>
      <TabPanel>
      <h3 className='text-3xl'>
       <ReviewForm productId={product._id}/>
      </h3>
      </TabPanel>
      <TabPanel>
      <h3 className='text-3xl'>
        {product?.description}
      </h3>
      </TabPanel>
    </Tabs>

    </div>
    <div>
    <Related category={product.category._id} />
    </div>
    <div>
      <Sponser/>
    </div>

  </div>

  );
}
