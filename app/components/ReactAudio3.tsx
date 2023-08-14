'use client'
import React from 'react'
import Link from 'next/link';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { PlayIcon, PauseIcon, SpeakerWaveIcon, SpeakerXMarkIcon, ArrowDownTrayIcon } from '@heroicons/react/20/solid';

type Props = {
    data: AudioFile[]
}

export default function ReactAudio3({ data }:Props) {
  return (
    <div className='flex flex-col justify-center z-10 px-5 py-5'>
        {data.map((audiofile) => (

            <div key={audiofile._id} className='my-1 hover:scale-105 transition-transform duration-200 ease-out cursor-pointer'>

            <Link className=''
                href={`${audiofile.file.asset.url}?dl=`}
                >
                <div className='flex space-x-2 items-center'>
                    <p className=''>{audiofile.title}</p>
                    <ArrowDownTrayIcon className=' h-5 w-5 text-black hover:scale-125 hover:text-green-600'/>
                </div>      
            </Link>
            <AudioPlayer
            //header="now playing"
            style={{ borderRadius: '2rem',
                    //display: 'flex',
                    //marginTop: '1rem',
                    //paddingBottom: '3rem',
                    //paddingTop:'2rem',
                    //marginBottom: '1rem',
                    height:'3rem',
                    width:'100%',
                    backgroundColor: 'rgb(236 253 245)' }}
            /* autoPlay */
            src={audiofile.file.asset.url}
            onPlay={e => console.log("onPlay")} 
            hasDefaultKeyBindings={true}
            customAdditionalControls={[]}
            showJumpControls={false}
            customIcons={{
                play:  <PlayIcon className='mb-1 h-6 w-6 text-black hover:text-green-600' />,
                pause: <PauseIcon className='mb-1 h-6 w-6 text-black'/>,
                volume: <SpeakerWaveIcon className=' mb-1 h-6 w-6 text-black'/>, 
                volumeMute: <SpeakerXMarkIcon className=' mb-1 h-6 w-6 text-black' />
              }} 
            layout="horizontal-reverse" //"stacked-reverse" or "horizontal-reverse"
            /* customControlsSection={
                [
                  <div>custom control section</div>,
                  RHAP_UI.ADDITIONAL_CONTROLS,
                  RHAP_UI.MAIN_CONTROLS,
                  RHAP_UI.VOLUME_CONTROLS,
                ]
              } */ 
    // other props here
            
            
        >
            
        </AudioPlayer>
            
        </div>
        

        ))}
        

    
    </div>
  )
}
