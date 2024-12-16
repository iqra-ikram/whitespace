import React from "react";
import Image from "next/image";
import { FaApple } from "react-icons/fa";
import { FaWindows } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";
import { BiSolidQuoteSingleLeft } from "react-icons/bi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Header from "./component/header";
import Footer from "./component/footer";

function page() {
  return (
    <>

    <Header/>
      <div className=" bg-[#043873] bg-cover bg-fixed h-[666px]">
        <div className="blue md:px-[80px] px-[20px] lg:py-[100px] py-[10px] lg:flex gap-4">
          <div className=" lg:w-[691px] w-full py-[50px] text-white text-center md:text-start">
            <div className="lg:text-[64px] md:text-[56px] sm:text-[44px] text-[36px] font-bold inter lg:leading-[78px] md:leading-[64px] sm:leading-[52px] leading-[42px]">
              Get More Done with whitepace
            </div>
            <div className="inter font-normal lg:text-[18px] md:text-[14px] text-[8px] lg:leading-[30px] md:leading-[20px] leading-[18px] mt-4 h-[30px] md:h-[60px]">
              Project management software that enables your teams to
              collaborate, plan, analyze and manage everyday tasks
            </div>
            <button className="inter font-medium lg:text-[18px] text-[12px] bg-[#4F9CF9] rounded-md lg:leading-6 leading-[18px] md:p-[15px] p-[10px] gap-[10px] mt-10 sm:mt-4 md:mt-2 lg:mt-10 hover:bg-transparent hover:border-2 transition-all duration-200">
              Try Whitepace free ➔
            </button>
          </div>
          <div className="lg:w-1/2 w-full flex justify-center items-center bg-[#C4DEFD] sm:bg-[] lg:h-96 h-64">
          </div>
        </div>
      </div>
      <div className="bg-white h-[520px] relative z-10 mt-8">
       
        <div className="md:px-[80px] px-[20px] lg:py-[100px] py-[10px] lg:flex gap-4">
          <div className=" lg:w-[691px] w-full py-[50px] text-black text-center md:text-start">
            <div className="relative">
             
              <h1 className="lg:text-[64px] md:text-[56px] sm:text-[44px] text-[36px] font-bold inter lg:leading-[78px] md:leading-[64px] sm:leading-[52px] leading-[42px] relative z-10">
                Project Management
              </h1>
            </div>
            <div className="inter font-normal lg:text-[18px] md:text-[14px] text-[12px] lg:leading-[30px] md:leading-[20px] leading-[18px] mt-4 h-[30px] md:h-[60px]">
              Images, videos, PDFs and audio files are supported. Create math
              expressions and diagrams directly from the app. Take photos with
              the mobile app and save them to a note.
            </div>
            <button className="inter font-medium lg:text-[18px] text-[12px] text-white bg-[#4F9CF9] rounded-md lg:leading-6 leading-[18px] md:p-[15px] p-[10px] gap-[10px] mt-12 sm:mt-4 md:mt-2 lg:mt-16 hover:translate-x-2 transition-all duration-200 relative z-10">
              Get Started ➔
            </button>
          </div>
          <div className="lg:w-1/2 w-full flex justify-center items-center bg-[#C4DEFD] sm:bg-[#C4DEFD] lg:h-96 h-64">
          </div>
        </div>
      </div>
      
    
      <div className="bg-white h-[542px] md:mt-24 mt-36">
  <div className="md:px-[0px] px-[20px] lg:py-[100px] py-[10px] lg:flex gap-4 items-center -mt-8">
    {/* Image Container */}
    <div className="lg:w-[524px] w-full lg:h-[500px] h-full flex justify-center items-center">
      <Image
        src={"/pic.webp"}
        alt="Work Together"
        height={500}  // Adjust height to match the intended size
        width={524}   // Adjust width to match the intended size
        className="object-contain lg:h-[500px] lg:w-[500px] md:h-[400px] md:w-[400px]"
      />
    </div>

    {/* Text Container */}
    <div className="lg:w-[691px] w-full py-[50px] text-black text-center md:text-start my-10">
      <div className="relative">
        <h1 className="lg:text-[64px] md:text-[56px] sm:text-[44px] text-[36px] font-bold inter lg:leading-[78px] md:leading-[64px] sm:leading-[52px] leading-[42px] relative z-10">
          Work together
        </h1>
      </div>
      <div className="inter font-normal lg:text-[18px] md:text-[14px] text-[12px] lg:leading-[30px] md:leading-[20px] leading-[18px] mt-4 h-[30px] md:h-[60px]">
        With Whitepace, share your notes with your colleagues and collaborate on them.
        You can also publish a note to the internet and share the URL with others.
      </div>
      <button className="inter font-medium lg:text-[18px] text-[12px] text-white bg-blue-400 rounded-md lg:leading-6 leading-[18px] md:p-[15px] p-[12px] gap-[10px] mt-12 sm:mt-4 md:mt-2 lg:mt-16 hover:translate-x-2 transition-all duration-200">
        Try it Now ➔
      </button>
    </div>
  </div>
</div>



<div className="bg-[#043873] w-full h-[574px] my-20 flex flex-col items-center justify-center">
  {/* Heading */}
  <h1 className="text-4xl text-white font-bold text-center mb-4">
    Your work, everywhere you are
  </h1>

  {/* Paragraph */}
  <p className="text-white text-center mx-4 mb-6 md:max-w-[950px]">
    Access your notes from your computer, phone, or tablet by synchronizing with various services,
    including Whitepace, Dropbox, and OneDrive. The app is available on Windows, macOS, Linux, Android, and iOS.
    A terminal app is also available!
  </p>

  {/* Button */}
  <button className="inter font-medium lg:text-[18px] text-[12px] text-white bg-blue-400 rounded-md lg:leading-6 leading-[18px] md:p-[15px] p-[12px] gap-[10px] mt-4 hover:translate-x-2 transition-all duration-200">
    Try Taskey
  </button>
</div>
<div className="bg-white w-full h-[538px] text-black text-center justify-center font-bold text-4xl">
  <h1 className="my-[40px]">Our Sponsors</h1>

  <div className="flex justify-center gap-[300px] items-center">
    <Image
      src={"/apple.webp"}
      alt="Apple"
      width={40}   // Adjust width
      height={80}  // Adjust height
      className="object-contain"
    />
    <Image
      src={"/micr.webp"}
      alt="Microsoft"
      width={150}   // Adjust width
      height={80}  // Adjust height
      className="object-contain"
    />
    <Image
      src={"/slack.webp"}
      alt="Other Sponsor"
      width={150}   // Adjust width
      height={80}  // Adjust height
      className="object-contain"
    />
    <Image
      src={"/goo.webp"}
      alt="Google"
      width={150}   // Adjust width
      height={80}  // Adjust height
      className="object-contain"
    />
  </div>
</div>

      
       </>
     )}

      export default page;