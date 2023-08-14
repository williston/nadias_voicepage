import styled from "styled-components";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import {
  PlayIcon,
  PauseIcon,
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/20/solid";
import { AudioClip, AudioDemo } from "@/typings";
import { URL, Url } from "url";

type Props = {
  item: string;
};

const StyledAudioPlayer = styled(AudioPlayer)`
  .rhap_progress-section {
    margin: 5px;
  }
  .rhap_progress-indicator {
    background: rgb(3 105 161); /* Change to the color you want */
  }
`;

export default function AudioPlayerComponent({ item }: Props) {
  return (
    <StyledAudioPlayer
      //header="now playing"
      style={{
        borderRadius: "1rem",
        //padding:'2rem',
        padding: ".5px 15px",
        width: "85%",
        backgroundColor: "rgb(241 245 249)",
      }}
      /* autoPlay */
      src={item}
      onPlay={(e) => console.log("onPlay")}
      hasDefaultKeyBindings={true}
      customAdditionalControls={[]}
      showJumpControls={false}
      customIcons={{
        play: <PlayIcon className="h-6 w-6 text-black hover:text-green-600" />,
        pause: <PauseIcon className="h-6 w-6 text-black" />,
        volume: <SpeakerWaveIcon className="h-6 w-6 text-black" />,
        volumeMute: <SpeakerXMarkIcon className="h-6 w-6 text-black" />,
      }}
      layout="horizontal-reverse"
    ></StyledAudioPlayer>
  );
}
