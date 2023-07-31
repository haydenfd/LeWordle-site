import { buildEndpoint, endpointsList } from '@/api'
import React, {Fragment, useEffect, useState, ChangeEvent } from 'react'
import axios from 'axios'
import { fuseOptions } from '@/utils'
import Fuse from 'fuse.js'
import { Combobox } from "@headlessui/react"

type ActivePlayerDataSingleInterface = {
  _id: number,
  first_name: string,
  last_name: string,
  full_name: string
}


type InputMouseEventType = ChangeEvent<HTMLInputElement>

const GameContainer = () => {

  const [allPlayers, setAllPlayers] = useState<Array<ActivePlayerDataSingleInterface>>([])

  const [suggestedPlayers, setSuggestedPlayers] = useState<Array<ActivePlayerDataSingleInterface>>([])

  const [selected, setSelected] = useState<ActivePlayerDataSingleInterface | null>(null)

  const [searchInput, setSearchInput] = useState<string>('')
  
  let fuzzySearchFilter = (search: string) => 
  {
    let fuse = new Fuse(allPlayers, fuseOptions)
    let results = fuse.search(search).splice(0,5)
  }

  const handleSearchInputChange = (e:InputMouseEventType) => 
  {
    setSearchInput(e.target.value)
  }

  useEffect(() => {

    const recommendPlayers = () => {
      const fuse = new Fuse(allPlayers, fuseOptions)
      let fuseResults = fuse.search(searchInput).splice(0,5)
      
      let players:Array<ActivePlayerDataSingleInterface> = []
      for (let i = 0; i < fuseResults.length; i++)
      {
        players.push(fuseResults[i].item)
      }

      setSuggestedPlayers(players)
    }
    

    if (searchInput.length > 0)
    {
      recommendPlayers()
    }

  }, [searchInput])

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

  let [x, y] = useState<number>(1)

  useEffect(() => {
    y(x + 1)
    setSearchInput('')
  }, [selected])
  
  return (
    <div className='min-h-[60vh] text-center'>

      <Combobox as={Fragment} value={selected} onChange={(e:ActivePlayerDataSingleInterface) => {
        setSelected(e)
        console.log(e)
      }
      }>

      {({ activeOption }) => (
        <>
          <Combobox.Input as={Fragment}>
          <input placeholder={`Guess ${x} of 7`}
              className="font-semibold border-2 border-lakerPurple w-3/5 md:w-2/5 m-auto p-2 mt-6 focus:outline-none focus:border-lakerGold md:text-lg"
              value={searchInput} 
              type="text"
              onChange={handleSearchInputChange}
              autoComplete="false"
          />
          </Combobox.Input>
          {
            suggestedPlayers.length > 0 && (
              <div className="relative w-3/5 md:w-2/5 bg-blue-400 mx-auto">
                <Combobox.Options className="absolute text-left w-full font-semibold border-b-2 border-x-2 border-lakerGold z-40">
                  {
                    suggestedPlayers.map((player:ActivePlayerDataSingleInterface) => (
                      <Combobox.Option
                      key={player._id} 
                      value={player}
                      className={`py-1 pl-2 cursor-pointer ${
                        activeOption === player ? 'bg-lakerGold' : 'bg-white'
                      }`}>
                        {player.full_name}
                      </Combobox.Option> 
                    )) 
                  }
                </Combobox.Options>
              </div>
              )
            }
        </>
      )}

      </Combobox>

      <div className='mt-10'>
      </div>
    </div>
  )
}

export { GameContainer }