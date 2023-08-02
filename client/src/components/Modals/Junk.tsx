// TabApp.tsx
import React, { useState } from 'react';
import { Tab } from '@headlessui/react';

const DivisionInfo: React.FC<{
  region: string;
  division: string;
}> = ({ region, division }) => {
  return (
    <div className="border-t border-gray-300 pt-4 mt-4">
      <h2 className="text-lg font-semibold mb-2">Division Information</h2>
      <p>
        You have selected the {region} region and the {division} division.
        Here is some information about the selected division.
      </p>
      {/* You can add more content or fetch dynamic information based on the selected division */}
    </div>
  );
};


const DivisionTabs: React.FC<{
  selectedRegion: string | null;
  setSelectedRegion: (region: string | null) => void;
  selectedDivision: string | null;
  setSelectedDivision: (division: string | null) => void;
}> = ({ selectedRegion, setSelectedRegion, selectedDivision, setSelectedDivision }) => {
  return (
    <Tab.Group>
      <Tab.List className="flex space-x-4 mb-4">
        <Tab as="button" onClick={() => setSelectedRegion('West')}>
          West
        </Tab>
        <Tab as="button" onClick={() => setSelectedRegion('East')}>
          East
        </Tab>
      </Tab.List>

      {selectedRegion === 'West' && (
        <Tab.List className="flex space-x-4 mb-4">
          <Tab as="button" onClick={() => setSelectedDivision('PAC')}>
            PAC
          </Tab>
          <Tab as="button" onClick={() => setSelectedDivision('SW')}>
            SW
          </Tab>
          <Tab as="button" onClick={() => setSelectedDivision('NW')}>
            NW
          </Tab>
        </Tab.List>
      )}

      {selectedRegion === 'East' && (
        <Tab.List className="flex space-x-4 mb-4">
          <Tab as="button" onClick={() => setSelectedDivision('ATL')}>
            ATL
          </Tab>
          <Tab as="button" onClick={() => setSelectedDivision('CEN')}>
            CEN
          </Tab>
          <Tab as="button" onClick={() => setSelectedDivision('SW')}>
            SW
          </Tab>
        </Tab.List>
      )}
    </Tab.Group>
  );
};



const TabApp: React.FC = () => {
  const [selectedDivision, setSelectedDivision] = useState<string | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  return (
    <div className="max-w-lg mx-auto mt-8">
      <DivisionTabs
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
        selectedDivision={selectedDivision}
        setSelectedDivision={setSelectedDivision}
      />
      {selectedRegion && selectedDivision && (
        <DivisionInfo region={selectedRegion} division={selectedDivision} />
      )}
    </div>
  );
};

export default TabApp;
