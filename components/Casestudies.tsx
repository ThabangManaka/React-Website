import React from 'react'
import Image from 'next/image';
import Card from './Card';
import HorizontalLine from './HorizontalLine';




const fecthCasestudies = async () => {
  const res = await fetch('https://zm6zxgq6hyhe3smi5krzsrk2fu0iidhh.lambda-url.us-east-1.on.aws/');
const data : Case[] = await res.json();

return data
}



export default async function Casestudies(){
 const  caseDatas  = await fecthCasestudies()

  return (
    <div className="bgsponsor">
    <div className="flex container mx-auto ">
      <div />

<div className=" ">

</div>
 

    <div className="grid lg:grid-cols-3  gap-10 ">
    {caseDatas.map(caseData => (
      <div key={caseData.id}>
        <Card imageUrl={caseData.imageUrl} title={caseData.title} description={caseData.description}/>
      </div>
    ))}
    </div>
    </div>
      
    </div>
  )
}

