// import { Component, ReactNode } from "react"

// class Session extends Component {
//   state: { sessionLength: number } = {
//     sessionLength: 25,
//   }
//   constructor(props: any) {
//     super(props)
//     this.state = {
//       sessionLength: 25,
//     }
//     this.handleDecrement = this.handleDecrement.bind(this)
//     this.handleIncrement = this.handleIncrement.bind(this)
//   }

//   handleDecrement() {
//     if (this.state.sessionLength > 1) {
//       this.setState((state: { sessionLength: number }) => {
//         return {
//           sessionLength: state.sessionLength - 1,
//         }
//       })
//     }
//   }

//   handleIncrement() {
//     if (this.state.sessionLength < 60) {
//       this.setState((state: { sessionLength: number }) => {
//         return {
//           sessionLength: state.sessionLength + 1,
//         }
//       })
//     }
//   }

//   render(): ReactNode {
//     return (
//       <div id="session-container" className="font-bold text-xl">
//         <h3 id="session-label" className="text-center">
//           Session Length
//         </h3>
//         <div id="btns-container" className="flex justify-center">
//           <button
//             id="session-decrement"
//             className="px-4"
//             onClick={this.handleDecrement}
//           >
//             -
//           </button>
//           <p id="session-length">{this.state.sessionLength}</p>
//           <button
//             id="session-increment"
//             className="px-4"
//             onClick={this.handleIncrement}
//           >
//             +
//           </button>
//         </div>
//       </div>
//     )
//   }
// }

// export default Session

import { flushSync } from "react-dom"
import useLengthsContext from "../hooks/useLengthsContext"

const Session = () => {
  const {
    lengths: { sessionLength },
    setLengths,
  } = useLengthsContext()

  const handleDecrement = () => {
    if (sessionLength > 1) {
      flushSync(() => {
        setLengths((prev) => ({
          ...prev,
          sessionLength: prev.sessionLength - 1,
        }))
      })
    }
  }

  const handleIncrement = () => {
    if (sessionLength < 60) {
      flushSync(() => {
        setLengths((prev) => ({
          ...prev,
          sessionLength: prev.sessionLength + 1,
        }))
      })
    }
  }

  return (
    <div id="session-container" className="font-bold text-xl">
      <h3 id="session-label" className="text-center">
        Session Length
      </h3>
      <div id="btns-container" className="flex justify-center">
        <button
          id="session-decrement"
          className="px-4"
          onClick={handleDecrement}
        >
          -
        </button>
        <p id="session-length">{sessionLength}</p>
        <button
          id="session-increment"
          className="px-4"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
    </div>
  )
}

export default Session
