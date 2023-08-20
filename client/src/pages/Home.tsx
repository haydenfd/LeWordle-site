import React, { useEffect } from 'react'
import axios from "axios"
import { Footer, GameContainer, Navbar, Title } from '@/components'
import Cookies from 'js-cookie';
import { endpointsList, buildEndpoint } from '@/api';

export const Home = () => 
{
  // const [userCookie, setUserCookie]  = useCookies(['user_id'])
  // const [sessionCookie, setSessionCookie]  = useCookies(['session_id'])

  // const addUserCookie = (user_id: any) => {
  //   setUserCookie('user_id', user_id, {path: '/', maxAge: 157680000})
  //   console.log(user_id)
  // }

  // const addSessionCookie = (session_id: string) => {
  //   setSessionCookie('session_id', session_id, {path: '/', maxAge: 157680000})
  // }

  const getMidnightOfFollowingDay = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const day = currentDate.getDate() + 1; // Add 1 to get the following day
    const midnight = new Date(year, month, day, 0, 0, 0, 0);
    return midnight;
  };

  useEffect(() => {


    const initUser = async () => {

      Cookies.set('name', 'hayden', { expires: 3600 });
      const endpoint = buildEndpoint(endpointsList.initUser)

      axios.defaults.withCredentials = true;
  
      axios.post(endpoint).then((res) => {

        if (res.data.user_data?.user_id)
        {
          Cookies.set('user_id', res.data.user_data?.user_id , { expires: 3600 });
        }

        if (res.data.session_data?.session_id)
        {
          const expirationDate = getMidnightOfFollowingDay();
          Cookies.set('session_id', res.data.session_data?.session_id , { expires: expirationDate });
        }
        // addUserCookie(res.data.user_data?.user_id)
      })
    }

    initUser()

  }, [])


  return (
      <div className='flex flex-col min-h-[100vh] justify-between'>
        <Navbar />
        <Title />
        <GameContainer />
        <Footer />
      </div>
  )
}

