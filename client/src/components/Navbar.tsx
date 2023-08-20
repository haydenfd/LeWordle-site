import React, { useState } from 'react'
import { GenericModal } from './Modal/GenericModal';
import { TabPanel } from './Tabs';

export const Navbar = () => {

  const [guideModalOpen, setGuideModalOpen] = useState<boolean>(false);
  const [teamModalOpen, setTeamModalOpen] = useState<boolean>(false);
  const [statsModalOpen, setStatsModalOpen] = useState<boolean>(false);

  const closeGuideModal = () => setGuideModalOpen(false)
  const closeStatsModal = () => setStatsModalOpen(false)
  const closeTeamModal = () => setTeamModalOpen(false)

  return (
    <nav className='w-full bg-lakerPurple py-2 flex justify-center gap-12'>

      <button onClick={() => setGuideModalOpen(true)}
      className='font-normal md:text-lg transition-all ease-in-out text-md bg-transparent text-white hover:text-lakerGold hover:scale-110 hover:font-semibold focus:outline-none outline-none'
      >
        How To Play
      </button>
      <GenericModal isOpen={guideModalOpen} onClose={() => closeGuideModal()} title="LeWordle Guide"/>

      <button onClick={() => setTeamModalOpen(true)}
      className='font-normal md:text-lg transition-all ease-in-out text-md bg-transparent text-white hover:text-lakerGold hover:scale-110 hover:font-semibold focus:outline-none outline-none'
      >
        Teams Help
      </button>
      <GenericModal isOpen={teamModalOpen} onClose={() => closeTeamModal()} title="Team Guide">
        <TabPanel />
      </GenericModal>

      <button onClick={() => setStatsModalOpen(true)}
      className='font-normal md:text-lg transition-all ease-in-out bg-transparent text-md text-white hover:text-lakerGold hover:font-semibold hover:scale-110 focus:outline-none outline-none'
      >
        Stats
      </button>
      <GenericModal isOpen={statsModalOpen} onClose={() => closeStatsModal()} title="Stats"/>


    </nav>
  )
}
