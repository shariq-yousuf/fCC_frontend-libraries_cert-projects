import { useEffect, useState } from "react"
import ButtonsContainer from "./components/ButtonsContainer"
import Display from "./components/Display"
import DisplayContext from "./context/DisplayContext"

export interface ButtonType {
  id: number
  value: string
  type: string
}

let isDoubleOperator = false
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

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "Backspace":
          setDisplayValue("0")
          break
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
        case ".":
          createNewDisplayValue(e.key)
          break
        case "/":
        case "-":
        case "+":
          createNewDisplayValue(" " + e.key + " ")
          break
        case "*":
          createNewDisplayValue(" x ")
          break
      }
    })
  }, [])

  useEffect(() => {
    const eventHandler = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === "=") {
        doMath()
      }
    }
    window.addEventListener("keydown", eventHandler)

    return () => {
      window.removeEventListener("keydown", eventHandler)
    }
  }, [displayValue])

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

  const createNewValue = (prev: string, value: string): string => {
    const newVal = prev.split(" ").filter(Boolean)
    newVal[newVal.length - 1] = value
    return newVal.join(" ")
  }

  const createNewDisplayValue = (value: string) => {
    if (value === "=") {
      doMath()
    } else if (value === "AC") {
      setDisplayValue("0")
    } else {
      if (displayValue.length < 20) {
        setDisplayValue((prev) => {
          if (prev === "0") {
            // preventing operator in the beginning except for minus
            return isOperator(value.trim()) && value.trim() !== "-"
              ? "0"
              : value
          }
          // preventing double 0's after operator
          else if (prev.endsWith(" 0")) {
            return createNewValue(prev, value)
          }
          // preventing double operators
          else if (isOperator(value.trim())) {
            const lastItem = prev.split(" ").filter(Boolean).slice(-1).join("")

            if (prev.trim() === "-" && value.trim() !== "-") {
              return "0"
            }
            // if already operator exist replace it otherwise add it
            else if (isOperator(lastItem)) {
              // allowing negative number after other operator
              if (
                value.trim() === "-" &&
                lastItem !== "-" &&
                lastItem !== "+"
              ) {
                isDoubleOperator = true
                return prev + value
              } else if (!isDoubleOperator) {
                return createNewValue(prev, value)
              } else {
                isDoubleOperator = false

                const newVal = prev.split(" ").filter(Boolean)
                newVal.pop()
                newVal[newVal.length - 1] = value

                return newVal.join(" ")
              }
            } else {
              isDoubleOperator = false
              return prev + value
            }
          } else if (value === ".") {
            // preventing double decimals between operators
            const lastItem = prev.split(" ").slice(-1).join("")
            if (lastItem.includes(".")) {
              return prev
            } else if (lastItem.length) {
              return prev + value
            } else {
              return prev + "0" + value
            }
          } else {
            return prev + value
          }
        })
      }
    }
  }

  return (
    <DisplayContext.Provider
      value={{
        displayValue: displayValue,
        setDisplayValue: setDisplayValue,
        doMath: doMath,
        isOperator: isOperator,
        createNewDisplayValue: createNewDisplayValue,
      }}
    >
      <main className="flex justify-center items-center h-dvh bg-slate-400 p-4">
        <div
          id="app-container"
          className="p-4 bg-stone-500 shadow-2xl font-myFont max-w-7xl w-[95%] md:w-5/12"
        >
          <Display displayValue={displayValue} />
          <ButtonsContainer buttonsData={buttonsData} />
        </div>
      </main>
    </DisplayContext.Provider>
  )
}

export default App
