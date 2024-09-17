import { useContext, useRef } from "react"
import MsgContext from "../context/Context"
import { AudioClip } from "../App"

const Pad = ({ clip }: { clip: AudioClip }) => {
  const { id, key, src, displayMsg } = clip
  const audioRef = useRef<HTMLAudioElement>(null)
  const showMsg = useContext(MsgContext)

  const playAudio = () => {
    if (!audioRef.current) return
    audioRef.current.play()

    showMsg(displayMsg)
  }

  return (
    <div
      onClick={playAudio}
      className="drum-pad w-[30%] h-20 flex justify-center items-center bg-indigo-300 cursor-pointer text-3xl"
      id={id.toString()}
    >
      <audio src={src} className="clip" id={key} ref={audioRef}></audio>
      {key}
    </div>
  )
}

export default Pad
