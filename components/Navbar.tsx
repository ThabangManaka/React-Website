import React,{useState} from 'react'
import Image from 'next/image';
import Link from 'next/link';
import icon from '../public/imgs/logo.svg';
import {AiOutlineMenu, AiOutlineClose}  from 'react-icons/ai';


const Navbar = () => {

  
  return (
  <nav className="fixed w-full h-22 shadow-xl bgNav ">
    <div className="flex justify-between items-center p-2 container mx-auto text-white">

   
    {/* Left  background: #70259B;*/}

    <div>
      <Link href='/'>
      <Image src={icon} alt="Icon" className="w-15 h-15" />
      </Link>
    
    </div>
    {/* Middle  */}
    <ul className=" hidden list-none sm:flex">
  <li className="p-4"><Link href='/#services'>Services</Link></li> 
  <li className="p-4"><Link href='/industries'>Industries</Link></li> 
  <li className="p-4"><Link href='/cases'> Cases</Link></li> 
  <li className="p-4"><Link href='/contact'>Contact</Link></li> 
</ul>
    {/*Right  */}
    <button className='px-4 py-2 border rounded-full btnWhite font-bold '>Let’s Talk</button>
   
      {/*Mobile Button  */}
      <div className="block sm:hidden z-10">
        <AiOutlineMenu size={20}/>
      </div>
              {/*Mobile Menu */}
<div className="sm:hidden absolute top-0 left-0 bottom-0 flex justify-center items-center  w-full h-screen bgNav text-center ease-in
duration-300">
         <ul className=" ">
  <li className="p-4 text-4xl hover:text-gray-500"><Link href='/#services'>Services</Link></li> 
  <li className="p-4 text-4xl hover:text-gray-500"><Link href='/industries'>Industries</Link></li> 
  <li className="p-4 text-4xl hover:text-gray-500"><Link href='/cases'> Cases</Link></li> 
  <li className="p-4 text-4xl hover:text-gray-500"><Link href='/contact'>Contact</Link></li> 
  
</ul>


   
   </div>
  </div>
  </nav>
  )
}

export default Navbar