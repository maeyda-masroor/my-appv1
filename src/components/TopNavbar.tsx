"use client"
import Image from "next/image";
import EMAIL from '../../public/website/uil_envelope-alt 2.png';
import PHONE from '../../public/website/bx_bx-phone-call.png';
import CART from '../../public/website/fluent_cart-24-regular.png';
import HEART from '../../public/website/uil_heart-alt.png';
import Profile from '../../public/website/user.png';
import { useCart } from "../app/context/CartContext";
import Link from "next/link";
import { useWishlist } from "@/app/context/wishContext";
const Navbar: React.FC = () => 
  {
  const { cart } = useCart();
  const totalItems = cart.items.reduce((sum, item) => sum + item.quantity, 0);
  const { wishlist } = useWishlist();
  const totalWishlistItems = wishlist.length;
  return (
    <header className="w-full bg-violet lg:pl-56 lg:pr-56 overflow-x-hidden">
      <div className=" grid 
          grid-cols-1 gap-4
          lg:grid-cols-2 lg:gap-8">
        {/* First div with two items inline */}
       <div className="flex">
        {/* Second List or content (can be anything else) */}
        <ul className="text-white flex gap-7">
          <li className="flex items-center">
            <span className="mr-2"><Image src={EMAIL} alt="email" width={25} height={25}/></span>
            mhhasanul@gmail.com
          </li>
          <li className="py-2 flex items-center">
            <span className="mr-2"><Image src={PHONE} alt="phone" width={25} height={25}/> </span>
            (12345)67890
          </li>
        </ul>
      </div>
      <div className="flex">
        {/* Second List or content (can be anything else) */}
        <div className="text-white flex gap-7">
          <select className=" bg-violet items-center">
              <option className="border-1">English</option>
          </select>
          <select className=" bg-violet items-center">
              <option className="border-1">USD</option>
          </select>
          <ul className="flex text-white">
          <li className="py-2 flex items-center">
            <span className="mr-2"><Image src={Profile} alt="phone" width={25} height={25}/> </span>
            Login
          </li>
          <Link href='/wishlist'><li className="py-2 flex items-center">
          <div className="relative w-10 h-10 flex items-center justify-center">
          {/* Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000" width="24" height="24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
          {/* Notification Badge */}
          <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
            ({totalWishlistItems})
          </span>
          </div>
          </li>
          </Link>
          <Link href='/cart'><li><div className="relative w-10 h-10 flex items-center justify-center">
          {/* Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000" width="24" height="24">
          <path d="M7 18c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm10 0c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zM7.938 6l-.938-4H2V2h4.307l1.689 7.455L5.509 12H19v-2H7.938zM6.062 14H19v2H6.062l-.969-4H2v-2h3.061L6.062 14z"/>
        </svg>

          {/* Notification Badge */}
          <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
            ({totalItems})
          </span>
        </div></li></Link>
          </ul>
        </div>
      </div>
      </div>
    </header>
  );
}
export default Navbar