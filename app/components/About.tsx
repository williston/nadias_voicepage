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
          <p className="indent-8">
            Nadia was born in Buenos Aires, Argentina and grew up in Los
            Angeles, CA. She is of Haitian and Argentinean descent and is fluent
            in both English and Spanish. Nadia has been in the entertainment
            industry since she was 9 years old. Her first two auditions (and
            bookings!) being a Kodak commercial and an episode of E.R. Since
            then she has appeared in a number of commercial and print modeling
            projects and worked with brands such as Coca-Cola, Honda, Adidas,
            Verizon and many more. Along the way she earned a degree in nursing
            and has close to 10 years experience in the healthcare industry
            (making medical copy a breeze!). She has trained in voice over at
            Edge Studio (coached by Jennifer Sims) and is currently training for
            audiobook narration with Amanda Dolan. She was also selected for the
            Penguin Random House Audiobook Mentorship Program class of 2023.{" "}
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
