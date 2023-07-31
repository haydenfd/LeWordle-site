import React, { useEffect } from 'react'
import axios from "axios"
import { Footer, GameContainer, Navbar, Title } from '@/components'
import { CookiesProvider, useCookies } from 'react-cookie';
import { endpointsList, buildEndpoint } from '@/api';
import { getCurrentMilitaryTime } from '@/utils';

export const Home = () => 
{

  const [userCookie, setUserCookie]  = useCookies(['user_id'])
  const [sessionCookie, setSessionCookie]  = useCookies(['session_id'])

  const addUserCookie = (user_id: string) => {
    setUserCookie('user_id', user_id, {path: '/'})
  }

  const addSessionCookie = (session_id: string) => {
    setSessionCookie('session_id', session_id, {path: '/'})
  }

  useEffect(() => {

    const endpoint = buildEndpoint(endpointsList.initUser)

    axios.defaults.withCredentials = true;

    console.log(endpoint)
    axios.post(endpoint, {
      timestamp: getCurrentMilitaryTime(),
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

