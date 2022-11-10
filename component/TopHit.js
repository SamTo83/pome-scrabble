import React from "react";
import Tile from "./Tile";

const TopHit = ({ wordObject }) => {
  if (!wordObject) return <></>;
  const { score, letterScores } = wordObject;
  let operand = "";
  letterScores.forEach((letter, index) => {
    if (index === 0) {
      operand += `= ${letter.score}`;
    } else {
      operand += ` + ${letter.score}`;
    }
  });

  return (
    <div >
      <h4 className="text-2xl flex justify-center pt-5">Top hit</h4>
      <div className="flex justify-center">
      <div className="flex flex-col w-96 items-center gap-4 my-12 pt-10">
        <span className="flex text-center">
          {letterScores.map((letterObj, index) => {
            const { letter, score } = letterObj;
            return (
              <div key={index}>
                <Tile
                  letter={letter.toUpperCase()}
                  score={score}
                />
              </div>
            );
          })}
        </span>
        <div>
        <p className="font-semibold text-2xl">{operand}</p>
        <p className='text-2xl'> = <span className="text-purple font-bold text-2xl">{score}</span></p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default TopHit;
