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
      className="fixed inset-0 z-10 overflow-y-scroll"
      open={open}
      onClose={onClose}
    >
       <div className="flex items-center justify-center max-h-3xl w-1/5 mx-auto">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />

        <div className="relative bg-gray-300 rounded-md">
          <div className="bg-lakerPurple text-white p-2 rounded-t-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-center w-full">
                <div className="text-lg font-normal">Teams Help</div>
              </div>
              <button
                className="text-white hover:bg-lakerGold transform scale-125 transition ease-in-out duration-300 focus:outline-none outline-none"
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

          <div className="p-10 font-noto">
            <p className='font-normal text-lg'>Quickly reference which teams are in each conference/division!</p>
          <Tab.Group>
                <Tab.List className="flex my-6 w-full justify-center">
                  <Tab className="focus:outline-none outline-none">
                    {({ selected }) => (
                      <button
                        className={`px-8 py-2 focus:outline-none outline-none active:outline-none ${
                          selected ? 'bg-lakerPurple text-lakerGold' : 'bg-gray-400 text-gray-800'
                        }`}
                        onClick={() => setActiveTab('west')}
                      >
                        WEST
                      </button>
                    )}
                  </Tab>
                  <Tab className="focus:outline-none outline-none">
                    {({ selected }) => (
                      <button
                        className={`px-8 py-2 focus:outline-none outline-none active:outline-none ${
                          selected ? 'bg-lakerPurple text-lakerGold' : 'bg-gray-400 text-gray-800'
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
                          <Tab className="focus:outline-none outline-none">
                            {({ selected }) => (
                              <button
                                className={`px-8 focus:outline-none outline-none active:outline-none py-2 rounded-l-full ${
                                  selected ? 'bg-lakerPurple text-lakerGold' : 'bg-gray-400 text-gray-800'
                                }`}
                              >
                                PAC
                              </button>
                            )}
                          </Tab>
                          <Tab className="focus:outline-none outline-none">
                            {({ selected }) => (
                              <button
                                className={`px-8 focus:outline-none outline-none active:outline-none py-2  ${
                                  selected ? 'bg-lakerPurple text-lakerGold' : 'bg-gray-400 text-gray-800'
                                }`}
                              >
                                NW
                              </button>
                            )}
                          </Tab>
                          <Tab className="focus:outline-none outline-none">
                            {({ selected }) => (
                              <button
                                className={`px-8 focus:outline-none outline-none active:outline-none py-2 rounded-r-full  ${
                                  selected ? 'bg-lakerPurple text-lakerGold' : 'bg-gray-400 text-gray-800'
                                }`}
                              >
                                SW
                              </button>
                            )}
                          </Tab>
                        </Tab.List>

                        <Tab.Panels>
                          <Tab.Panel>
                            <div className="flex gap-4 flex-wrap font-normal justify-evenly">
                              { pac_data }
                            </div>
                          </Tab.Panel>
                          <Tab.Panel>
                            <div className="flex gap-4 flex-wrap font-normal justify-evenly">
                             { nw_data }
                            </div>
                          </Tab.Panel>
                          <Tab.Panel>
                            <div className="flex gap-4 flex-wrap font-normal justify-evenly">
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
                          <Tab className="focus:outline-none outline-none">
                            {({ selected }) => (
                              <button
                                className={`px-8 py-2 focus:outline-none outline-none active:outline-none  rounded-l-full  ${
                                  selected ? 'bg-lakerPurple text-lakerGold outline-none' : 'bg-gray-400 text-gray-800'
                                }`}
                              >
                                ATL
                              </button>
                            )}
                          </Tab>
                          <Tab className="focus:outline-none outline-none">
                            {({ selected }) => (
                              <button
                                className={`px-8 py-2 focus:outline-none outline-none active:outline-none ${
                                  selected ? 'bg-lakerPurple text-lakerGold' : 'bg-gray-400 text-gray-800'
                                }`}
                              >
                                CEN
                              </button>
                            )}
                          </Tab>
                          <Tab className="focus:outline-none outline-none">
                            {({ selected }) => (
                              <button
                                className={`px-8 py-2 focus:outline-none outline-none active:outline-none rounded-r-full ${
                                  selected ? 'bg-lakerPurple text-lakerGold' : 'bg-gray-400 text-gray-800'
                                }`}
                              >
                                SE
                              </button>
                            )}
                          </Tab>
                        </Tab.List>

                        <Tab.Panels>
                          <Tab.Panel>
                            <div className="flex gap-4 flex-wrap font-normal justify-evenly">
                                { atl_data }
                            </div>
                          </Tab.Panel>
                          <Tab.Panel>
                            <div className="flex gap-4 flex-wrap font-normal justify-evenly">
                              { cen_data }
                            </div>
                          </Tab.Panel>
                          <Tab.Panel>
                            <div className="flex gap-4 flex-wrap font-normal justify-evenly">
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
