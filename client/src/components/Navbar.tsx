import React, { useState } from 'react'
import { Modal } from './Modal/GuideModal'

export const Navbar = () => {

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <nav className='w-full bg-lakerPurple py-2 flex justify-center gap-12'>

      <button onClick={() => setModalOpen(true)}
      className='font-normal md:text-lg transition-all ease-in-out text-md bg-transparent text-white hover:text-lakerGold hover:scale-110 hover:font-semibold focus:outline-none outline-none'
      >
        How To Play
      </button>
      <Modal isOpen={modalOpen} onClose={closeModal} />
      <button 
      className='font-normal md:text-lg transition-all ease-in-out text-md bg-transparent text-white hover:text-lakerGold hover:scale-110 hover:font-semibold focus:outline-none outline-none'
      >
        Teams Help
      </button>

      <button 
      className='font-normal md:text-lg transition-all ease-in-out bg-transparent text-md text-white hover:text-lakerGold hover:font-semibold hover:scale-110 focus:outline-none outline-none'
      >
        Stats
      </button>


    </nav>
  )
}
