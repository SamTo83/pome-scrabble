import React from 'react'

const Tile = ({letter, score}) => {
  return (
    <div className="border-solid bg-tile  m-3 grid grid-col-2 p-3 rounded-md w-16 shadow">
      <p>
        <span className="text-3xl">{letter}</span>
        <span className="text-sm p-2">{score}</span>
      </p>
    </div>
  )
}

export default Tile
