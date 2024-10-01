import { useEffect } from "react"
import useGlobalContext from "../hooks/useGlobalContext"

const Audio = () => {
  const { isBreak, isTimerRunning, audioEl } = useGlobalContext()

  useEffect(() => {
    if (audioEl.current && isTimerRunning) {
      audioEl.current.play()
    }
  }, [isBreak])

  // useEffect(() => {
  //   if (!isTimerRunning) {
  //     audioEl.current!.pause()
  //     audioEl.current!.currentTime = 0
  //     // audioEl.current!.pause()
  //   }
  // }, [isTimerRunning])

  return <audio src="/audio/beep.mp3" id="beep" ref={audioEl}></audio>
}

export default Audio
