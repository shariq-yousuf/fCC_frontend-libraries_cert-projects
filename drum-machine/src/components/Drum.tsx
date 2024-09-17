import Pad from "./Pad"
import { AudioClip } from "../App"
import { useContext, useEffect, useRef } from "react"
import MsgContext from "../context/Context"

const Drum = ({ audioClips }: { audioClips: AudioClip[] }) => {
  const drumRef = useRef<HTMLDivElement>(null)
  const showMsg = useContext(MsgContext)

  useEffect(() => {
    const playAudio = (e: KeyboardEvent) => {
      console.log("click")
      for (const clip of audioClips) {
        if (clip.key.toLowerCase() === e.key.toLocaleLowerCase()) {
          if (drumRef.current) {
            const audioEl = drumRef.current.querySelector(`#${clip.key}`)
            ;(audioEl as HTMLAudioElement).play()
          }

          showMsg(clip.displayMsg)
        }
      }
    }

    window.addEventListener("keyup", playAudio)

    return () => {
      window.removeEventListener("keyup", playAudio)
    }
  }, [])

  return (
    <div
      className="w-full flex flex-wrap justify-center mt-6 gap-2"
      ref={drumRef}
    >
      {audioClips.map((clip) => (
        <Pad key={clip.id} clip={clip} />
      ))}
    </div>
  )
}

export default Drum
