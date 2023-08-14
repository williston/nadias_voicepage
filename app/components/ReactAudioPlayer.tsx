'use client'
import useSWR from 'swr'
import Link from 'next/link'
import React from 'react'
import ReactPlayer from 'react-player'
import { groq } from 'next-sanity'
import { client } from '@/sanity/lib/client'

type Props = {
    data: AudioFile[]
}


/* const getData =  async(query:any) => await client.fetch(query) */
  

export default function ReactAudioPlayer({ data }:Props) {
    /* const query = groq`*[_type=='audioFile']{
        ...,
    }`
    const { data, error } = useSWR(query, getData) */
    /* const query = groq`*[_type=='audioFile']{
        ...
    }`
    
    const data = await client.fetch(query)
    console.log(data) */

   console.log (data)
   console.log('audioComponent')
   console.log(data)

   /* if(error) return <div>Failed to load</div>
   if (!data) return <div>Loading...</div> */

  return (
    <div>
        {data.map((audioFile) => (
            
            <div key={audioFile._id}>
            <ReactPlayer className="react-player"
            light="true"
            width="100%" 
            height="10%" 
            controls={true}
            url={audioFile.soundcloud_link}
        /> 
        {/* <Link
            href=''
            download
            className='mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700'
        >
        Download Audio
        </Link>  */}
        </div>
        ))}
          

    </div>
  )
}


