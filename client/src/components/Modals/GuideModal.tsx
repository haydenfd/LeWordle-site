import React from 'react'
import { Dialog } from '@headlessui/react'
import { ModalProps } from '@/types';


export const GuideModal = ({open, onClose}: ModalProps) => {

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
                <div className="text-lg font-normal">How To LeWordle</div>
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

          <div className="mt-4">
            <p>
              This is a sample modal. You can put your content here.
            </p>
          </div>
        </div>
      </div>
    </Dialog>
  )
}
