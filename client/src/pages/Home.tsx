import { useEffect } from 'react'
import { 
  Footer, 
  GameContainer, 
  Navbar, 
  Title 
} from '@/components'
import axios from 'axios'
import { endpointMapping, buildApiEndpoint } from '@/api'

export const Home = () => 
{

  /* 
    Check localstorage for user_id field. If exists, retrieve user. Else, init user and save id to localStorage.  
  */
 

  const prelimUserSetup = async () => {

    let user_id:string = localStorage.getItem("user_id") || ""
    let session_id: string = localStorage.getItem("session_id") || ""
    let endpoint:string = ''

    // old user
    if (user_id != "") {

      endpoint = buildApiEndpoint(endpointMapping.retrieveUser) + user_id + "/" + session_id

      // TODO: FIX RETRIEVAL HERE
      await axios.get(endpoint).then(( { data } ) => {
        console.log(data)
      })

    }


    // new user
    else {

      endpoint = buildApiEndpoint(endpointMapping.initUser)

      await axios.post(endpoint).then(( {data} ) => {
        localStorage.setItem("user_id", data["user"]["user_id"])
        localStorage.setItem("session_id", data["session"]["session_id"])

      })
    }
  }

  useEffect(() => {

    prelimUserSetup()

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

