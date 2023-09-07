import { buildEndpoint, endpointsList } from '@/api'
import {Fragment, useEffect, useState, ChangeEvent } from 'react'
import axios from 'axios'
import { fuseOptions } from '@/utils'
import Fuse from 'fuse.js'
import { Combobox } from "@headlessui/react"
import { GuessTeamBox } from './GuessBox/GuessTeamBox'
import { GuessBox } from './GuessBox/GuessBox'

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

    console.log(selected)
    setGuessesMade(guessesMade + 1)
    setSearchInput('')
    
    const guessPlayer = async () => {
      let id = selected._id as number
      await axios(`http://localhost:8000/api/players/guess_player/${id}`).then((res) => {
        console.log(res.data)
        setGuessedPlayers([...guessedPlayers, res.data])
      })
    }

    guessPlayer()
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

      <div className='mt-6 mb-6'>
        <div className="w-full p-1 text-lakerPurple">
        <div className="flex flex-col w-[85%] mx-auto overflow-y-auto">
          <div className="grid grid-cols-10 border-y-4 border-y-lakerPurple">
            <div className="col-span-3 text-center"></div>
            <div className="col-span-1 text-center">Team</div>
            <div className="col-span-1 text-center">Conf</div>
            <div className="col-span-1 text-center">Div</div>
            <div className="col-span-1 text-center">Pos</div>
            <div className="col-span-1 text-center">Ht</div>
            <div className="col-span-1 text-center">Age</div>
            <div className="col-span-1 text-center">#</div>            
          </div>

          {guessedPlayers.map((player) => (
            <div className="grid grid-cols-10 font-semibold" key={player?.id}>
              <div className="col-span-3 text-center bg-gray-100 border-x-2 border-x-lakerPurple border-b-2 border-b-lakerPurple">{player?.full_name}</div>
              <div className="col-span-1 text-center bg-gray-100 border-x-2 border-x-lakerPurple border-b-2 border-b-lakerPurple"><GuessTeamBox tricode={player?.current_team} tricode_evaluation={player?.tricode_evaluation}/></div>
              <div className="col-span-1 text-center bg-gray-100 border-x-2 border-x-lakerPurple border-b-2 border-b-lakerPurple"><GuessTeamBox conference={player?.conference} conference_evaluation={player?.conference_evaluation}/></div>
              <div className="col-span-1 text-center bg-gray-100 border-x-2 border-x-lakerPurple border-b-2 border-b-lakerPurple"><GuessTeamBox division={player?.division} division_evaluation={player?.division_evaluation}/></div>
              <div className="col-span-1 text-center bg-gray-100 border-x-2 border-x-lakerPurple border-b-2 border-b-lakerPurple"><GuessBox position={player?.position} position_evaluation={player?.position_evaluation}/></div>
              <div className="col-span-1 text-center bg-gray-100 border-x-2 border-x-lakerPurple border-b-2 border-b-lakerPurple">{player?.height_feet}</div>
              <div className="col-span-1 text-center bg-gray-100 border-x-2 border-x-lakerPurple border-b-2 border-b-lakerPurple">{player?.age}</div>
              <div className="col-span-1 text-center bg-gray-100 border-x-2 border-x-lakerPurple border-b-2 border-b-lakerPurple">{player?.jersey_number}</div>   
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  )
}

export { GameContainer }