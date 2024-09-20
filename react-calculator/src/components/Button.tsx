import { useContext } from "react"
import { ButtonType } from "../App"
import DisplayContext from "../context/DisplayContext"

let isDoubleOperator = false

const Button = ({ button: { value, type } }: { button: ButtonType }) => {
  const context = useContext(DisplayContext)

  const createNewValue = (val: string): string => {
    const newVal = val.split(" ").filter(Boolean)
    newVal[newVal.length - 1] = value
    return newVal.join(" ")
  }

  const createNewDisplayValue = () => {
    if (value === "=") {
      context!.doMath()
    } else if (value === "AC") {
      context!.setDisplayValue("0")
    } else {
      if (context!.displayValue.length < 30) {
        context!.setDisplayValue((prev) => {
          if (prev === "0") {
            // preventing operator in the beginning except for minus
            return context!.isOperator(value.trim()) && value.trim() !== "-"
              ? "0"
              : value
          }
          // preventing double 0's after operator
          else if (prev.endsWith(" 0")) {
            return createNewValue(prev)
          }
          // preventing double operators
          else if (context!.isOperator(value.trim())) {
            const lastItem = prev.split(" ").filter(Boolean).slice(-1).join("")

            if (prev.trim() === "-" && value.trim() !== "-") {
              return "0"
            }
            // if already operator exist replace it otherwise add it
            else if (context!.isOperator(lastItem)) {
              // allowing negative number after other operator
              if (
                value.trim() === "-" &&
                lastItem !== "-" &&
                lastItem !== "+"
              ) {
                isDoubleOperator = true
                return prev + value
              } else if (!isDoubleOperator) {
                return createNewValue(prev)
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
    <div
      id={type}
      className={`bg-slate-200 text-black min-h-16 border-2 border-white hover:border-none active:scale-[0.98] flex justify-center items-center text-4xl cursor-pointer`}
      style={{ gridArea: type }}
      onClick={createNewDisplayValue}
    >
      {value}
    </div>
  )
}

export default Button
