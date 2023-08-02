import React, { useState } from 'react'

import * as Modals from './Modals'

export const Navbar = () => {

  const [isTeamHelpModalOpen, setIsTeamHelpModalOpen] = useState<boolean>(false)
  const [isGuideModalOpen, setIsGuideModalOpen] = useState<boolean>(false)
  const [isStatsModalOpen, setIsStatsModalOpen] = useState<boolean>(false)


  const handleIsTeamModalOpen = () : void => setIsTeamHelpModalOpen((prev) => !prev)
  const handleIsGuideModalOpen = () : void => setIsGuideModalOpen((prev) => !prev)
  const handleIsStatsModalOpen = () : void => setIsStatsModalOpen((prev) => !prev)

 
  return (
    <nav className='w-full bg-lakerPurple py-2 mb-4 flex justify-center gap-12'>

      <button 
      onClick={() => handleIsGuideModalOpen()}
      className='font-normal md:text-lg transition-all ease-in-out text-md bg-transparent text-white hover:text-lakerGold hover:scale-125 hover:font-semibold'
      >
        How To Play
      </button>

      <button 
      onClick={() => handleIsTeamModalOpen()}
      className='font-normal md:text-lg transition-all ease-in-out text-md bg-transparent text-white hover:text-lakerGold hover:scale-125 hover:font-semibold'
      >
        Teams Help
      </button>

      <button 
      onClick={() => handleIsStatsModalOpen()}
      className='font-normal md:text-lg transition-all ease-in-out bg-transparent text-md text-white hover:text-lakerGold hover:font-semibold hover:scale-125'
      >
        Stats
      </button>

      <Modals.TeamHelpModal open={isTeamHelpModalOpen} onClose={handleIsTeamModalOpen}/>
      <Modals.GuideModal open={isGuideModalOpen} onClose={handleIsGuideModalOpen}/>
      <Modals.StatsModal open={isStatsModalOpen} onClose={handleIsStatsModalOpen}/>

    </nav>
  )
}
