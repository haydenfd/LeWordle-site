import { buildEndpoint, endpointsList } from '@/api'
import {Fragment, useEffect, useState, ChangeEvent } from 'react'
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
  const [guessedPlayers, setGuessedPlayers] = useState<Array<any>>([])
  const [selected, setSelected] = useState<ActivePlayerDataSingleInterface | null>(null)
  const [searchInput, setSearchInput] = useState<string>('')
  let [guessesMade, setGuessesMade] = useState<number>(0)

  const handleSearchInputChange = (e:InputMouseEventType) => 
  {
    setSearchInput(e.target.value)
  }

  const ifGuessed = (player: ActivePlayerDataSingleInterface) => {

    for (let i = 0; i < guessedPlayers.length; i++)
    {
      if (guessedPlayers[i]?.full_name === player.full_name)
      {
        return true;
      }
    }
    return false
  }

  useEffect(() => {

    const recommendPlayers = () => {
      const fuse = new Fuse(allPlayers, fuseOptions)
      let fuseResults = fuse.search(searchInput).splice(0,7)
      
      let players:Array<ActivePlayerDataSingleInterface> = []
      for (let i = 0; i < fuseResults.length; i++)
      {
        let player = fuseResults[i].item

        if (!ifGuessed(player))
        {
          players.push(fuseResults[i].item)
        }
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


  useEffect(() => {
    
    if (!selected) return 

    setGuessesMade(guessesMade + 1)
    setSearchInput('')
    setGuessedPlayers([...guessedPlayers, selected])
  }, [selected])
  
  return (
    <div className='min-h-[60vh] text-center'>
      <Combobox as={Fragment} value={selected} onChange={(e:ActivePlayerDataSingleInterface) => {
        setSelected(e)
      }
      }>

      {({ activeOption }) => (
        <>
          <Combobox.Input as={Fragment}>
          <input placeholder={`Guess ${guessesMade + 1} of 7`}
              className="font-semibold border-2 border-lakerPurple w-3/5 md:w-2/5 m-auto p-2 focus:outline-none focus:border-lakerGold md:text-lg"
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
        {/* <ul>
          {
            guessedPlayers.length > 0 &&
            guessedPlayers.map((player:any) =>  (
              <li>{player?.full_name}</li>
            ))
          }
        </ul> */}
        <div className="w-full bg-red-400 p-1 text-white"> {/* table container */}
          <div className='w-[80%] mx-auto grid grid-cols-8 font-semibold border-b-4 border-b-lakerPurple'> {/* game table */}
            <div className=" bg-blue-500">
              <h1>Name</h1>
            </div>
            
            <h1>Team</h1>
            <h1>Conf</h1>
            <h1>Div</h1>
            <h1>Pos</h1>
            <h1>Height</h1>
            <h1>Age</h1>
            <h1>#</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export { GameContainer }