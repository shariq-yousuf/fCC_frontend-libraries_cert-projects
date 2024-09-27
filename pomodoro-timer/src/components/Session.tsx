import { useState } from "react"
import { flushSync } from "react-dom"

const Session = () => {
  const [sessionLength, setSessionLength] = useState(25)

  const handleDecrement = () => {
    if (sessionLength > 1) {
      flushSync(() => {
        setSessionLength((prev) => prev - 1)
      })
    }
  }

  const handleIncrement = () => {
    if (sessionLength < 60) {
      flushSync(() => {
        setSessionLength((prev) => prev + 1)
      })
    }
  }

  return (
    <div id="session-container" className="font-bold text-xl">
      <h3 id="session-label" className="text-center">
        Session Length
      </h3>
      <div id="btns-container" className="flex justify-center gap-4">
        <button id="session-decrement" onClick={handleDecrement}>
          D
        </button>
        <p id="session-length">{sessionLength}</p>
        <button id="session-increment" onClick={handleIncrement}>
          I
        </button>
      </div>
    </div>
  )
}

export default Session
