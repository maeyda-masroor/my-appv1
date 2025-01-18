import Image from "next/image";
import News1 from '../../public/website/Group 153.png';
import Link from "next/link";
export default function TwoColumnGrid() {
    return (
      <div className="hidden lg:grid grid-cols-2 gap-4 lg:pl-56 pr-56 mt-5 bg-lightpurple overflow-x-hidden p-4">
        {/* Column 1 */}
        <div className="p-4 text-black rounded-md ">
            <Image src={News1} alt="c" width={558} height={550}/>
        </div>
  
        {/* Column 2 */}
        <div className="p-8 text-black rounded-md mt-20">
          <h2 className="font-bold text-lg">Unique Features of latest &<br/>Trending Products</h2>
          <ul>
            <li>All frames constructed with hardwood solids and laminates</li>
            <li>Reinforced with double wood dowels, glue, screw - nails corner 
blocks and machine nails</li>
            <li>Arms, backs and seats are structurally reinforced</li>
          </ul>
          <div className="flex mt-5 gap-5">
            <button className="w-[157px] h-[45px] bg-pink"><Link href='/cart'>Add to Cart</Link></button>
            <div className=""><p className="text-sm text-black">B&B italian </p>
            <p className="text-black">$40</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  