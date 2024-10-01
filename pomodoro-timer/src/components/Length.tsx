import { flushSync } from "react-dom"
import useLengthsContext from "../hooks/useLengthsContext"
import useGlobalContext from "../hooks/useGlobalContext"

const Length = ({ length, title }: { length: number; title: string }) => {
  const { setLengths } = useLengthsContext()
  const { isTimerRunning } = useGlobalContext()

  const handleDecrement = () => {
    if (length > 1) {
      flushSync(() => {
        setLengths((prev) =>
          prev.map((len) =>
            len.title === title ? { ...len, value: len.value - 1 } : len
          )
        )
      })
    }
  }

  const handleIncrement = () => {
    if (length < 60) {
      flushSync(() => {
        setLengths((prev) =>
          prev.map((len) =>
            len.title === title ? { ...len, value: len.value + 1 } : len
          )
        )
      })
    }
  }

  return (
    <div id={`${title}-container`} className="font-bold text-xl">
      <h3 id={`${title}-label`} className="text-center">
        {title[0].toUpperCase() + title.slice(1)} Length
      </h3>
      <div id="btns-container" className="flex justify-center">
        <button
          id={`${title}-decrement`}
          className="px-4 disabled:opacity-50"
          onClick={handleDecrement}
          disabled={isTimerRunning}
        >
          <img src="/icons/arrow-downward.svg" alt="" />
        </button>
        <p id={`${title}-length`}>{length}</p>
        <button
          id={`${title}-increment`}
          className="px-4 disabled:opacity-50"
          onClick={handleIncrement}
          disabled={isTimerRunning}
        >
          <img src="/icons/arrow-upward.svg" alt="" />
        </button>
      </div>
    </div>
  )
}

export default Length
