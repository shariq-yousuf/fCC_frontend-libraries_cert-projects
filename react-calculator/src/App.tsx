import { useState } from "react"
import ButtonsContainer from "./components/ButtonsContainer"
import Display from "./components/Display"
import DisplayContext from "./context/DisplayContext"

export interface ButtonType {
  id: number
  value: string
  type: string
}
function App() {
  const buttonsData: ButtonType[] = [
    {
      id: 1,
      value: "AC",
      type: "clear",
    },
    {
      id: 2,
      value: " / ",
      type: "divide",
    },
    {
      id: 3,
      value: " x ",
      type: "multiply",
    },
    {
      id: 4,
      value: "7",
      type: "seven",
    },
    {
      id: 5,
      value: "8",
      type: "eight",
    },
    {
      id: 6,
      value: "9",
      type: "nine",
    },
    {
      id: 7,
      value: " - ",
      type: "subtract",
    },
    {
      id: 8,
      value: "4",
      type: "four",
    },
    {
      id: 9,
      value: "5",
      type: "five",
    },
    {
      id: 10,
      value: "6",
      type: "six",
    },
    {
      id: 11,
      value: " + ",
      type: "add",
    },
    {
      id: 12,
      value: "1",
      type: "one",
    },
    {
      id: 13,
      value: "2",
      type: "two",
    },
    {
      id: 14,
      value: "3",
      type: "three",
    },
    {
      id: 15,
      value: "=",
      type: "equals",
    },
    {
      id: 16,
      value: "0",
      type: "zero",
    },
    {
      id: 17,
      value: ".",
      type: "decimal",
    },
  ]
  const [displayValue, setDisplayValue] = useState("0")

  const isOperator = (val: string) => {
    return /[\+\-\/x]/.test(val)
  }

  const solveExp = (expArr: (string | number)[], operator: string) => {
    return expArr
      .map((item, index) => {
        if (expArr[index + 1] === operator) {
          switch (operator) {
            case "/":
              return (item as number) / (expArr[index + 2] as number)
            case "x":
              return (item as number) * (expArr[index + 2] as number)
            default:
              return item
          }
        } else if (item === operator || expArr[index - 1] === operator) {
          return "removed"
        } else {
          return item
        }
      })
      .filter((item) => item !== "removed")
  }
  const doMath = () => {
    let expArr = displayValue
      .split(" ")
      .filter(Boolean)
      .map((item) => {
        if (isOperator(item)) {
          return item
        } else {
          return Number(item)
        }
      })

    // remove trailing operator
    while (isOperator(expArr[expArr.length - 1] as string)) {
      expArr.pop()
    }
    // fix negative numbers
    if (expArr.includes("-")) {
      expArr = expArr
        .map((item, index) => {
          if (item === "-") {
            return "removed"
          } else if (expArr[index - 1] === "-") {
            return 0 - (item as number)
          } else {
            return item
          }
        })
        .filter((item) => item !== "removed")
    }

    // solve expressions
    if (expArr.includes("/")) {
      expArr = solveExp(expArr, "/")
    }
    if (expArr.includes("x")) {
      expArr = solveExp(expArr, "x")
    }

    const result: number = expArr
      .filter((item) => item !== "+")
      .reduce((a, b) => (a as number) + (b as number), 0) as number

    setDisplayValue(
      result < 0 ? " - " + Math.abs(result).toString() : result.toString()
    )
  }

  return (
    <DisplayContext.Provider
      value={{
        setDisplayValue: setDisplayValue,
        doMath: doMath,
        isOperator: isOperator,
      }}
    >
      <main className="flex justify-center items-center h-dvh bg-slate-400 p-4">
        <div
          id="app-container"
          className="p-4 bg-orange-300 max-w-7xl w-[95%] md:w-5/12"
        >
          <Display displayValue={displayValue} />
          <ButtonsContainer buttonsData={buttonsData} />
        </div>
      </main>
    </DisplayContext.Provider>
  )
}

export default App
