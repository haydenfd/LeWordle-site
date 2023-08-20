import React from 'react'

const Title = () => {
  return (
    <div className='text-center'>
        <h1 className='font-bold text-3xl text-lakerPurple md:text-4xl'>LeWordle</h1>
        <h3 className="text-xl mt-2 font-light text-lakerPurple md:text-2xl">NBA-themed Wordle variant</h3>
        <button onClick={() => alert("Clicked!")}
        className='text-md text-lakerPurple bg-white border-2 border-lakerPurple px-2 py-1 my-4 hover:text-lakerGold hover:bg-lakerPurple'>
          Get a hint!</button>
    </div>
  )
}

export { Title }