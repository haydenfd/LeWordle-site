import { TabItemProps } from '@/types'
import React from 'react'

export const TabItem: React.FC<TabItemProps> = ({tricode, img, key}) => {
  return (
    <div className='flex flex-col text-center text-3xl' key={key}>
        <img src={img} className='w-16 h-16'/>
        <h3 className='text-slate-700'>{tricode}</h3>
    </div>
  )
}

