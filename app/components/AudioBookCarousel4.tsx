import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import { AudioBook } from "@/typings";

type Props = {
  data: AudioBook[];
};

export default function AudioBookCarousel4({ data }: Props) {
  return (
    <div className="bg-fuchsia-700/70 mix-blend-normal h-1/3 ">
      <div className="flex flex-row justify-center ">
        <p className="text-4xl font-medium text-white mt-5">
          Recent Audio Books
        </p>
      </div>

      <div
        id="carousel"
        className="flex flex-row justify-between items-center mx-5 h-4/5"
      >
        <div className=" w-full mx-auto px-4 py-16 flex justify-center items-center">
          <div className="flex carousel bg-slate-300/60 rounded-box space-x-3 px-5 shadow-2xl h-1/2 md:h-auto">
            {data.map((audioBook) => (
              <div key={audioBook._id}  className="carousel-item flex flex-col items-center my-2 space-y-2 h-1/2">
                <Link href={audioBook.audible_link}>
                  <Image
                  className="rounded-box"
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
