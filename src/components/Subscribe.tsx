import Image from "next/image";
import subscribe1 from '../../public/website/1.png';
export default function Subscribe(){
    return(
        <div className="hidden lg:block w-full h-[462px] mt-20 ">
            <Image src={subscribe1} alt="x"/>
        </div>
      );
  
}