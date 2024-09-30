import { useEffect, useState } from "react"
import useSessionContext from "../hooks/useLengthsContext"

const Timer = () => {
  const {
    lengths: { sessionLength },
    setLengths,
  } = useSessionContext()
  const [minutesLeft, setMinutesLeft] = useState(sessionLength)
  // const [secondsLeft, setSecondsLeft] = useState(60)
  let secondsLeft = 60
  const [isTimerRunning, setIsTimerRunning] = useState(false)

  useEffect(() => {
    setMinutesLeft(sessionLength)
  }, [sessionLength])

  useEffect(() => {
    if (isTimerRunning) {
      setInterval(() => {
        // setSecondsLeft(secondsLeft - 1)
        secondsLeft--
        console.log(secondsLeft)
      }, 1000)
    }
  }, [isTimerRunning])

  const handleTimer = () => {
    setIsTimerRunning((prev) => !prev)
  }

  return (
    <div
      id="timer-container"
      className="flex flex-col items-center gap-4 border-4 border-slate-950 md:w-1/2 p-4 my-4 mx-auto"
    >
      <div id="timer-label" className="text-3xl font-bold">
        Session
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
          className="px-4 py-2 me-4 bg-slate-600 text-white text-2xl"
          onClick={handleTimer}
        >
          Start
        </button>
        <button
          id="reset"
          className="px-4 py-2 bg-slate-600 text-white text-2xl"
          onClick={() => {
            setLengths({
              sessionLength: 25,
              breakLength: 5,
            })
          }}
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default Timer
