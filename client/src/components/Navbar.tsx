import React, {useState} from 'react'
import {MyDialog} from './Modals/HelpModal'

export const Navbar = () => {

  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalToggle = () => {
    setModalOpen((prev) => !prev); // Toggle the modal state
  };


  return (
    <nav className='w-full bg-lakerPurple py-2 mb-4 flex justify-center gap-12'>
      <button className='font-normal md:text-lg transition-all ease-in-out text-md bg-transparent text-white hover:text-lakerGold hover:scale-125 hover:font-semibold'>
        How To Play
      </button>
      <button 
      onClick={handleModalToggle}
      className='font-normal md:text-lg transition-all ease-in-out text-md bg-transparent text-white hover:text-lakerGold hover:scale-125 hover:font-semibold'>
        Teams Help
      </button>
      <MyDialog open={isModalOpen} onClose={handleModalToggle} />
      <button className='font-normal md:text-lg transition-all ease-in-out bg-transparent text-md text-white hover:text-lakerGold hover:font-semibold hover:scale-125'>
        Stats
      </button>
    </nav>
  )
}
