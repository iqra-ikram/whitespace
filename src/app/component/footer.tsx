import React from 'react';
import Image from 'next/image';
import { TbWorld } from "react-icons/tb";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <>
    <div className='w-[1,920px] h-[461px] md:h-[400px]  sm:h-[1000px] blue flex md:justify-center justify-start items-center'>
      <div className='grid md:grid-cols-5 grid-cols-1 lg:gap-8 gap-4 inter pb-16 bg-[#043873] text-white px-6 lg:border-b-2 border-gray-500'>
        <div className='xl:w-[250px] w-[150px]'>
            <Image src={'/logo.webp'} alt='' height={70} width={230} className='xl:h-[40px] xl:w-[200px] h-[32px] w-[130px]'></Image>
            <p className='xl:text-[18px] text-[14px] font-light lg:leading-6 leading-4 mt-5'>whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
        </div>
        <div className='xl:w-[250px] w-[150px] inter mt-1'>
            <h1 className='xl:text-[25px] text-[20px] font-bold'>Product</h1>
            <ul className='xl:text-[18px] text-[14px] lg:space-y-3 space-y-1 font-light mt-5'>
                <li className='hover:text-amber-200 transition-colors'>Overview</li>
                <li className='hover:text-amber-200 transition-colors'>Pricing</li>
                <li className='hover:text-amber-200 transition-colors'>Customer stories</li>
            </ul>
        </div>
        <div className='xl:w-[250px] w-[150px] inter mt-1'>
            <h1 className='xl:text-[25px] text-[20px] font-bold'>Resources</h1>
            <ul className='xl:text-[18px] text-[14px] lg:space-y-3 space-y-1 font-light mt-5'>
                <li className='hover:text-amber-200 transition-colors'>Blogs</li>
                <li className='hover:text-amber-200 transition-colors'>Guides & Tutorials</li>
                <li className='hover:text-amber-200 transition-colors'>Help center</li>
            </ul>
        </div>
        <div className='xl:w-[250px] w-[150px] inter mt-1'>
            <h1 className='xl:text-[25px] text-[20px] font-bold'>Company</h1>
            <ul className='xl:text-[18px] text-[14px] lg:space-y-3 space-y-1 font-light mt-5'>
                <li className='hover:text-amber-200 transition-colors'>About us</li>
                <li className='hover:text-amber-200 transition-colors'>Careers</li>
                <li className='hover:text-amber-200 transition-colors'>Media Kit</li>
            </ul>
        </div>
        
      </div>
    </div>
    <div className='text-white lg:px-12 md:px-8 px-1 lg:justify-between w-full lg:flex lg:h-[40px] h-[100px] blue'>
     <ul className='lg:text-[18px] xl:gap-16 gap-2 md:gap-8 text-[10px] flex font-light lg:border-b-0 border-b-2 border-gray-500'>
   
          <li className='text-white hover:text-amber-200 transition-colors'>©2024 Whitespace LLC</li>
      </ul>
     
    </div>
</>
  )
}

export default Footer