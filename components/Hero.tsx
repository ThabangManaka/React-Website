import React from 'react'

const Hero = () => {
  return (
    // <div className="flex items-center justify-between   h-screen  bg-fixed bg-center bg-cover custom-img"></div>
    <div className="h-screen flex items-center  bg-fixed bg-center bg-cover custom-img">
          <div className="container mx-auto flex ">
        {/*  Overlay */}
        <div />
        <div className='pt-12 mt-10   items-center  text-white  '>
          <br></br>
            <h1 className="text-5xl font-bold mt-10">Live with Confidence</h1>
            <p className='py-4 text-xl'>José Mourinho brings confidence to pan-African Sanlam campaign</p>
    
            <button className='px-8 py-3 border rounded-full btnPurple font-bold '>View project</button>
        </div>
        </div>
    </div>

  )
}

export default Hero
{/* <div className='p-5 text-white z-[2] ml-[-10rem] nt-[-10rem] '>
<h1 className="text-5xl font-bold">Live with Confidence</h1>
<p className='py-4 text-xl'>José Mourinho brings confidence to pan-African Sanlam campaign</p>

<button className='px-4 py-2 border rounded-full btnPurple font-bold '>View project</button>
</div> */}