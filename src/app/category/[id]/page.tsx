"use client"
import StarRating from "@/components/StarRating";
import Link from "next/link";
import Image from "next/image";
import Wish from '../../../../public/website/Group 28.png';
import { useEffect, useState } from "react";
import Heart from '../../../../public/website/uil_heart-alt.png';
import Magnify from '../../../../public/website/uil_search-plus.png';
import { client } from "../../../sanity/lib/client"; // Your Sanity client setup
async function getProductsByCategory(id: string, page: number, perPage: number, sortOrder: string) {
  const query = `*[_type == "product" && category->_id == $id] | order(price ${sortOrder}) [${(page - 1) * perPage}...${page * perPage}] {
    _id,
    name,
    price,
    image,
    category-> { _id, name }
  }`;

  const data = await client.fetch(query, { id });
  return data;
}

export default function CategoryPage({ params }: { params: { id: string } }) {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(2);  // Show 2 products per page
  const [sortOrder, setSortOrder] = useState("asc");  // Default sorting: ascending

  // Fetch products when the component mounts
  useEffect(() => {
    async function fetchProducts() {
      const data = await getProductsByCategory(params.id, page, perPage, sortOrder);
      setProducts(data);
      setLoading(false);
    }

    fetchProducts();
  }, [params.id, page, perPage, sortOrder]); // Dependency array to fetch again if the category changes

  if (loading) return <div>Loading...</div>;

return (
    <div className=""> 
    <div className="mx-auto w-full  bg-lightpurple">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4   p-10">
      <nav className="text-sm">
      <h1 className="text-6xl text-black">Shop</h1>
        <ol className="flex space-x-2">
          <li>
            <Link href="/" className="text-blue-500 hover:text-blue-700">Home</Link>
          </li>
          <li className="text-gray-500">.</li>
          <li>
            <Link href="#" className="text-blue-500 hover:text-blue-700">Shop</Link>
          </li>
        </ol>
      </nav>
    </div> 
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4">
  <div className=" p-4"><h1 className="text-black font-extrabold">Ecommerce accessories & Fashion Items</h1></div>
  <div className="p-4">
  <div className="flex gap-4">
  <div className="flex">
    <label htmlFor="item1" className="text-sm font-semibold p-2">Per page</label>
    <input type="number" id="item1" className="border rounded w-[30px]" value={perPage} onChange={(e) => setPerPage(Number(e.target.value))} />
  </div>
  <div className="flex">
    <label htmlFor="item2" className="text-sm font-semibold p-2">Sort by</label>
    <select id="item2" className="border p-2 rounded w-[30px]" onChange={(e) => setSortOrder(e.target.value)}>
                <option value="asc">Price: Low to High</option>
                <option value="desc">Price: High to Low</option>
              </select>
    </div>
  <div className="flex">
    <label htmlFor="item3" className="text-sm font-semibold p-2">View As</label>
    <input type="text" id="item3" className="border p-2 rounded" />
  </div>
  </div>
  </div>
  </div>
  <div className="h-screen grid grid-cols-1 lg:grid-cols-5">
      {/* Left Sidebar (20%) */}
      <div
        className={`lg:block ${isOpen ? "block" : "hidden"} lg:col-span-1  text-black p-4 transition-all duration-300 ease-in-out`}
      >
        <button onClick={() => setIsOpen(false)} className="lg:hidden text-white">
          Close
        </button>
        <div className="space-y-4">
          <div>
          <h1 className="text-sm">Product Brand</h1>
          <div className="flex items-center space-x-2">
          <input type="checkbox" id="checkbox1" className="form-checkbox text-blue-500" />
          <label htmlFor="checkbox1" className="text-lg font-semibold">Unique Furnitture Restor</label>
        </div>
        <div className="flex items-center space-x-2">
          <input type="checkbox" id="checkbox1" className="form-checkbox text-blue-500" />
          <label htmlFor="checkbox1" className="text-lg font-semibold">Unique Furnitture Restor</label>
        </div>
        <div className="flex items-center space-x-2">
          <input type="checkbox" id="checkbox1" className="form-checkbox text-blue-500" />
          <label htmlFor="checkbox1" className="text-lg font-semibold">Fusion Dot High Fashion</label>
        </div>
          </div>
          <br/>
          <div>
          <h1 className="text-sm">Discount Offer</h1>
          <div className="flex items-center space-x-2">
          <input type="checkbox" id="checkbox1" className="form-checkbox text-blue-500" />
          <label htmlFor="checkbox1" className="text-lg font-semibold">20% cash back</label>
        </div>
        <div className="flex items-center space-x-2">
          <input type="checkbox" id="checkbox1" className="form-checkbox text-blue-500" />
          <label htmlFor="checkbox1" className="text-lg font-semibold">5% cash back offer</label>
        </div>
        <div className="flex items-center space-x-2">
          <input type="checkbox" id="checkbox1" className="form-checkbox text-blue-500" />
          <label htmlFor="checkbox1" className="text-lg font-semibold">25% discount offer</label>
        </div>
          </div>

          <div>
          <h1 className="text-sm">Rating Item</h1>
          <div className="flex items-center space-x-2">
          <input type="checkbox" id="checkbox1" className="form-checkbox text-blue-500" />
          <StarRating rating={4}/>
        </div>
        <div className="flex items-center space-x-2">
        <input type="checkbox" id="checkbox1" className="form-checkbox text-blue-500" />
          <StarRating rating={4}/>
        
        </div>
        <div className="flex items-center space-x-2">
        <input type="checkbox" id="checkbox1" className="form-checkbox text-blue-500" />
          <StarRating rating={4}/>
        </div>
        <br/>
        <div>
          <h1 className="text-sm">Categories</h1>
          <div className="flex items-center space-x-2">
          <input type="checkbox" id="checkbox1" className="form-checkbox text-blue-500" />
          <label htmlFor="checkbox1" className="text-lg font-semibold">Electronic</label>
        </div>
        <div className="flex items-center space-x-2">
          <input type="checkbox" id="checkbox1" className="form-checkbox text-blue-500" />
          <label htmlFor="checkbox1" className="text-lg font-semibold">Jewllery</label>
        </div>
        </div>
        <br/>
        <div>
          <h1 className="text-sm">Price Filter</h1>
          <div className="flex items-center space-x-2">
          <input type="checkbox" id="checkbox1" className="form-checkbox text-blue-500" />
          <label htmlFor="checkbox1" className="text-lg font-semibold">$0-$500</label>
        </div>
        <div className="flex items-center space-x-2">
          <input type="checkbox" id="checkbox1" className="form-checkbox text-blue-500" />
          <label htmlFor="checkbox1" className="text-lg font-semibold">$90-900</label>
        </div>
        </div>
      </div>
        </div>
      </div>

      {/* Right Content (80%) */}
      <div className="lg:col-span-4 p-4">
        {/* Toggle Icon for Mobile */}
        <button
          onClick={() => setIsOpen(true)}
          className="lg:hidden text-xl text-gray-800"
        >
          &#9776; {/* Hamburger icon */}
        </button>

        <div className="mt-4">
        <div>
        {products.map((p:any) => (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4 mt-8 text-black lg:pr-56 lg:pl-56 shadow-md bg-white"key={p.id}>    
          <div className="p-4"><Image src={p.image} alt="x" width={200} height={250}/></div>
          <div className="p-4"><h1 className="text-lg"><Link
              href={`/category/${params.id}/products/${p.id}`}
              className="text-yellow-600"
            >{p.name}</Link></h1>
          <div className="text-black"><p>{p.price}<span className="hover:text-pink text-black">{p.discount}</span></p><StarRating rating={p.rating}/>
          <p>{p.description}</p>
          </div>
          <div className="flex">
            <Image src={Wish} alt="c" height={50} width={50}/>
            <Image src={Heart} alt="c" height={50} width={50}/>
            <Image src={Magnify} alt="c" height={50} width={50}/>
          </div>
          </div>
        </div>
        ))}
        </div>
        <div className="mt-4 flex justify-center space-x-4">
              <button
                onClick={() => setPage(prev => Math.max(prev - 1, 1))}
                className="border p-2 rounded"
              >
                Previous
              </button>
              <span className="p-2">Page {page}</span>
              <button
                onClick={() => setPage(prev => prev + 1)}
                className="border p-2 rounded"
              >
                Next
              </button>
            </div>
        </div>
      </div>
    </div>
  </div>

  );
}