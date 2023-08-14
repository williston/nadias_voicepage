
import React from "react";
import Image from "next/image";
import {
  EB_Garamond,
  Bodoni_Moda,
  Libre_Bodoni,
  Roboto,
} from "next/font/google";
import { useRouter } from "next/router";
import Link from "next/link";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import ReactAudioPlayer from "../components/ReactAudioPlayer";
import ReactAudio3 from "../components/ReactAudio3";
import ReactAudio31 from "../components/ReactAudio3.1";
//import AudioBookCarousel2 from "../components/AudioBookCarousel2";
//import AudioBookCarousel3 from "../components/AudioBookCarousel3";
import AudioBookCarousel4 from "../components/AudioBookCarousel4";
import About from "../components/About";
import ContactMe from "../components/Contact";
import Example from "../components/Contact2";

const eb_garamond = EB_Garamond({
  subsets: ["latin"],
  style: ["italic", "normal"],
});

/* async function getData(){
    const query = groq`*[_type=='audioFile']{
        ...,
    }`

    const data =  client.fetch(query)

    return data
    
} */


export default async function page() {


  console.log("page component");
  /* const data = getData() */
/* 
  const query = groq`*[_type=='audioFile']{
        ...,
        file{
            asset->
        }

    }`;

  const data = await client.fetch(query); */

  const query = groq`{'audioClips': *[_type == 'audioClip']{
    ...,
    file{
      asset->
    }
  }, 'audioBooks': *[_type == 'audioBook']{
    ...,
  }}`

  const data = await client.fetch(query)

  const audioClips = data.audioClips

  const audioBooks =  data.audioBooks






  return (
    <div>
    <div className="h-screen w-screen flex flex-col-reverse md:flex-row  bg-slate-100  mx-auto max-w-7xl">
      <div className="relative w-full md:w-1/2 flex flex-col justify-start items-center ">
        <Image
          className="object-cover"
          priority={true}
          src="/images/pexels-los-muertos-crew-7586689.jpg"
          alt="photo"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
        />
        <div className="absolute bottom-0 w-full h-full bg-slate-400 bg-opacity-60 text-white "></div>
        <div className="flex flex-col justify-center items-start mx-10 my-10 z-10 ">
          <p className="text-4xl tracking-wide  text-white font-semibold">
          `&#34;Bilingual Brilliance `&#34; English & Spanish <br></br>
            <span className="">Voiceover</span>
          </p>
          <div className="mt-4">
            <p className=" tracking-wide text-xl text-green-300 font-medium">
              American English
            </p>
            <p className="text-xl text-green-300 font-medium">
              Latin Americal Spanish (neutral)
            </p>
            <p></p>
          </div>
        </div>
        <div className="flex flex-col min-h-1/3 w-3/4 bg-slate-300/60 rounded-3xl text-white z-10 mb-5">
          {/*  <ReactAudioPlayer data={data} />  */}
          <ReactAudio31 data={audioClips} />
        </div>
      </div>
      <div className="relative w-full md:w-1/2 flex flex-row md:flex-col  items-center bg-indigo-400 mix-blend-multiply">
        <Image
          className="rounded-3xl m-8 drop-shadow-2xl mix-blend-hard-light md:hover:scale-105  transition-transform duration-200 ease-out cursor-pointer md:w-auto md:h-auto"
          src="/images/IMG_8334.jpg"
          alt="photo"
          width={200}
          height={300}
          /* sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" */
          /*  layout='responsive' */
          priority={true}
        />

        <div
          className={`flex flex-col items-center text-3xl ${eb_garamond.className} mx-10 my-5`}
        >
          <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ratione blanditiis omnis molestias rerum sit illum reiciendis quibusdam iste! Voluptate!</p>
          <p  className="font-medium text-xl drop-shadow-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            quisquam eligendi saepe, illo facere quo dolor sunt alias doloremque
            odit.
          </p>
        
        </div>
        
      </div>
    <div id="audioBookSection" className="absolute bottom-0 left-0 right-0 h-20"></div>
    </div>
      <div  className=" bg-fuchsia-700/70"></div>
      <div className="">
          <AudioBookCarousel4 data={audioBooks} />
      </div>
      <div id="aboutSection" className="">
          <About/>
      </div>
      {/* <div>
        <ContactMe/>
      </div> */}
       <div id="contactSection">
        <Example/>
      </div> 

    </div>
   
   
  );
}
