import React, { useEffect } from 'react'
import axios from "axios"
import { Footer, GameContainer, Navbar, Title } from '@/components'


export const Home = () => 
{
  return (
    <div className='flex flex-col min-h-full'>
      <Navbar />
      <Title />
      <GameContainer />
      <Footer />
    </div>
  )
}

