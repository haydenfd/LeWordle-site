import React, { useState } from 'react';
import Tab from './Tab'; // Import the Tab component

interface TabGroupProps {
  region: string;
}

const TabGroup: React.FC<TabGroupProps> = ({ region }) => {
  const [activeTab, setActiveTab] = useState('Pacific'); // Default tab based on region

  const tabOptions =
    region === 'West'
      ? ['Pacific', 'Southwest', 'Northwest']
      : ['Atlantic', 'Central', 'Southeast'];

  return (
    <div className="mt-4">
      <div className="flex space-x-4 justify-center">
        {tabOptions.map((option) => (
          <button
            key={option}
            className={`py-2 px-4 border rounded ${
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

export default TabGroup;
