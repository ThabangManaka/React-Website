import React from 'react'
import Image from 'next/image';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';

const Card = ({imageUrl , title, description}) => {
  return (
 
    <div className='flex  items-end justify-end bg-image-wrapper relative overflow-hidden group mt-10'>
     <Image
        src={imageUrl}
        alt={title}
        width={500} 
        height={100} 
        className="w-full  relative object-cover"
       
    objectFit='contain'
      />
    <div className=" justify-end items-end absolute text pl-4 mt-4">
         <div className="bg-primary-active h-1 w-16 mb-2"></div>
      <h2 className="text-xl font-semibold text-white-200">{title}</h2>
      <p className="mt-2 text-white">{description}</p>
    </div>
    </div>
 

  )
}

export default Card

