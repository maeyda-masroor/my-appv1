import Image from "next/image";
import EMAIL from '../../public/website/uil_envelope-alt 2.png';
import PHONE from '../../public/website/bx_bx-phone-call.png';
import CART from '../../public/website/fluent_cart-24-regular.png';
import HEART from '../../public/website/uil_heart-alt.png';
import Profile from '../../public/website/user.png';
import Link from "next/link";
export default function TopHeader() {
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
          <li className="py-2 flex items-center">
            <span className="mr-2"><Image src={HEART} alt="phone" width={25} height={25}/> </span>
            Wishlist
          </li>
          <Link href='/cart'><li><Image src={CART} alt="phone" width={25} height={25}/></li></Link>
          </ul>
        </div>
      </div>
      </div>
    </header>
  );
}