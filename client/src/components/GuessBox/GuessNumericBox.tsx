import React from 'react'

type GuessNumericBoxProps = {
    height_feet?: number,
    height_inches?:number,
    height_evaluation?: number,
    age?:number,
    age_evaluation?: number,
}


export const GuessNumericBox = (props: GuessNumericBoxProps) => {
    console.log(props)
    let bgColor = 'lightgray'
    if (props.height_evaluation)
    {
        if (props.height_evaluation == 0)
        {
            console.log('YES')
            bgColor = 'lightgreen'
        }
        else if (props.height_evaluation == -1 || props.height_evaluation == 1)
        {
            bgColor = 'yellow'
        }
    }

    else if (props.age_evaluation)
    {
        if (props.age_evaluation == 0)
        {
            bgColor = 'lightgreen'
        }

        else if (props.age_evaluation == 1 || props.age_evaluation == -1)
        {
            bgColor = 'yellow'
        }
    }
    return (
      <div style={{
        'backgroundColor': bgColor,
    }} className='p-2'>
        {
            props.height_evaluation && String('' + props.height_feet + '\'' + props.height_inches + '\"')
        }
        {
            props.age_evaluation && props.age
        }
    </div>
    )
}
