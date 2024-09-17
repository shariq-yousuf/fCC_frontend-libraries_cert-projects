import Pad from "./Pad"
import { AudioClip } from "../App"
import { useContext, useEffect, useRef } from "react"
import MsgContext from "../context/Context"

const Drum = ({ audioClips }: { audioClips: AudioClip[] }) => {
  const drumRef = useRef<HTMLDivElement>(null)
  const showMsg = useContext(MsgContext)

  useEffect(() => {
    const playAudio = (e: KeyboardEvent) => {
      for (const clip of audioClips) {
        if (clip.key.toLowerCase() === e.key.toLocaleLowerCase()) {
          if (drumRef.current) {
            const audioEl: HTMLAudioElement | null =
              drumRef.current.querySelector(`#${clip.key}`)
            if (audioEl) {
              audioEl.play()
            }
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
      className="w-full flex flex-wrap justify-center my-6 gap-4"
      ref={drumRef}
    >
      {audioClips.map((clip) => (
        <Pad key={clip.id} clip={clip} />
      ))}
    </div>
  )
}

export default Drum
