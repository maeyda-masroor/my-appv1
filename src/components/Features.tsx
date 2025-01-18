import Image from "next/image";
import s1 from '../../public/website/24-hours-support 1.png';
import s2 from '../../public/website/free-delivery 1.png';
import s3 from '../../public/website/cashback 1.png';
import s4 from '../../public/website/email-open-svgrepo-com.svg';
export default function Services(){
    return <section className="space-y-4 lg:pr-56 lg:pl-56 pt-20 overflow-x-hidden">
    <div className="text-center">
    <h1 className="text-3xl font-semibold">What SHOPEX Offers!</h1>
  </div>  
     <div className="grid grid-cols-1 lg:grid-cols-4 lg:pl-50 lg:pr-50 gap-3 mx-auto">
    <div className="p-4 w-[270px] h-[320px] place-items-center">
        <Image src={s1} alt="x" width={65} height={43}/>
        <h1 className="text-lg text-center">24/7 Support</h1>
        <p className="text-sm text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
    </div>
    <div className="p-4 w-[270px] h-[320px] place-items-center">
        <Image src={s2} alt="x" width={65} height={43}/>
        <h1 className="text-lg text-center">24/7 Support</h1>
        <p className="text-sm text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
    </div>
    
    <div className="p-4 w-[270px] h-[320px] place-items-center">
        <Image src={s3} alt="x" width={65} height={43}/>
        <h1 className="text-lg text-center">24/7 Support</h1>
        <p className="text-sm text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
    </div>
    
    <div className="p-4 w-[270px] h-[320px] place-items-center">
        <Image src={s4} alt="x" width={65} height={43}/>
        <h1 className="text-lg text-center">24/7 Support</h1>
        <p className="text-sm text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
    </div>
    </div>
  </section>
  
}