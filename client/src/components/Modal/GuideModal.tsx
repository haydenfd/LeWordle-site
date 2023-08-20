// Modal.tsx

import React, { useState, useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
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
      <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
      <div className="z-10 bg-white rounded-lg w-96 h-96 modal-container relative bottom-1/5 flex flex-col">
        <div className='w-full bg-lakerPurple text-white font-semibold text-center py-2 text-2xl'>
          LeWordle Guide
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
        <h1>HAYDEN</h1>
      </div>
    </div>
  );
};

