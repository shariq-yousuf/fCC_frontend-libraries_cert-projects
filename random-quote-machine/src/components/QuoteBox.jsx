import React from "react"
import { Comment, ThreeDots } from "react-loader-spinner"

const QuoteBox = ({
  hadith,
  getHadithFromAPI,
  bgColor,
  getBgColor,
  textEl,
  quoteBox,
  loader,
  isFetched,
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
    <>
      <div
        id="quote-box"
        className="transition-all	duration-1000 md:min-w-2/5 md:max-w-5xl w-11/12 bg-stone-500 text-white px-8 py-4 flex flex-col justify-evenly gap-3"
        ref={quoteBox}
      >
        {!isFetched ? (
          <div className="flex justify-center" ref={loader}>
            <Comment
              visible={true}
              height="150"
              width="150"
              ariaLabel="comment-loading"
              wrapperStyle={{}}
              wrapperClass="comment-wrapper"
              color="#fff"
              backgroundColor={bgColor + "80"}
            />
          </div>
        ) : (
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
        )}

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
            {isFetched ? (
              "Next"
            ) : (
              <ThreeDots
                visible={true}
                height="30"
                width="50"
                color="white"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
            )}
          </button>
        </div>
      </div>
    </>
  )
}

export default QuoteBox
