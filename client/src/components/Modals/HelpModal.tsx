import { Dialog } from '@headlessui/react'

interface FullName {

    open: boolean
    onClose: () => void
}

export const MyDialog = ({ open, onClose }: FullName) =>
{
    if (!open) {
        return null; 
      }

  return (
    <Dialog open={open} onClose={onClose} className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex items-center justify-center bg-white p-5 text-black">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

        <div className="">
            HAYDEN
          <button onClick={onClose}>Close Modal</button>
        </div>
      </div>
    </Dialog>
  )
}