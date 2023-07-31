import React, { useEffect } from 'react'
import axios from "axios"
import { Footer, GameContainer, Navbar, Title } from '@/components'
import { CookiesProvider } from 'react-cookie';
import { endpointsList, buildEndpoint } from '@/api';
import { getCurrentDate, getCurrentMilitaryTime } from '@/utils';

export const Home = () => 
{


  useEffect(() => {

    const endpoint = buildEndpoint(endpointsList.initUser)



    axios.defaults.withCredentials = true;

    console.log(endpoint)
    axios.post(endpoint, {
      timestamp: getCurrentMilitaryTime(),
      datestamp: getCurrentDate(),
    }).then((res) => console.log(res))

  }, [])


  return (
    <CookiesProvider>
      <div className='flex flex-col min-h-full'>
        <Navbar />
        <Title />
        <GameContainer />
        <Footer />
      </div>
    </CookiesProvider>
  )
}

