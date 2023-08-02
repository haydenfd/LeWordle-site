import React, { useState } from 'react'
import { Dialog, Tab } from '@headlessui/react'
import { ModalProps } from '@/types';
import { pac_data, nw_data, sw_data, atl_data, cen_data, se_data } from './teams';

export const TeamHelpModal = ({open, onClose}: ModalProps) => {
        
    const [activeTab, setActiveTab] = useState<'west' | 'east'>('west');

        if (!open) {
            return null; 
        }
    
 return (

    <Dialog
      className="fixed inset-0 z-10 overflow-y-auto"
      open={open}
      onClose={onClose}
    >
       <div className="flex items-center justify-center min-h-screen">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />

        <div className="relative bg-white rounded-md max-w-md">
          <div className="bg-lakerPurple text-white p-2 rounded-t-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-center w-full">
                <div className="text-lg font-normal">Teams Help</div>
              </div>
              <button
                className="text-white hover:bg-lakerGold transform scale-125 transition ease-in-out duration-300"
                onClick={onClose}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="butt"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

            {/* Dialog Body */}

          <div className="mt-4 p-3 font-noto">
          <Tab.Group>
                <Tab.List className="flex my-4 w-full justify-center">
                  <Tab>
                    {({ selected }) => (
                      <button
                        className={`px-8 py-2 ${
                          selected ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                        }`}
                        onClick={() => setActiveTab('west')}
                      >
                        WEST
                      </button>
                    )}
                  </Tab>
                  <Tab>
                    {({ selected }) => (
                      <button
                        className={`px-8 py-2 ${
                          selected ? 'bg-blue-500 text-white shadow-none' : 'bg-gray-200 text-gray-800'
                        }`}
                        onClick={() => setActiveTab('east')}
                      >
                        EAST
                      </button>
                    )}
                  </Tab>
                </Tab.List>

                <Tab.Panels>
                  <Tab.Panel>
                    <div className="space-y-4">
                      <Tab.Group>
                        <Tab.List className="flex justify-center flex-nowrap">
                          <Tab>
                            {({ selected }) => (
                              <button
                                className={`px-8 py-2 rounded-l-full ${
                                  selected ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                                }`}
                              >
                                PAC
                              </button>
                            )}
                          </Tab>
                          <Tab>
                            {({ selected }) => (
                              <button
                                className={`px-8 py-2  ${
                                  selected ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                                }`}
                              >
                                NW
                              </button>
                            )}
                          </Tab>
                          <Tab>
                            {({ selected }) => (
                              <button
                                className={`px-8 py-2 rounded-r-full  ${
                                  selected ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                                }`}
                              >
                                SW
                              </button>
                            )}
                          </Tab>
                        </Tab.List>

                        <Tab.Panels>
                          <Tab.Panel>
                            <div className="flex gap-4 flex-wrap font-normal">
                              { pac_data }
                            </div>
                          </Tab.Panel>
                          <Tab.Panel>
                            <div className="flex gap-4 flex-wrap font-normal">
                             { nw_data }
                            </div>
                          </Tab.Panel>
                          <Tab.Panel>
                            <div className="flex gap-4 flex-wrap font-normal">
                              { sw_data }  
                            </div>
                          </Tab.Panel>
                        </Tab.Panels>
                      </Tab.Group>
                    </div>
                  </Tab.Panel>
                  <Tab.Panel>
                    <div className="space-y-4">
                      <Tab.Group>
                        <Tab.List className="flex justify-center flex-nowrap">
                          <Tab>
                            {({ selected }) => (
                              <button
                                className={`px-8 py-2  rounded-l-full  ${
                                  selected ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                                }`}
                              >
                                ATL
                              </button>
                            )}
                          </Tab>
                          <Tab>
                            {({ selected }) => (
                              <button
                                className={`px-8 py-2  ${
                                  selected ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                                }`}
                              >
                                CEN
                              </button>
                            )}
                          </Tab>
                          <Tab>
                            {({ selected }) => (
                              <button
                                className={`px-8 py-2  rounded-r-full ${
                                  selected ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                                }`}
                              >
                                SE
                              </button>
                            )}
                          </Tab>
                        </Tab.List>

                        <Tab.Panels>
                          <Tab.Panel>
                            <div className="flex gap-4 flex-wrap font-normal">
                                { atl_data }
                            </div>
                          </Tab.Panel>
                          <Tab.Panel>
                            <div className="flex gap-4 flex-wrap font-normal">
                              { cen_data }
                            </div>
                          </Tab.Panel>
                          <Tab.Panel>
                            <div className="flex gap-4 flex-wrap font-normal">
                              { se_data }
                            </div>
                          </Tab.Panel>
                        </Tab.Panels>
                      </Tab.Group>
                    </div>
                  </Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
          </div>

        </div>
      </div>
    </Dialog>
  )
}
