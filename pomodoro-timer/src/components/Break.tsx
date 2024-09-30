import { Component, ReactNode } from "react"

class Break extends Component {
  state: { breakLength: number } = {
    breakLength: 5,
  }
  constructor(props: any) {
    super(props)
    this.state = {
      breakLength: 5,
    }
    this.handleDecrement = this.handleDecrement.bind(this)
    this.handleIncrement = this.handleIncrement.bind(this)
  }

  handleDecrement() {
    if (this.state.breakLength > 1) {
      this.setState((state: { breakLength: number }) => {
        return {
          breakLength: state.breakLength - 1,
        }
      })
    }
  }

  handleIncrement() {
    if (this.state.breakLength < 60) {
      this.setState((state: { breakLength: number }) => {
        return {
          breakLength: state.breakLength + 1,
        }
      })
    }
  }

  render(): ReactNode {
    return (
      <div id="break-container" className="font-bold text-xl">
        <h3 id="break-label" className="text-center">
          Break Length
        </h3>
        <div id="btns-container" className="flex justify-center">
          <button id="break-decrement" className="px-4" onClick={this.handleDecrement}>
            -
          </button>
          <p id="break-length">{this.state.breakLength}</p>
          <button id="break-increment" className="px-4" onClick={this.handleIncrement}>
            +
          </button>
        </div>
      </div>
    )
  }
}

export default Break

//  import { useState } from "react"
// import { flushSync } from "react-dom"

// const Break = () => {
//   const [breakLength, setBreakLength] = useState(5)

//   const handleDecrement = () => {
//     if (breakLength > 1) {
//       flushSync(() => {
//         setBreakLength((prev) => prev - 1)
//       })
//     }
//   }

//   const handleIncrement = () => {
//     if (breakLength < 60) {
//       flushSync(() => {
//         setBreakLength((prev) => prev + 1)
//       })
//     }
//   }

//   return (
//     <div id="break-container" className="font-bold text-xl">
//       <h3 id="break-label" className="text-center">
//         Break Length
//       </h3>
//       <div id="btns-container" className="flex justify-center gap-4">
//         <button id="break-decrement" onClick={handleDecrement}>
//           D
//         </button>
//         <p id="break-length">{breakLength}</p>
//         <button id="break-increment" onClick={handleIncrement}>
//           I
//         </button>
//       </div>
//     </div>
//   )
// }

// export default Break
