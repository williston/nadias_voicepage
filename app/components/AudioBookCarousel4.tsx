import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import { AudioBook } from "@/typings";

type Props = {
  data: AudioBook[];
};

export const revalidate = 86400

export default function AudioBookCarousel4({ data }: Props) {
  return (
    <div className="bg-fuchsia-700/70 mix-blend-normal h-96">
      <div className="flex flex-row justify-center mb-6  ">
        <p className="text-4xl font-medium text-white mt-5">
          Recent Audio Books
        </p>
      </div>

      <div className="flex justify-between items-center mx-5 my-4 pb-4 h-72">
        <div className="w-full mx-auto px-4 py-16 flex justify-center items-center">
          <div className="carousel bg-slate-300/60 rounded-box space-x-3 px-5 shadow-2xl h-72 ">
            {data.map((audioBook) => (
              <div key={audioBook._id}  className="carousel-item flex flex-col items-center mt-4 space-y-2 h-3/4">
                <Link href={audioBook.audible_link}>
                  <Image
                  className="rounded-box h-[200px]"
                    src={urlForImage(audioBook.image).url()}
                    alt="alt image"
                    height={400}
                    width={200}  
                
                  />
                </Link>
                  <p className="font-light text-xs text-black">{audioBook.author}</p>
                  <p className="font-thin text-xs text-black">Narrated by: <span className="font-normal">Nadia Verde</span> </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
   
  );
}
