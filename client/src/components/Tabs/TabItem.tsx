import { TabItemProps } from '@/types'
import React from 'react'

export const TabItem: React.FC<TabItemProps> = ({tricode, img, key}) => {
  return (
    <div className='flex flex-col text-center' key={key}>
        <img src={img} className='w-24 h-24'/>
        <h3 className='text-slate-900 font-bold text-2xl'>{tricode}</h3>
    </div>
  )
}

