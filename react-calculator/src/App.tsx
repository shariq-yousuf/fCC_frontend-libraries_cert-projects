import ButtonsContainer from "./components/ButtonsContainer"
import Display from "./components/Display"

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
      value: "/",
      type: "divide",
    },
    {
      id: 3,
      value: "x",
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
      value: "-",
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
      value: "+",
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

  return (
    <main className="flex justify-center items-center h-dvh bg-slate-400 p-4">
      <div
        id="app-container"
        className="p-4 bg-orange-300 max-w-7xl w-[95%] md:w-5/12"
      >
        <Display />
        <ButtonsContainer buttonsData={buttonsData} />
      </div>
    </main>
  )
}

export default App
