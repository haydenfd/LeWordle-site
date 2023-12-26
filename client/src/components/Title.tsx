import React from 'react'

const Title = () => {
  return (
    <div className='text-center'>
        {/* <h1 className='font-bold text-3xl text-lakerPurple md:text-4xl uppercase'>LeWordle</h1> */}
        <h1 className='text-lakerPurple md:text-3xl text-2xl font-extrabold'>
          <span className='text-4xl uppercase'>L</span>
          e
          <span className='text-4xl uppercase'>W</span>
          ordle
      </h1>
        <h3 className="text-xl mt-2 font-light text-lakerPurple md:text-2xl">Like the Wordle, but make it NBA</h3>
        <button onClick={() => alert("Clicked!")}
        className='text-md text-lakerPurple bg-white border-2 border-lakerPurple px-2 py-1 mt-2 hover:text-lakerGold hover:bg-lakerPurple'>
          Get a hint!</button>
    </div>
  )
}

export { Title }