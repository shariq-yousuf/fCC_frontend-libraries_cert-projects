import { useState } from "react"
import { flushSync } from "react-dom"

const Break = () => {
  const [breakLength, setBreakLength] = useState(5)

  const handleDecrement = () => {
    if (breakLength > 1) {
      flushSync(() => {
        setBreakLength((prev) => prev - 1)
      })
    }
  }

  const handleIncrement = () => {
    if (breakLength < 60) {
      flushSync(() => {
        setBreakLength((prev) => prev + 1)
      })
    }
  }

  return (
    <div id="break-container" className="font-bold text-xl">
      <h3 id="break-label" className="text-center">
        Break Length
      </h3>
      <div id="btns-container" className="flex justify-center gap-4">
        <button id="break-decrement" onClick={handleDecrement}>
          D
        </button>
        <p id="break-length">{breakLength}</p>
        <button id="break-increment" onClick={handleIncrement}>
          I
        </button>
      </div>
    </div>
  )
}

export default Break
