import React from 'react'
import { PlayPauseIcon, SpeakerWaveIcon } from '@heroicons/react/20/solid'

export function PlayButton() {
  return (
    <div>
        <PlayPauseIcon className='h-4 w-4' />
    </div>
  )
}

export function SoundButton (){
    return (
        <div>
            <SpeakerWaveIcon className='h-4 w-4' />
        </div>
    )
}
