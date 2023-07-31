import React from 'react'

export const Navbar = () => {

  return (
    <nav className='w-full bg-lakerPurple py-2 mb-4 flex justify-center gap-12'>
      <button className='font-normal md:text-lg transition-all ease-in-out text-md bg-transparent text-white hover:text-lakerGold hover:scale-125 hover:font-semibold'>
        How To Play
      </button>
      <button className='font-normal md:text-lg transition-all ease-in-out text-md bg-transparent text-white hover:text-lakerGold hover:scale-125 hover:font-semibold'>
        Teams Help
      </button>
      <button className='font-normal md:text-lg transition-all ease-in-out bg-transparent text-md text-white hover:text-lakerGold hover:font-semibold hover:scale-125'>
        Stats
      </button>
    </nav>
  )
}
