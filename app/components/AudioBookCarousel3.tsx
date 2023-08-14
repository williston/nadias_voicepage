//"use client";
/* import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";

type Props = {
  data: AudioBook[];
}; */

/* export default function AudioBookCarousel3({ data }: Props) {
 

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
          <Carousel>
            {data.map((audioBook) => (
              <div key={audioBook._id} className="relative">
                <Image
                  src={urlForImage(audioBook.image).url()}
                  alt="alt image"
                  height={300}
                  width={200}
                />
                <p>hello</p>
              </div>
            ))}
          </Carousel>
          
          ;<p>text here</p>
        </div>
      </div>
    </div>
  );
} */
