import React from 'react';
import { atl_data, cen_data, nw_data, pac_data, se_data, sw_data } from '@/utils/guide_data';
import { TabItem } from './TabItem';
import { TabProps } from '@/types';

export const Tab: React.FC<TabProps> = ({ tab }) => {
  return (
    <div className="mt-12 flex flex-wrap w-3/4 mx-auto justify-around">
      {tab == 'Pacific' && pac_data.map((item, index) => (
        <TabItem key={index} img={item.img} tricode={item.tricode} />
      ))}
      {tab == 'Southwest' && sw_data.map((item, index) => (
        <TabItem key={index} img={item.img} tricode={item.tricode} />
      ))}
      {tab == 'Northwest' && nw_data.map((item, index) => (
        <TabItem key={index} img={item.img} tricode={item.tricode} />
      ))}
      {tab == 'Central' && cen_data.map((item, index) => (
        <TabItem key={index} img={item.img} tricode={item.tricode} />
      ))}
      {tab == 'Atlantic' && atl_data.map((item, index) => (
        <TabItem key={index} img={item.img} tricode={item.tricode} />
      ))}
      {tab == 'Southeast' && se_data.map((item, index) => (
        <TabItem key={index} img={item.img} tricode={item.tricode} />
      ))}            
    </div>
  );
};

