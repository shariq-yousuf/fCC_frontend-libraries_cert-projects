import { flushSync } from "react-dom"
import useLengthsContext from "../hooks/useLengthsContext"

const Length = ({ length, title }: { length: number; title: string }) => {
  const { setLengths } = useLengthsContext()

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
          className="px-4"
          onClick={handleDecrement}
        >
          -
        </button>
        <p id={`${title}-length`}>{length}</p>
        <button
          id={`${title}-increment`}
          className="px-4"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
    </div>
  )
}

export default Length

// import { Component, ReactNode } from "react"

// class Break extends Component {
//   state: { breakLength: number } = {
//     breakLength: 5,
//   }
//   constructor(props: any) {
//     super(props)
//     this.state = {
//       breakLength: 5,
//     }
//     this.handleDecrement = this.handleDecrement.bind(this)
//     this.handleIncrement = this.handleIncrement.bind(this)
//   }

//   handleDecrement() {
//     if (this.state.breakLength > 1) {
//       this.setState((state: { breakLength: number }) => {
//         return {
//           breakLength: state.breakLength - 1,
//         }
//       })
//     }
//   }

//   handleIncrement() {
//     if (this.state.breakLength < 60) {
//       this.setState((state: { breakLength: number }) => {
//         return {
//           breakLength: state.breakLength + 1,
//         }
//       })
//     }
//   }

//   render(): ReactNode {
//     return (
//       <div id="break-container" className="font-bold text-xl">
//         <h3 id="break-label" className="text-center">
//           Break Length
//         </h3>
//         <div id="btns-container" className="flex justify-center">
//           <button id="break-decrement" className="px-4" onClick={this.handleDecrement}>
//             -
//           </button>
//           <p id="break-length">{this.state.breakLength}</p>
//           <button id="break-increment" className="px-4" onClick={this.handleIncrement}>
//             +
//           </button>
//         </div>
//       </div>
//     )
//   }
// }

// export default Break
