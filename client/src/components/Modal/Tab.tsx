import React from 'react';

interface TabProps {
  tab: string;
}

const Tab: React.FC<TabProps> = ({ tab }) => {
  // Replace this with your actual data
  const data = [
    { text: 'Some text' },
    // Add more data items as needed
  ];

  return (
    <div className="mt-4">
      {data.map((item, index) => (
        <div key={index} className="p-4 flex items-center space-x-4">
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Tab;
