import { Component, ReactNode } from "react"

class Session extends Component {
  state: { sessionLength: number } = {
    sessionLength: 25,
  }
  constructor(props: any) {
    super(props)
    this.state = {
      sessionLength: 25,
    }
    this.handleDecrement = this.handleDecrement.bind(this)
    this.handleIncrement = this.handleIncrement.bind(this)
  }

  handleDecrement() {
    if (this.state.sessionLength > 1) {
      this.setState((state: { sessionLength: number }) => {
        return {
          sessionLength: state.sessionLength - 1,
        }
      })
    }
  }

  handleIncrement() {
    if (this.state.sessionLength < 60) {
      this.setState((state: { sessionLength: number }) => {
        return {
          sessionLength: state.sessionLength + 1,
        }
      })
    }
  }

  render(): ReactNode {
    return (
      <div id="session-container" className="font-bold text-xl">
        <h3 id="session-label" className="text-center">
          Session Length
        </h3>
        <div id="btns-container" className="flex justify-center">
          <button
            id="session-decrement"
            className="px-4"
            onClick={this.handleDecrement}
          >
            -
          </button>
          <p id="session-length">{this.state.sessionLength}</p>
          <button
            id="session-increment"
            className="px-4"
            onClick={this.handleIncrement}
          >
            +
          </button>
        </div>
      </div>
    )
  }
}

export default Session

// import { useState } from "react"
// import { flushSync } from "react-dom"

// const Session = () => {
//   const [sessionLength, setSessionLength] = useState(25)

//   const handleDecrement = () => {
//     if (sessionLength > 1) {
//       flushSync(() => {
//         setSessionLength((prev) => prev - 1)
//       })
//     }
//   }

//   const handleIncrement = () => {
//     if (sessionLength < 60) {
//       flushSync(() => {
//         setSessionLength((prev) => prev + 1)
//       })
//     }
//   }

//   return (
//     <div id="session-container" className="font-bold text-xl">
//       <h3 id="session-label" className="text-center">
//         Session Length
//       </h3>
//       <div id="btns-container" className="flex justify-center gap-4">
//         <button id="session-decrement" onClick={handleDecrement}>
//           D
//         </button>
//         <p id="session-length">{sessionLength}</p>
//         <button id="session-increment" onClick={handleIncrement}>
//           I
//         </button>
//       </div>
//     </div>
//   )
// }

// export default Session
