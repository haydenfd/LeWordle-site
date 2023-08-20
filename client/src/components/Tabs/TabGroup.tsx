import React, { useState, useEffect } from 'react';
import {Tab} from './Tab'; // Import the Tab component
import { TabGroupProps } from '@/types';

export const TabGroup: React.FC<TabGroupProps> = ({ region }) => {
  const [activeTab, setActiveTab] = useState('Pacific'); // Default tab based on region

  const tabOptions =
    region === 'West'
      ? ['Pacific', 'Southwest', 'Northwest']
      : ['Atlantic', 'Central', 'Southeast'];

    useEffect(() => {
        setActiveTab(tabOptions[0]); // Set default tab when region changes
    }, [region]);
    
  return (
    <div className="mt-4">
      <div className="flex justify-center">
        {tabOptions.map((option) => (
          <button
            key={option}
            className={`py-2 px-4 min-w-[20%] ${
              activeTab === option ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
            }`}
            onClick={() => setActiveTab(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <Tab tab={activeTab} />
    </div>
  );
};

