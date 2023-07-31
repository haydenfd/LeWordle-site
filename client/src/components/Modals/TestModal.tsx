import React, { useState } from 'react';
import { Dialog, Tab } from '@headlessui/react';

export const TestModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'west' | 'east'>('west');

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto p-4">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={handleOpenModal}
      >
        Open Modal
      </button>
      <Dialog open={isModalOpen} onClose={handleCloseModal} className="fixed top-1/4 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

          <div className="z-50 inline-block align-middle bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <Tab.Group>
                <Tab.List className="flex mx-auto gap-6 my-4 w-full justify-center">
                  <Tab>
                    {({ selected }) => (
                      <button
                        className={`px-8 py-2 rounded-3xl ${
                          selected ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                        }`}
                        onClick={() => setActiveTab('west')}
                      >
                        West
                      </button>
                    )}
                  </Tab>
                  <Tab>
                    {({ selected }) => (
                      <button
                        className={`px-8 py-2 rounded-3xl ${
                          selected ? 'bg-blue-500 text-white shadow-none' : 'bg-gray-200 text-gray-800'
                        }`}
                        onClick={() => setActiveTab('east')}
                      >
                        East
                      </button>
                    )}
                  </Tab>
                </Tab.List>

                <Tab.Panels>
                  <Tab.Panel>
                    <div className="space-y-4">
                      <Tab.Group>
                        <Tab.List className="flex space-x-4">
                          <Tab>
                            {({ selected }) => (
                              <button
                                className={`px-4 py-2 rounded ${
                                  selected ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                                }`}
                              >
                                Pacific
                              </button>
                            )}
                          </Tab>
                          <Tab>
                            {({ selected }) => (
                              <button
                                className={`px-4 py-2 rounded ${
                                  selected ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                                }`}
                              >
                                Northwest
                              </button>
                            )}
                          </Tab>
                          <Tab>
                            {({ selected }) => (
                              <button
                                className={`px-4 py-2 rounded ${
                                  selected ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                                }`}
                              >
                                Southwest
                              </button>
                            )}
                          </Tab>
                        </Tab.List>

                        <Tab.Panels>
                          <Tab.Panel>
                            <div className="flex gap-4 flex-wrap font-semibold">
                              <p>Phoenix Suns</p>
                              <p>Los Angeles Lakers</p>
                              <p>Los Angeles Clippers</p>
                              <p>Golden State Warriors</p>
                              <p>Sacramento Kings</p>
                            </div>
                          </Tab.Panel>
                          <Tab.Panel>
                            <div className="space-y-4">
                              {/* Add your NBA teams for the Northwest division here */}
                            </div>
                          </Tab.Panel>
                          <Tab.Panel>
                            <div className="space-y-4">
                              {/* Add your NBA teams for the Southwest division here */}
                            </div>
                          </Tab.Panel>
                        </Tab.Panels>
                      </Tab.Group>
                    </div>
                  </Tab.Panel>
                  <Tab.Panel>
                    <div className="space-y-4">
                      <Tab.Group>
                        <Tab.List className="flex space-x-4">
                          <Tab>
                            {({ selected }) => (
                              <button
                                className={`px-4 py-2 rounded ${
                                  selected ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                                }`}
                              >
                                Atlantic
                              </button>
                            )}
                          </Tab>
                          <Tab>
                            {({ selected }) => (
                              <button
                                className={`px-4 py-2 rounded ${
                                  selected ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                                }`}
                              >
                                Central
                              </button>
                            )}
                          </Tab>
                          <Tab>
                            {({ selected }) => (
                              <button
                                className={`px-4 py-2 rounded ${
                                  selected ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                                }`}
                              >
                                Southeast
                              </button>
                            )}
                          </Tab>
                        </Tab.List>

                        <Tab.Panels>
                          <Tab.Panel>
                            <div className="space-y-4">
                              {/* Add your NBA teams for the Atlantic division here */}
                            </div>
                          </Tab.Panel>
                          <Tab.Panel>
                            <div className="space-y-4">
                              {/* Add your NBA teams for the Central division here */}
                            </div>
                          </Tab.Panel>
                          <Tab.Panel>
                            <div className="space-y-4">
                              {/* Add your NBA teams for the Southeast division here */}
                            </div>
                          </Tab.Panel>
                        </Tab.Panels>
                      </Tab.Group>
                    </div>
                  </Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

