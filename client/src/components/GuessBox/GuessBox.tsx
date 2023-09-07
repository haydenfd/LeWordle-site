import React from 'react'

type GuessBoxProps = {
  position_evaluation? : number
  position?:string
}
export const GuessBox = (props: GuessBoxProps) => {
  let bgColor = 'lightgray'
  let value: string | undefined = props.position

  if (props.position_evaluation)
  {
    if (props.position_evaluation == 2) bgColor = 'lightgreen'
    else if (props.position_evaluation == 1) bgColor = 'yellow'
  }

  return (
    <div style={{
      'backgroundColor': bgColor,
  }} className='p-2'>
      {value}
  </div>
  )
}

