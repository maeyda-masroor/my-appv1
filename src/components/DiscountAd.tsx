"use client"
import Link from "next/link";
import Image from "next/image";
import Ad1 from '../../public/website/image 1161.png';
import Ad2 from '../../public/website/image 1162.png';
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { useState ,useEffect } from "react";
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


    return (
      <div className="flex justify-center">
      <div className="grid grid-cols-3 gap-4 mt-20">
        {/* Column 1 - 40% width */}
        <div className="col-span-3 md:col-span-2 lg:col-span-1 bg-lightpink  w-[420px] h-[250px] gap-3 ">
          <div className="text-blue">
            <h1 className="text-lg">20% off in All Products</h1>
            <p className="underline text-pink decoration-2"><Link href='/shop'>Shop Now</Link></p>
          </div>
        <div className="pl-20">
            <Image src={Ad2} alt="c" width={213} height={150}/>
        </div>
        </div>
  
        {/* Column 2 - 40% width */}
        <div className="col-span-3 md:col-span-2 lg:col-span-1 bg-lightpurple p-4 w-[420px] h-[250px]">
        <div className="text-blue">
            <h1 className="text-lg">23% off in All Products</h1>
            <p className="underline text-pink decoration-2"><Link href='/shop'>View Collection</Link></p>
          </div>
        <div className="pl-20">
            <Image src={Ad1} alt="c" width={213} height={150}/>
        </div>
         
         </div>
  
        {/* Column 3 - 20% width, hidden on sm and md */}
        <div className="hidden lg:block lg:col-span-1 text-black lg:pl-24 h-[250px] w-[267px] overflow-y-auto">
        {products.map((item) => (
        <div
          key={item.id}
          className="p-4 mb-2 bg-blue-500 text-black rounded-md shadow"
        >
            <div className="flex gap-2">
            <div>
            {item.image ? (
                <Image
                src={urlFor(item.image).url()} // Use category.image
                alt={item.name || "Category Image"}
                width={200}
                height={200}
              />
            ) : (
              <p>No image available</p> // Fallback for missing images
            )}
            </div>
            <div className="w-[200px] h-[33px]">
            <h1 className="text-sm">{item.name}</h1>
            <p className="text-sm">{item.price}</p>
            </div>            
            </div>
        </div>
      ))}

        </div>
      </div>
      </div>
    );
  }
  export default Products;
  