interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children?: ReactNode;
    title: string;
  }
  
export type { ModalProps }