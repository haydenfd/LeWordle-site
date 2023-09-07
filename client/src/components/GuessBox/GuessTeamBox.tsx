import React from 'react'


type GuessTeamBoxProps = {
    tricode?:string
    conference?:string
    division?:string
}

export const GuessTeamBox = (props: GuessTeamBoxProps) => {

  let value: string | undefined = ''

  if (props.tricode) value = props.tricode
  else if (props.conference) value = props.conference
  else value = props.division

  return (
    <>
        {value}
    </>
  )
}
