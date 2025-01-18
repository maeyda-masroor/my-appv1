import Image from "next/image";
import image from '../../public/website/image 32.png';
import image2 from '../../public/website/sofa promotional header.png';
export default function HeroSection() {
    return (
      <section
        className="
          hidden 
          lg:grid 
          grid-cols-2 
          bg-lightpurple
          pr-46 pl-46
          h-[764px]
          overflow-x-hidden
        "
      >
        {/* Column 1 */}
        <div className="rounded-lg text-center flex w-[1000px]">
          <Image src={image} alt="hero" width={300} height={50}/>
      
        {/* Column 2 */}
        <div className=" text-white text-left left-7 top-16 z-[1]">
          <div className="h-[100px]">
          </div>
          <h2 className="text-xl font-bold text-black">Best Furniture For Your Castle....</h2>
          <h1 className="text-6xl text-black">New Furniture Collection<br/>Trend in 2020</h1>
          <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br/> Magna in est adipiscing
          in phasellus non in justo.</p>
          <button className="bg-pink text-white w-[163px] h-[50px]">SHOP NOW</button>
          </div>
          </div>
        {/* Column 3 */}
        <div className=" text-white p-6 rounded-lg text-center">
          <Image src={image2} alt="promotional sofa" width={900} height={900}/>
        </div>
      </section>
    );
  }
  