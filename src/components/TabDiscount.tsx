"use client"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Link from 'next/link';
import Image from 'next/image';
import Sofa from '../../public/website/tortuga-01-b 1.png';
export default function TabsComponent() {
  return (
    <Tabs className="place-items-center overflow-x-hidden">
      {/* Tab List */}
      <TabList className="flex space-x-2">
      <Tab className="px-4 py-2 text-gray-500 hover:text-pink cursor-pointer selected:bg-pink selected:text-black selected:text-pink">
          Wood Chairs
        </Tab>
        <Tab className="px-4 py-2 text-gray-500 hover:text-pink cursor-pointer selected:bg-pink selected:text-black selected:text-pink">
          Plastic Chairs
        </Tab>
        <Tab className="px-4 py-2 text-gray-500 hover:text-pink cursor-pointer selected:bg-pink selected:text-black selected:text-pink">
          Sofa Collection
        </Tab>
      </TabList>

      {/* Tab Panels */}
      <TabPanel className='p-4 overflow-x-hidden'>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4">
        <div className='mt-7'>
        <h3 className='text-3xl'>
        20% Discount on all Products</h3>
        <h6 className='text-2xl hover:text-pink text-black'>
            Earn Sofa Impact
        </h6>
        <p className='text-xl'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.
        </p>
        <div className='flex'>
            <div className='text-xl'>
                <p><span></span>Material expose like metals</p>
                <p><span></span>Simple neutral colours.</p>    
            </div>
            <div className ='text-xl'>
            <p><span></span>Clear lines and geomatric figures</p>
                <p><span></span>Simple neutral colours.</p>        
            </div>
        </div>
        <button className='w-[238px] h-[30px] bg-pink text-white'>
            <Link href="/shop">Shop Now</Link>
        </button>
        </div>
        <div className=''>
            <Image src={Sofa} alt='X'width={699} height={597}/>
        </div>
      </div>
      </TabPanel>
      <TabPanel className='p-4'>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4">
        <div className='mt-7'>
        <h3 className='text-3xl'>
        20% Discount on all Products</h3>
        <h6 className='text-2xl hover:text-pink text-black'>
            Earn Sofa Impact
        </h6>
        <p className='text-xl'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.
        </p>
        <div className='flex'>
            <div className='text-xl'>
                <p><span></span>Simple neutral colours.</p>
                <p><span></span>Simple neutral colours.</p>    
            </div>
            <div className ='text-xl'>
            <p><span></span>Material expose like metals</p>
                <p><span></span>Simple neutral colours.</p>        
            </div>
        </div>
        <button className='w-[238px] h-[30px] bg-pink text-white'>
            <Link href="/shop">Shop Now</Link>
        </button>
        </div>
        <div className=''>
            <Image src={Sofa} alt='X'width={699} height={597}/>
        </div>
      </div>
      </TabPanel>
      <TabPanel className='p-4'>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4">
        <div className='mt-7'>
        <h3 className='text-3xl'>
        20% Discount on all Products</h3>
        <h6 className='text-2xl hover:text-pink text-black'>
            Earn Sofa Impact
        </h6>
        <p className='text-xl'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.
        </p>
        <div className='flex'>
            <div className='text-xl'>
                <p><span></span>Material expose like metals</p>
                <p><span></span>Simple neutral colours.</p>    
            </div>
            <div className ='text-xl'>
            <p><span></span>Material expose like metals</p>
                <p><span></span>Simple neutral colours.</p>        
            </div>
        </div>
        <button className='w-[238px] h-[30px] bg-pink text-white'>
            <Link href="/shop">Shop Now</Link>
        </button>
        </div>
        <div className=''>
            <Image src={Sofa} alt='X'width={699} height={597}/>
        </div>
      </div>
      
       </TabPanel>
    </Tabs>
  );
}