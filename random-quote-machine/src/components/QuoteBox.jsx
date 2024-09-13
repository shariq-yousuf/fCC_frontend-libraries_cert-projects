import React from "react"

const QuoteBox = ({
  hadith,
  getHadithFromAPI,
  bgColor,
  getBgColor,
  textEl,
  quoteBox,
}) => {
  const {
    hadithEnglish,
    englishNarrator,
    book: { bookName },
    chapter: { chapterNumber },
    chapter: { chapterEnglish },
  } = hadith
  const handleClick = () => {
    getHadithFromAPI()
    getBgColor()
  }

  return (
    <div
      id="quote-box"
      className="transition-all	duration-1000 md:min-w-2/5 md:max-w-5xl w-11/12 bg-stone-500 text-white px-8 py-4 flex flex-col justify-evenly gap-3"
      ref={quoteBox}
    >
      <div
        ref={textEl}
        className="transition-all	duration-1000 text-lg flex flex-col justify-evenly gap-2"
      >
        <div id="narrator">{englishNarrator}</div>
        <div id="text" className={`text-3xl transition-all duration-1000`}>
          {hadithEnglish ? hadithEnglish : hadith.error}
        </div>
        <div id="reference" className="flex justify-between">
          <div id="book">Book: {bookName}</div>
          <div id="chapter">
            Chapter: {chapterNumber}. {chapterEnglish}
          </div>
        </div>
      </div>

      <div id="buttons-container" className="flex justify-between">
        <a
          href={`https://twitter.com/intent/tweet?hashtags=hadith&text=' +
      ${encodeURIComponent(
        englishNarrator +
          "\n" +
          hadithEnglish +
          "\n\n" +
          bookName +
          "\n" +
          chapterNumber +
          ". " +
          chapterEnglish
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
