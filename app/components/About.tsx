import React from "react";
import Image from "next/image";
import { Great_Vibes } from "next/font/google";

const great_vibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  style: ["normal"],
});

export default function About() {
  return (
    <div className="relative h-screen w-auto">
      <Image
        className="z-0"
        src="/images/hollywood_background_image.jpg"
        alt="hollywood image"
        fill
      />
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-50 drop-shadow-xl z-5"></div>

      <div className="absolute w-full h-auto bg-white bg-opacity-70 flex flex-col md:flex md:flex-row z-10 top-40  space-x-4">
        <Image
          className="rounded-full w-1/3 mask mask-circle "
          src="/images/IMG_4066.jpg"
          alt="about_image"
          width={400}
          height={600}
        />
        <div className="flex flex-col justify-center items-center bg-white  bg-opacity-10 px-6 py-4">
          <p
            className={` text-black text-4xl underline decoration-1 underline-offset-4 ${great_vibes.className} mx-3`}
          >
            About
          </p>
          <p className="indent-8 text-xs md:text-base text-black">
            Nadia is a Los Angeles based actor and voice talent. She is
            originally from Buenos Aires, Argentina and is of Argentinean and
            Haitian descent. Her family moved to Los Angeles when she was 4
            years old. She was drawn to the performing arts at a young age and
            studied ballet, violin and acting. She has worked in numerous
            on-camera commercial, print and voiceover projects. She is an alumni
            of the Penguin Random House Audio Narrator Mentorship program (2023)
            and was awarded an Earphones Award from Audiofile Magazine for &quot;The
            Dark Lord&apos;s Daughter&quot; by Patricia C. Wrede (SEP/2023). Nadia is also
            a registered nurse with several years experience in critical
            care—making her well versed in medical terminology.
          </p>
        </div>
      </div>
    </div>
  );
}

///Photo by Clément Proust: https://www.pexels.com/photo/hollywood-sign-in-los-angeles-14602907/
//Photo by Trace Hudson: https://www.pexels.com/photo/hollywood-sign-2626916/
///Photo by Roberto Nickson: https://www.pexels.com/photo/city-buildings-and-trees-during-golden-hour-2816168/
///Photo by Vision plug: https://www.pexels.com/photo/hollywood-boulevard-at-sunset-13739807/
