import React from 'react'
import icon from '../public/imgs/icon.svg';
import WebIcon from '../public/imgs/Web Dev Icon.svg';
import UxIcon from '../public/imgs/UX Icon.svg';
import MobileIcon from '../public/imgs/App Dev Icon.svg';
import Image from 'next/image';
import HorizontalLine from './HorizontalLine';
const Services= () => {
  return (
    
       <section id='services' className="bgsponsor">

    <div className="flex container mx-auto">
          {/*  Overlay */}
          <div />
          <div>
          {/* <div className="flex items-center mt-10">
  <div className="bg-primary-active h-1 w-16"></div>
  <div className="text-xl pl-4">
   What we do
  </div>
</div> */}

<HorizontalLine title="What we do"/>

    <h1 className="mt-10 text-4xl font-bold">We offer a complete range of bespoke design and development services to help you turn your ideas into digital masterpieces</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 ">
    <div className="col-span-1">
    {/* Content for the first column */}
     
     <Image src={WebIcon} alt="Icon" className="w-15 h-15" />
    <h3 className="text-xl font-bold mt-10">Web development</h3>
     <p  className="mt-10">We use cutting-edge web development technologies to help our clients fulfill their business goals through functional, reliable solutions.</p>
  </div>
  <div className="col-span-1">
    {/* Content for the first column */}
 
     <Image src={UxIcon} alt="Icon" className="w-15 h-15" />
    <h3 className="text-xl font-bold mt-10">Web development</h3>
     <p  className="mt-10">Our complete web design services will bring your ideas to life and provide you with a sleek, high-performing product that elevates your business.</p>
  </div>
  <div className="col-span-1">
    {/* Content for the first column */}
   
     <Image src={MobileIcon} alt="Icon" className="w-15 h-15" />
    <h3 className="text-xl font-bold mt-10">Web development</h3>
     <p  className="mt-10">Our extensive mobile development experience allows us to create custom native and cross-platform iOS and Android mobile solutions for our clients.</p>
  </div>
  <div className="col-span-1">
    {/* Content for the first column */}
     
     <Image src={icon} alt="Icon" className="w-15 h-15" />
    <h3 className="text-xl font-bold mt-10">Web development</h3>
     <p  className="mt-10">We conduct market research to determine the optimal blockchain-based solutions to help you grow your company and achieve your business goals.</p>
  </div>
  </div>
  <HorizontalLine title="Case studies"/>
 </div>

    </div>
    
    </section>
  )
}

export default Services