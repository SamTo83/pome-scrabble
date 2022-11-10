import { useState, useEffect } from "react";
import Head from "next/head";
import scrabble from "@nosweat/scrabble"; //use scrabble.find(letters)
import OtherWords from "../component/OtherWords";
import { convertToObject, wordSort } from "../utils/word-score";
import TopHit from "../component/TopHit";

export default function Index() {
  const [letters, setLetters] = useState("cyigjuw");
  const [sortedWords, setSortedWords] = useState([]);

  useEffect(() => {
    if (!(letters.length >= 2)) return
    setSortedWords(wordSort(scrabble.find(letters).map((word) => convertToObject(word))))
  }, [letters])

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@700&display=swap" rel="stylesheet"></link>
      </Head>
      <div>
        <div className="bg-[url('../images/background.PNG')] bg-no-repeat bg-cover bg-center flex flex-col justify-center shadow-md min-h-screen ">
          <h1 className="font-Manrope text-6xl flex justify-center pt-20 pb-5 drop-shadow-2xl font-bold">
            Pome Scrabble
          </h1>
          <p className="font-Nanum text-5xl test-shadow pb-10 flex justify-center drop-shadow-2xl text-purple">
            Cheat to win!
          </p>
          <div className="flex justify-center">
            <div className="flex flex-col">
              <input
                className="rounded-full p-2 pl-5 shadow-md text-xl font-normal border-solid border-2 w-96"
                type="text"
                value={letters}
                maxLength={7}
                onChange={(e) => {
                  setLetters(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="">
          <TopHit wordObject={sortedWords[0]} />
          </div>
        </div>
        <h4 className="flex justify-center py-7 font-normal text-xl">Other Words...</h4>
      </div>
      <div className="flex justify-center">
      <div className="flex justify-center w-3/5">
        <div className="grid grid-rows-2 grid-cols-2 gap-12 p-5">
        {letters.length >= 2 &&
          sortedWords.map((wordObject, index) => {
            if (index === 0) return
            return <OtherWords key={index} wordObject={wordObject} />;
          })
        }
        </div>
      </div>
      </div>

    </div>
  );
}