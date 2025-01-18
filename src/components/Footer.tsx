//Footer using 4grid when on lg ,xl , 2xl and 1 col when on sm,md
import Link from "next/link"
export default function Footer(){
    return <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-4 mt-20 bg-lightpurple lg:pr-10 lg:pl-10  overflow-x-hidden">
        <div className="h-auto p-10 text-black ">
            <h1 className="text-6xl">Hekto</h1>
            <div className="flex items-center space-x-2 border border-gray-300 p-2 rounded-lg w-[270px] h-[44px]">
            <input type="email" placeholder="Enter your email" className="flex-1 p-2 text-sm text-gray-700 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button className="p-2 text-black bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none">
                Sign Up
            </button>
            </div>
            <br/>
            <div>
                <h3>Contact Info</h3>
                <h3>17 Princess Road, London, <br/>Greater London NW1 8JR, UK</h3>
            </div>
        </div>
        <div className="h-auto p-10 text-black">
            <h3>
                Categories
            </h3>
            <br/>
            <ul>
                <li>laptop & Computers</li>
                <li>Cameras & Photography</li>
                <li>Smart Phones & Tablets</li>
                <li>Video Games & Consoles</li>
                <li>Waterproof Headphones</li>
            </ul>
        </div>
        <div className="h-auto p-10 text-black">
            <h3>
                Customer Care
            </h3>
            <br/>
            <ul>
            <Link href='/cart'><li>My Cart</li></Link>
                
                <Link href='/account'><li>My Account</li></Link>
                <li>Discount</li>
                <li>Returns</li>
                <Link href='/ordercomplete'><li>Order Completed</li></Link>
                <Link href='/payment'><li>Payment</li></Link>
                <li>Order tracking</li>
                <Link href='/faq'><li>FAQ's</li></Link>
            </ul>
        </div>
        <div className="h-auto p-10 text-black">
            <h3>
                Pages
            </h3>
            <br/>
            <ul>
                <li>My Account</li>
                <li>Discount</li>
                <li>Returns</li>
                <li>Order History</li>
                <li>Order tracking</li>
            </ul>
        </div>
    </div>
}