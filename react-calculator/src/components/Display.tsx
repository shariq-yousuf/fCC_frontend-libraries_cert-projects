const Display = ({ displayValue }: { displayValue: string }) => {
  return (
    <div
      id="display-container"
      className="flex flex-col gap-4 text-right w-full h-1/4 bg-black text-white p-4 mb-4"
    >
      <div id="display" className="overflow-hidden text-3xl">
        {displayValue.replaceAll(" ", "")}
      </div>
    </div>
  )
}

export default Display
