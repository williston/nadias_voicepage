'use client'
import React, { EventHandler, useState } from 'react'
import { EB_Garamond } from 'next/font/google'
import Link from 'next/link'
import { Bars4Icon } from '@heroicons/react/20/solid'

const eb_garamond = EB_Garamond({subsets: ['latin'], style: ['italic', 'normal']})
/* const bodoni_mode = Bodoni_Moda({subsets: ['latin']})
const libre_bodoni = Libre_Bodoni({subsets: ['latin']})
const roboto = Roboto({ subsets:['latin'], weight: '400'}) */




export default function Header() {



  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`sticky top-0 z-20 bg-slate-100 mb-5`}>
            <div className={`flex flex-col md:flex-row justify-between px-5 py-3 mt-2 ${eb_garamond.className}`}>
               <div id='help' className={`flex flex-row justify-between min-w-full items-start font-sans  ${eb_garamond.className}`}>
                  <div className='flex flex-col justify-end'>
                      <p>social media icons here </p> 
                      <div className='mt-2'>
                           <button onClick={(e) => setIsOpen(!isOpen)} className='hover:bg-slate-200 rounded-md p-1 md:hidden'>
                              <Bars4Icon className='h-6 w-6  text-black  border-gray-400 rounded-md '/>
                           </button>
                      </div>
                  </div>
                
                   <div className='flex flex-col items-center'>
                     <p className='font-bold uppercase text-xl md:text-4xl'>Nadia Verde</p>
                     <p className='uppercase md:text-sm text-blue-700'>English/<span className='text-fuchsia-700'>spanish</span></p>
                     <p className='uppercase md:text-sm'>voiceover</p>
                  </div>
                  <div>
                     <p>nadiaverde@gmail.com</p>
                     <p>phone number here</p>
                  </div>
               </div>
            
               
            </div>
            <div className={`flex flex-col bg-slate-300 ${isOpen ? 'block' : 'hidden'} md:flex md:flex-row justify-between md:bg-transparent px-5 py-3 ${eb_garamond.className} cursor-pointer`}>
                  <Link href='/'>
                    <p className='font-normal text-lg uppercase md:hover:scale-110 hover:underline underline-offset-4 transition-transform duration-200 ease-out hover:font-semibold'>home</p>
                 </Link>
                 <Link href='/audioDemos' className=''>
                    <p className='font-normal text-lg uppercase md:hover:scale-110 hover:underline underline-offset-4 transition-transform duration-200 ease-out  hover:font-semibold'>audio demos</p>
                 </Link>
                 <Link  href='/#audioBookSection'>
                    <p className='font-normal text-lg uppercase md:hover:scale-110 hover:underline underline-offset-4 transition-transform duration-200 ease-out  hover:font-semibold'>audio books</p>
                 </Link > 
                 {/* <Link  href=''>
                    <p className=' hidden font-normal text-lg uppercase md:hover:scale-110 hover:underline underline-offset-4 transition-transform duration-200 ease-out  hover:font-semibold'>clients</p>
                 </Link> */}
                 <Link  href='/#aboutSection'>
                    <p className='font-normal text-lg uppercase md:hover:scale-110 hover:underline underline-offset-4 transition-transform duration-200 ease-out  hover:font-semibold'>About</p>
                 </Link>
                 <Link href='/#contactSection'>
                    <p className='font-normal text-lg uppercase md:hover:scale-110 hover:underline underline-offset-4 transition-transform duration-200 ease-out  hover:font-semibold'>contact</p>
                 </Link> 
               
                   
                   
               
                    
                   
            </div>
            
            
            
    </div>
  )
}