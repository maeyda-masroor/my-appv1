import Link from "next/link"
import Image from "next/image"
import Contact1 from '../../../public/website/Group 124.png';
export default function Contact(){
    return <div className="lg:pl-45 lg:pr-45"> 
    <div className="mx-auto w-full  bg-lightpurple">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4   p-10">
      <nav className="text-sm">
      <h1 className="text-6xl text-black">Contact</h1>
        <ol className="flex space-x-2">
          <li>
            <Link href="/" className="text-blue-500 hover:text-blue-700">Home</Link>
          </li>
          <li className="text-gray-500">.</li>
          <li>
            <Link href="#" className="text-blue-500 hover:text-blue-700">FAQ</Link>
          </li>
        </ol>
      </nav>
    </div> 
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4  mx-auto mt-10 overflow-x-hidden">
        <div className="p-10">
            <h2 className="text-2xl">Information About us</h2>
            <p className="text-lg text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
        </div>
        <div className="p-10">
        <h2 className="text-2xl">Contact Way</h2>
        <div className="flex gap-10">
            <div className="text-sm">
                <p className="text-black">
                Tel: 877-67-88-99
                </p>
                <p className="text-black">
                E-Mail: shop@store.com 
                </p>
                <br/>
                <p className="text-sm text-black">
                20 Margaret st, London
                </p>
                <p className="text-sm text-black">
                Great britain, 3NM98-LK 
                </p>
            </div>
            <div className="text-sm">
                <p className="text-black">
                Support Forum 
                </p>
                <p className="text-black">
                For over 24hr
                </p>
                <br/>
                <p className="text-sm text-black">
                Free standard shipping
                </p>
                <p className="text-sm text-black">
                on all orders.
                </p>
            </div>
        </div>
        </div>  
  
  
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4  mx-auto mt-10">
    <div className="p-10">
    <h1 className="text-black text-2xl">Get In touch</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices  tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.</p>
    <form className="space-y-4 p-4">
      {/* Grid for two input fields side by side on larger screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="p-2 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          placeholder="Your Email"
          className="p-2 border border-gray-300 rounded-md"
        />
      </div>
      
      {/* Single input field */}
      <input
        type="text"
        placeholder="Your Subject"
        className="w-full p-2 border border-gray-300 rounded-md"
      />
      
      {/* Textarea */}
      <textarea
        placeholder="Type your message"
        className="w-full p-2 border border-gray-300 rounded-md"
      />
      <div className="flex justify-start">
      <button 
        type="submit" 
        className="px-6 py-2 bg-pink text-black rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Send
      </button>
    </div>
    </form>

    </div>
    <div className="">
        <Image src={Contact1} width={450} height={450} alt="X"/>
    </div>
 </div>

  </div>
}