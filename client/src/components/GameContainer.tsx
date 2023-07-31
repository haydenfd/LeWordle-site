import { buildEndpoint, endpointsList } from '@/api'
import React, {useEffect, useState, useRef} from 'react'
import axios from 'axios'
import { fuseOptions } from '@/utils'
import Fuse from 'fuse.js'


const GameContainer = () => {

  const [allPlayers, setAllPlayers] = useState<any>([])

  
  let fuzzySearchFilter = (search: string) => 
  {
    let fuse = new Fuse(allPlayers, fuseOptions)
    let results = fuse.search(search).splice(0,5)
    console.log(results)
  }


  useEffect(() => {
    
    const fetchAllPlayersOnPageLoad = async () => {
      
    const endpoint = buildEndpoint(endpointsList.fetchAllPlayers)
    
    await axios.get(endpoint).then((res) => 
    {
      setAllPlayers(res.data)
    })
    }

    fetchAllPlayersOnPageLoad()

  }, [])


  return (
    <div className='min-h-[60vh] text-center bg-red-400'>
      GameContainer
    </div>
  )
}

export { GameContainer }