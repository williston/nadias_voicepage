//"use client";
import React from "react";
import { useEffect } from "react";
import "lightbox.js-react/dist/index.css";
import { SlideshowLightbox, initLightboxJS } from "lightbox.js-react";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import audioBook from "@/sanity/schemas/audioBook";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";


export default async function AudioBookCarousel() {

 
  const query = groq`*[_type == 'audioBook']{
      ...,
    }`;

  useEffect(() => {
    initLightboxJS("C5E4-67D2-6C5E-A122", "individual");
  });

  // get audiobook files from sanity
  const audioBooks = await client.fetch(query);
  console.log(audioBooks)
  const images = audioBooks.map((audiobook) =>(
    audiobook.image
  ))  

  return (
    <div className="bg-blue-800 h-[26rem] ">
      <div className="flex flex-row justify-center mb-6">
        <p className="text-4xl font-semibold text-white mt-5">
          Recent Audio Books
        </p>
      </div>
      
        <div
          id="carousel"
          className="flex flex-row justify-between items-center mx-5 h-4/5"
        >
          <div className="border-lime-300 border-2 w-full mx-auto px-4 py-16 flex justify-center items-center ">
             

               <SlideshowLightbox 
                className="flex flex-row justify-between space-x-3"
                lightboxIdentifier="lightbox1"
                //disableImageZoom={true}
                slideshowInterval={1000}
                framework="next"
                theme="lightbox"
                showThumbnails={true} 
                images={images}
              >
                {audioBooks.map((audioBook) => (
                  <div key={audioBook._id} className="relative">
                  <Image
                    key={audioBook.id}
                    src={urlForImage(audioBook.image).url()}
                    alt='alt image'
                    height={300}
                    width={200}
                    data-lightboxjs="lightbox1"
                    quality={80}
                  />
                  hello
                  </div>
                ))}
              </SlideshowLightbox>  

         
                 
        
            <p>text here</p>
          </div>
        </div>
    </div>
  );
}
