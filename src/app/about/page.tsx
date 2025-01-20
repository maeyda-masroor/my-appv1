import Link from "next/link"
import Image from "next/image";
import About from '../../../public/website/Group 73.png';
import Services from "../../components/Features";
import Profile from '../../../public/website/OhKElOkQ3RE.png';
import { profile } from "console";
export default function about(){
    return <div className="lg:pl-45 lg:pr-45"> 
    <div className="mx-auto w-full  bg-lightpurple">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4   p-10">
      <nav className="text-sm">
      <h1 className="text-6xl text-black">About</h1>
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2  mx-auto mt-10 lg:pl-45 lg:pr-45">
      <div className="p-10">
          <Image src={About} alt="x" width={400} height={400}/>
      </div>
      <div className="p-10">
        <h1 className="text-2xl">Know About Our Ecommerce<br/> Business history</h1>
        <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
        <button className="bg-pink w-[145px] h-[44px] text-black">Contact Us</button>
      </div>
    </div>
    <div>
      <Services/>
    </div>
    <div className="grid place-items-center lg:place-items-center xl:place-items-center 2xl:place-items-center sm:m-0 md:m-0 sm:p-0 md:p-0 bg-lightpurple p-10">
      <h1 className="text-7xl text-black p-10">What Our Client Says!</h1>
      <div className="flex gap-4 p-4">
        <Image src={Profile} alt="s" width={25} height={25} className="top-4"/>
        <Image src={Profile} alt="s" width={25} height={25} className="top-2"/>
        <Image src={Profile} alt="s" width={25} height={25}/>
      </div>
      <p className="text-3xl text-black">Selina Gomez</p>
      <p className="text-2xl text-black">Ceo At Webecy Digital</p>
      <p className="text-lg text-black text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.</p>
    </div>
    
    </div>

}