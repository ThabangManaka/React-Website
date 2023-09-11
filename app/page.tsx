import Carousel from '@/components/Carousel'
import Casestudies from '@/components/Casestudies'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Industries from '@/components/Industries'
import Services from '@/components/Services'
import Image from 'next/image'
import  localFont from "next/font/local"

const myFont =  localFont({src: "../public/assets/Inter Web/Inter-Regular.woff2"})
export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main style={myFont.style}>
   
  <Navbar />

     <Hero />
 
     <Services/>
     <Casestudies />
     <Industries/>
     <Footer />
    </main>
  )
}
