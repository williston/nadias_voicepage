"use client";
import React from "react";
import Link from "next/link";
import "react-h5-audio-player/lib/styles.css";
import AudioPlayerComponent from "./StyledAudioPlayer";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import { AudioClip } from "@/typings";
import { AudioDemo } from "@/typings";



type Props = {
  data: AudioClip[] | AudioDemo[];
};

export default function ReactAudio31({ data }: Props) {
  return (
    <div className="flex flex-col justify-center z-10 px-4 py-8 carousel carousel-vertical overscroll-contain">
      {data.map((item) => (
        <div
          key={item._id}
          className="my-1 flex flex-col hover:scale-105 transition-transform duration-200 ease-out cursor-pointer carousel-item h-1/3"
        >
          <Link className="" href={`${item.file.asset.url}?dl=`}>
            <div className="flex space-x-2 items-center">
              <p className="normal-case">{item.title}</p>
              <ArrowDownTrayIcon className=" h-5 w-5 text-black hover:scale-125 hover:text-green-600" />
            </div>
          </Link>

          <AudioPlayerComponent item={item.file.asset.url} />
        </div>
      ))}
    </div>
  );
}
