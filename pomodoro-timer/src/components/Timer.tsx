import { useEffect, useState } from "react"
import useSessionContext from "../hooks/useLengthsContext"
import { initialState } from "../context/LengthsContext"
import useGlobalContext from "../hooks/useGlobalContext"

const Timer = () => {
  const {
    lengths: [{ value: breakLength }, { value: sessionLength }],
    setLengths,
  } = useSessionContext()
  const [minutesLeft, setMinutesLeft] = useState(sessionLength)
  const [secondsLeft, setSecondsLeft] = useState(60)
  const { isTimerRunning, setIsTimerRunning, isBreak, setIsBreak, audioEl } =
    useGlobalContext()

  useEffect(() => {
    setMinutesLeft(sessionLength)
  }, [sessionLength])

  useEffect(() => {
    if (isTimerRunning) {
      if (secondsLeft === 59) {
        setMinutesLeft(minutesLeft - 1)
      } else if (secondsLeft === 0) {
        setSecondsLeft(60)
      }

      var interval = setTimeout(() => {
        setSecondsLeft(secondsLeft - 1)
      }, 1000)
    } else {
      clearTimeout(interval!)
    }

    if (minutesLeft === 0 && secondsLeft === 0 && !isBreak) {
      setMinutesLeft(breakLength)
      setIsBreak((prev) => !prev)
    } else if (minutesLeft === 0 && secondsLeft === 0) {
      setMinutesLeft(sessionLength)
      setIsBreak((prev) => !prev)
    }

    return () => {
      clearTimeout(interval)
    }
  }, [isTimerRunning, secondsLeft])

  const handleTimer = () => {
    setIsTimerRunning((prev) => !prev)
  }

  const handleReset = () => {
    setIsTimerRunning(false)
    audioEl.current?.pause()
    audioEl.current!.currentTime = 0
    setLengths(initialState)
    setMinutesLeft(sessionLength)
    setSecondsLeft(60)
    setIsBreak(false)
  }

  return (
    <div
      id="timer-container"
      className="flex flex-col items-center gap-4 rounded border-4 border-slate-950 md:w-1/2 p-4 my-4 mx-auto"
    >
      <div id="timer-label" className="text-3xl font-bold text-amber-400">
        {isBreak ? "Break" : "Session"}
      </div>
      <div id="time-left" className="text-5xl font-bold">
        {minutesLeft < 10 ? `0${minutesLeft}` : minutesLeft}:
        {secondsLeft < 10
          ? `0${secondsLeft}`
          : secondsLeft === 60
          ? "00"
          : secondsLeft}
      </div>
      <div id="buttons-container">
        <button
          id="start_stop"
          className="px-4 py-2 me-4 bg-amber-400 w-28 rounded text-2xl"
          onClick={handleTimer}
        >
          {isTimerRunning ? "Pause" : "Start"}
        </button>
        <button
          id="reset"
          className="px-4 py-2 bg-amber-400 w-28 rounded text-2xl"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default Timer
