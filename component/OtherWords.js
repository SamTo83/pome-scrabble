import React from 'react'
import Tile from './Tile'

const OtherWords = ({wordObject}) => {
  const {word, score, letterScores} = wordObject
  let operand = ''
  letterScores.forEach((letter, index) => {
    if(index === 0) {
      operand += `= ${letter.score}`
    } else {
      operand += ` + ${letter.score}`
    }
  })

  return (
    <div className='grid bg-light-purple rounded-2xl w-96 p-6'>
      <h4 className='font-bold text-xl'>{(word).toUpperCase()}</h4>
      <span className="flex flex-row text-center">
        {letterScores.map((letterObj, index) => {
          const {letter, score} = letterObj
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
      <p className='text-xl'>{operand}</p>
      <p className='text-xl'>= <span className='text-2xl font-bold text-purple'>{score}</span></p>
    </div>
  )
}

export default OtherWords