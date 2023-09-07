import React from 'react'


type GuessTeamBoxProps = {
    tricode?:string
    conference?:string
    division?:string
    tricode_evaluation?:number
    conference_evaluation?:number
    division_evaluation?:number
}

export const GuessTeamBox = (props: GuessTeamBoxProps) => {

  let value: string | undefined = ''

  if (props.tricode) value = props.tricode
  else if (props.conference) value = props.conference
  else value = props.division

  let bgColor = 'lightgray'

  if (props.tricode_evaluation) {
    if (props.tricode_evaluation == 2)
    {
        bgColor = 'lightgreen'
    }
    else if (props.tricode_evaluation == 1)
    {
        bgColor = 'yellow'
    }
  }

  if (props.conference_evaluation) {
    if (props.conference_evaluation == 2)
    {
        bgColor = 'lightgreen'
    }
    else if (props.conference_evaluation == 1)
    {
        bgColor = 'yellow'
    }
  }

  if (props.division_evaluation) {
    if (props.division_evaluation == 2)
    {
        bgColor = 'lightgreen'
    }
    else if (props.division_evaluation == 1)
    {
        bgColor = 'yellow'
    }
  }

  
  return (
    <div style={{
        'backgroundColor': bgColor,
    }} className='p-2'>
        {value}
    </div>
  )
}
