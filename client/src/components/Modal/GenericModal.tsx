import React, { ReactNode, useEffect } from 'react';
import { ModalProps } from '@/types';

export const GenericModal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
    
  const closeModalOnOutsideClick = (event: MouseEvent) => {
    const modalContainer = document.querySelector('.modal-container');
    if (modalContainer && !modalContainer.contains(event.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', closeModalOnOutsideClick);
    } else {
      document.removeEventListener('mousedown', closeModalOnOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', closeModalOnOutsideClick);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-800 opacity-40"></div>
      <div className="z-10 bg-white rounded-lg min-w-[50vw] min-h-[30vh] modal-container relative top-[-8rem] flex flex-col">
        <div className='w-full bg-lakerPurple text-white font-semibold text-center py-2 text-2xl'>
          {title}
        </div>
        <button className="absolute top-3 right-2 text-white hover:scale-125 hover:text-lakerGold" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};

