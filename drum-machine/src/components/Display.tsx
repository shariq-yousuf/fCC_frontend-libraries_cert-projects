const Display = ({ displayMsg }: { displayMsg: string }) => {
  return (
    <div
      id="display"
      className="w-full h-20 bg-red-300 flex justify-center items-center text-2xl"
    >
      {displayMsg}
    </div>
  )
}

export default Display
