import React from 'react'

const HorizontalLine = ({title}) => {
  return (
    <div>
   
               {/*  Overlay */}
         <div />
         <div className='mt-10 mb-10'> 
<div className="flex items-center ">
   <div className="bg-primary-active h-1 w-16"></div>
   <div className="text-xl pl-4">
  {title}
  </div>
  </div>

    </div>

  
    </div>
  )
}

export default HorizontalLine