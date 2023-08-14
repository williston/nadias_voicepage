//"use client";
/* import { groq } from "next-sanity";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { client } from "@/sanity/lib/client";
import audioBook from "@/sanity/schemas/audioBook";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";

type Props = {
  data: AudioBook[];
}; */

/* // */
    /* superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    }, */
  //};

 /*  return (
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
          <div>
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
          </div>
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            //ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            //containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            //deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            //itemClass="carousel-item-padding-40-px"
          >
            {console.log("audioBookComponent")}
            {console.log(data)}
            {data.map((audioBook) => {
              console.log(urlForImage(audioBook.image).url());
              return (
                <div key={audioBook._id} className="relative">
                  <Image
                    //className="object-cover"
                    src={urlForImage(audioBook.image).url()}
                    alt="alt image"
                    height={300}
                    width={200}
                  />
                  <p>hello</p>
                </div>
              );
            })}
          </Carousel>
          ;<p>text here</p>
        </div>
      </div>
    </div>
  );
} */
