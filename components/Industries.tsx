import React from 'react'
import VisaIcon from '../public/imgs/sponsor/visa-black.svg';
import TymeIcon from '../public/imgs/sponsor/tyme-bank-black.svg';
import DistellIcon from '../public/imgs/sponsor/distell-black 1.svg';
import  SpotifyIcon from '../public/imgs/sponsor/spotify-black 1.svg';
import MicrosoftIcon from '../public/imgs/sponsor/microsoft-black 1.svg';
import EngemIcon from '../public/imgs/sponsor/engen-black 1.svg';
import NikeIcon from '../public/imgs/sponsor/nike-black 1.svg';
import WesIcon from '../public/imgs/sponsor/wesgrow-black 1.svg';
import MultichoiceIcon from '../public/imgs/sponsor/multichoice-black 1.svg';
import PickIcon from '../public/imgs/sponsor/pnp-black 1.svg';
import LiquidIcon from '../public/imgs/sponsor/liquid.svg';
import TgIcon from '../public/imgs/sponsor/tfg-black 1.svg';
import SanlamIcon from '../public/imgs/sponsor/sanlam-black 1.svg';
import santamIcon from '../public/imgs/sponsor/santam-black 1.svg';
import BccIcon from '../public/imgs/sponsor/bbc-black 1.svg';
import Image from 'next/image';
import HorizontalLine from './HorizontalLine';
const Industries = () => {
  return (
    <div className="bgsponsor">
    <div className="flex container mx-auto ">
        <div />
        <div>
  
<HorizontalLine title="You’ll be in good company"/>

<h1 className="mt-10 text-4xl font-bold">Trusted by leading brands</h1>
<div className="grid grid-cols-5 gap-5 mt-10 ">
    <div className="col-span-1">
    {/* Content for the first column */}
     <div className="m-10">
    
     <Image src={VisaIcon} alt="Icon" className="w-15 h-15" />
     </div>
  </div>
  <div className="col-span-1">
    {/* Content for the first column */}
    <div className="m-10">
     <Image src={TymeIcon} alt="Icon" className="w-15 h-15" />
     </div>
  </div>
  <div className="col-span-1">
    {/* Content for the first column */}
    <div className="m-10">
     <Image src={DistellIcon} alt="Icon" className="w-15 h-15" />
     </div>
  </div>
  <div className="col-span-1">
    {/* Content for the first column */}
    <div className="m-10">
     <Image src={SpotifyIcon} alt="Icon" className="w-15 h-15" />
    </div>
  </div>
  <div className="col-span-1">
    {/* Content for the first column */}
    <div className="m-10">
     <Image src={MicrosoftIcon} alt="Icon" className="w-15 h-15" />
    </div>
  </div>

  </div>
  <div className="grid grid-cols-5 gap-5 mt-10 ">
    <div className="col-span-1">
    {/* Content for the first column */}
     <div className="m-10">
    
     <Image src={EngemIcon} alt="Icon" className="w-15 h-15" />
     </div>
  </div>
  <div className="col-span-1">
    {/* Content for the first column */}
    <div className="m-10">
     <Image src={NikeIcon} alt="Icon" className="w-15 h-15" />
     </div>
  </div>
  <div className="col-span-1">
    {/* Content for the first column */}
    <div className="m-10">
     <Image src={WesIcon} alt="Icon" className="w-15 h-15" />
     </div>
  </div>
  <div className="col-span-1">
    {/* Content for the first column */}
    <div className="m-10">
     <Image src={MultichoiceIcon} alt="Icon" className="w-15 h-15" />
    </div>
  </div>
  <div className="col-span-1">
    {/* Content for the first column */}
    <div className="m-10">
     <Image src={PickIcon} alt="Icon" className="w-15 h-15" />
    </div>
  </div>

  </div>

  <div className="grid grid-cols-5 gap-5 mt-10 ">
    <div className="col-span-1">
    {/* Content for the first column */}
     <div className="m-10">
    
     <Image src={LiquidIcon} alt="Icon" className="w-15 h-15" />
     </div>
  </div>
  <div className="col-span-1">
    {/* Content for the first column */}
    <div className="m-10">
     <Image src={TgIcon} alt="Icon" className="w-15 h-15" />
     </div>
  </div>
  <div className="col-span-1">
    {/* Content for the first column */}
    <div className="m-10">
     <Image src={SanlamIcon} alt="Icon" className="w-15 h-15" />
     </div>
  </div>
  <div className="col-span-1">
    {/* Content for the first column */}
    <div className="m-10">
     <Image src={santamIcon} alt="Icon" className="w-15 h-15" />
    </div>
  </div>
  <div className="col-span-1">
    {/* Content for the first column */}
    <div className="m-10">
     <Image src={BccIcon} alt="Icon" className="w-15 h-15" />
    </div>
  </div>

  </div>
        </div>
    </div>
    </div>
  )
}

export default Industries