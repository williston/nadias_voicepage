'use client'
import React from 'react'
import { groq } from 'next-sanity'
import { client } from '@/sanity/lib/client'
import { AudioDemo } from '@/typings'
import AudioPlayerComponent from '@/app/components/StyledAudioPlayer'
import Image from 'next/image'
import { EB_Garamond } from 'next/font/google'



const eb_garamond = EB_Garamond({
    subsets: ["latin"],
    style: ["italic", "normal"]
})

export const revalidate = 86400

export default async function page() {

    const query = groq`*[_type == 'audioDemo']{
        ...,
        file{
          asset->
        } 
    }`
    
    const data:AudioDemo[] = await client.fetch(query)

    console.log(data)

  return (
    <div className='relative bg-indigo-300 my-2 py-8 h-screen'>

        <Image 
        className='opacity-10'
        src="/images/audioDemoImage.jpg"
        alt='audioDemoImage'
        fill
        />

        <div className='absolute top-0 bottom-0 left-0 right-0'></div>

        <p className={`my-4 text-3xl text-center font-medium text-black font-sans underline underline-offset-4 ${eb_garamond.className}`}>
            Audio Demo Section
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 max-w-7xl h-3/4 md:h-auto carousel carousel-vertical rounded-box z-10 overscroll-contain'>
            {data.map((item) => (
                <div key={item._id}
                    className='bg-slate-300/60 flex flex-col carousel-item rounded-lg h-20 my-1 px-3 pb-3 md:hover:scale-105 transition-transform duration-200 ease-out cursor-pointer z-10'>
                    <p className={`text-lg truncate my-2 ${eb_garamond.className}`}>{item.title}</p>
                    <AudioPlayerComponent item={item.file.asset.url}/>

                </div>
            ))}
        </div>
    </div>
  )
}
