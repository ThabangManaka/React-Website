import React from 'react'
import HorizontalLine from './HorizontalLine'

const Footer = () => {
  return (
    <div className="bg">
    <div className="flex container mx-auto ">
               {/*  Overlay */}
         <div />
         <div> 

    <HorizontalLine title="Contact US"/>
  <div className="grid grid-cols-2 gap-4 justify-center">
  <div className="col-span-1  ">
    <h1 className="mt-10 text-4xl font-bold">Have a project in mind? Lets make it happen</h1></div>
  <div className="col-span-1 pl-10">
  <ul className="list-disc list-none mt-10  ml-10 pl-10">
  <li>22 Street Name, Suburb, 8000, Cape Town,</li>
  <li> Cape Town, South Africa</li>
  <li>+27 21 431 0001</li>
  <li>enquirie@website.co.za</li>
</ul>
  </div>
</div>

  <div className="grid lg:grid-cols-5 md:grid-cols-5 sm::grid-cols-2 mt-10 ">
    <div className="col-span-1">
    {/* Content for the first column */}
     <div className="">
     <ul className="list-disc list-none">
  <li>Terms of service</li>
  <li>Privacy policy</li>
  <li>Impressum</li>
</ul>
     
     </div>
     </div>
     <div className="col-span-1">
    {/* Content for the first column */}
     <div className="">
     <ul className="list-disc list-none">
  <li>Facebook</li>
  <li>Instagram</li>
  <li>Twitter</li>
</ul>
     
     </div>
     </div>
     <div className="col-span-1">
    {/* Content for the first column */}
     <div className="">
     <ul className="list-disc  list-none">
  <li>Github</li>
  <li>linkedin</li>
  <li>Teams</li>
</ul>
     
     </div>
     </div>
     <div className="col-span-1">
    {/* Content for the first column */}
     <div className="">
     <ul className="list-disc  list-none">
  <li>Youtube</li>
  <li>Behance</li>
  <li>Dribbble</li>
</ul>
     
     </div>
     </div>
     <div className="col-span-1">
    {/* Content for the first column */}
     <div className="">
     <ul className="list-disc  list-none">
  <li>Explore open jobs</li>
  <li>      </li>
  <li>Explore open jobs ©2000—2023 Company Name</li>
</ul>
     
     </div>
     </div>
    </div>
    <div className="mt-10"></div>
    </div>
    <div className="mt-10"></div>
    </div>
   
    </div>
  )
}

export default Footer