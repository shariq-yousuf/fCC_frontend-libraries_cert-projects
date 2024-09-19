import { useContext } from "react"
import { ButtonType } from "../App"
import DisplayContext from "../context/DisplayContext"

const Button = ({ button: { value, type } }: { button: ButtonType }) => {
  const context = useContext(DisplayContext)

  const createNewValue = (val: string, len: number): string => {
    const newVal = val.split("")
    newVal[newVal.length - len] = value.trim()
    return newVal.join("")
  }

  const createNewDisplayValue = () => {
    if (value === "=") {
      context!.doMath()
    } else if (value === "AC") {
      context!.setDisplayValue("0")
    } else {
      context!.setDisplayValue((prev) => {
        if (prev === "0") {
          // preventing operator in the beginning except for minus
          return context!.isOperator(value.trim()) && value.trim() !== "-"
            ? "0"
            : value
        }
        // preventing double 0's after operator
        else if (prev.endsWith(" 0")) {
          return createNewValue(prev, 1)
        }
        // if (value === + | - | x | /); preventing double operators
        else if (context!.isOperator(value.trim())) {
          if (prev.trim() === "-" && value.trim() !== "-") {
            return "0"
          }
          // if already operator exist replace it otherwise add it
          else if (context!.isOperator(prev[prev.length - 2])) {
            return createNewValue(prev, 2)
          } else {
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

  return (
    <div
      id={type}
      className={`bg-slate-200 text-black min-h-16 flex justify-center items-center text-4xl cursor-pointer`}
      style={{ gridArea: type }}
      onClick={createNewDisplayValue}
    >
      {value}
    </div>
  )
}

export default Button
