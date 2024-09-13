import React from "react"

const QuoteBox = ({
  hadith,
  getHadithFromAPI,
  bgColor,
  getBgColor,
  textEl,
}) => {
  if (textEl.current) textEl.current.style.opacity = "1"

  const handleClick = () => {
    getBgColor()
    getHadithFromAPI()
  }

  return (
    <div
      id="quote-box"
      className="min-h-64 md:min-w-2/5 md:max-w-5xl w-11/12 transition-all	duration-1000 bg-slate-600 text-white px-8 py-4 flex flex-col justify-evenly gap-3"
    >
      <div
        id="text"
        className={`text-3xl transition-all	duration-1000`}
        ref={textEl}
      >
        {hadith.hadithEnglish ? hadith.hadithEnglish : hadith.error}
      </div>
      <div id="author" className="text-right text-xl">
        {hadith.hadithEnglish ? "- Prophet Muhammad (S.A.W)" : ""}
      </div>
      <div id="buttons-container" className="flex justify-between">
        <a
          href={`https://twitter.com/intent/tweet?hashtags=hadith&text=' +
      ${encodeURIComponent(
        hadith.hadithEnglish + "\n - Prophet Muhammad (S.A.W) \n\n"
      )}`}
          target="_blank"
          title="Tweet this Hadith"
          id="tweet-quote"
          className="text-lg px-4 py-1 transition-all	duration-1000"
          style={{ backgroundColor: bgColor }}
        >
          <i className="fa-brands fa-x-twitter"></i>
        </a>
        <button
          id="new-quote"
          className="text-lg px-4 py-1 transition-all	duration-1000"
          style={{ backgroundColor: bgColor }}
          onClick={handleClick}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default QuoteBox
