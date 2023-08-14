import React from 'react'
import { EB_Garamond } from 'next/font/google'
import Link from 'next/link'

const eb_garamond = EB_Garamond({subsets: ['latin'], style: ['italic', 'normal']})
/* const bodoni_mode = Bodoni_Moda({subsets: ['latin']})
const libre_bodoni = Libre_Bodoni({subsets: ['latin']})
const roboto = Roboto({ subsets:['latin'], weight: '400'}) */


export default function Header() {
  return (
    <div className={`sticky top-0 z-10 bg-slate-100 mb-10`}>
            <div className={`flex flex-col md:flex-row justify-between px-5 py-3 mt-2 ${eb_garamond.className}`}>
            <p>social media icons here </p>
            <div className={`flex flex-col items-center text-4xl font-sans  ${eb_garamond.className}`}>
                <p className='font-bold uppercase'>Nadia Verde</p>
                <p className='uppercase text-sm text-blue-700'>English/<span className='text-fuchsia-700'>spanish</span></p>
                <p className='uppercase text-sm'>voiceover</p>
            </div>
            <div>
                <p>nadiaverde@gmail.com</p>
                <p>phone number here</p>
            </div>
            </div>
            <div className={`flex flex-col md:flex-row justify-between px-5 py-3 ${eb_garamond.className} cursor-pointer`}>
                  <Link href=''>
                    <p className='font-normal text-lg uppercase md:hover:scale-110 hover:underline underline-offset-4 transition-transform duration-200 ease-out  hover:font-semibold'>home</p>
                 </Link>
                 <Link href='' className=''>
                    <p className='font-normal text-lg uppercase md:hover:scale-110 hover:underline underline-offset-4 transition-transform duration-200 ease-out  hover:font-semibold'>audio demos</p>
                 </Link>
                 <Link  href=''>
                    <p className='font-normal text-lg uppercase md:hover:scale-110 hover:underline underline-offset-4 transition-transform duration-200 ease-out  hover:font-semibold'>video demos</p>
                 </Link > 
                 <Link  href=''>
                    <p className='font-normal text-lg uppercase md:hover:scale-110 hover:underline underline-offset-4 transition-transform duration-200 ease-out  hover:font-semibold'>clients</p>
                 </Link>
                 <Link  href=''>
                    <p className='font-normal text-lg uppercase md:hover:scale-110 hover:underline underline-offset-4 transition-transform duration-200 ease-out  hover:font-semibold'>services</p>
                 </Link>
                 <Link href=''>
                    <p className='font-normal text-lg uppercase md:hover:scale-110 hover:underline underline-offset-4 transition-transform duration-200 ease-out  hover:font-semibold'>contact</p>
                 </Link> 
               
                   
                   
                    
                    
                   
            </div>
    </div>
  )
}
 //change google font to helvetica for top header items

///Photo by Tima Miroshnichenko: https://www.pexels.com/photo/microphones-inside-the-recording-studio-4988132/

///Photo by Los  Muertos Crew: https://www.pexels.com/photo/close-up-photo-of-a-condenser-microphone-7586689/