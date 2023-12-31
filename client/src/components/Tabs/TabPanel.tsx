import React, { useState } from 'react';
import {TabGroup} from './TabGroup'; 

export const TabPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState('West'); // Default to West

  return (
    <div className="p-4 w-full">
      <div className="flex justify-center">
        <button
          className={`py-2 px-4 min-w-[15%] ${
            activeTab === 'West' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
          }`}
          onClick={() => setActiveTab('West')}
        >
          West
        </button>
        <button
          className={`py-2 px-4 min-w-[15%] ${
            activeTab === 'East' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
          }`}
          onClick={() => setActiveTab('East')}
        >
          East
        </button>
      </div>
      <TabGroup region={activeTab} />
    </div>
  );
};

