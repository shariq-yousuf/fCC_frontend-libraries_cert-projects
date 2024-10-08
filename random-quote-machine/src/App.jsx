import React, { useEffect, useRef, useState } from "react"
import QuoteBox from "./components/QuoteBox"
import tailwindColors from "tailwindcss/colors"

function App() {
  const [hadith, setHadith] = useState("")
  const [bgColor, setBgColor] = useState(tailwindColors["pink"][500])
  const textEl = useRef()
  const quoteBox = useRef()
  const loader = useRef()
  const [isFetchFailed, setIsFetchFailed] = useState(false)
  const [isFetched, setIsFetched] = useState(true)

  useEffect(() => {
    getHadithFromAPI()
  }, [])

  const getHadithFromAPI = async () => {
    const randomNumber = getRandomNumber("ceil", 4000)
    const URL = `https://www.hadithapi.com/public/api/hadiths?apiKey=$2y$10$Oq25553u9h455mMqwpWfZeaIDxbwrs4TelrZHfurQpp8VVJBVep6&paginate=1&page=${randomNumber}`

    try {
      setIsFetched(false)
      // if (textEl.current) textEl.current.style.opacity = "0"

      const response = await fetch(URL)
      const data = await response.json()
      setHadith(data.hadiths.data[0])

      // if (textEl.current) textEl.current.style.opacity = "1"
      setIsFetched(true)
    } catch (error) {
      setHadith("")
      setIsFetchFailed(true)
    }
  }

  const getBgColor = () => {
    const bgColorsName = [
      "red",
      "orange",
      "amber",
      "yellow",
      "lime",
      "green",
      "emerald",
      "teal",
      "cyan",
      "sky",
      "blue",
      "indigo",
      "violet",
      "purple",
      "fuchsia",
      "pink",
      "rose",
    ]

    const r = getRandomNumber("floor", bgColorsName.length)
    setBgColor(
      tailwindColors[bgColorsName[r]][(getRandomNumber("ceil", 4) + 4) * 100]
    )
  }

  function getRandomNumber(type, length) {
    return Math[type](Math.random() * length)
  }

  return (
    <div
      className={`flex justify-center items-start p-4 md:p-8 min-h-dvh transition-all	duration-1000`}
      style={{ backgroundColor: bgColor }}
    >
      {hadith ? (
        <QuoteBox
          hadith={hadith}
          getHadithFromAPI={getHadithFromAPI}
          bgColor={bgColor}
          getBgColor={getBgColor}
          textEl={textEl}
          quoteBox={quoteBox}
          loader={loader}
          isFetched={isFetched}
        />
      ) : (
        isFetchFailed && (
          <div className="bg-stone-500 p-4 text-white text-2xl">
            <span>Something went wrong, please try again!</span>
            <button
              onClick={getHadithFromAPI}
              className="px-4 py-1 ms-4"
              style={{ backgroundColor: bgColor }}
            >
              Refresh
            </button>
          </div>
        )
      )}
    </div>
  )
}

export default App
