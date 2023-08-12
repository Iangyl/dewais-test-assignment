import { IModalContent, ModalType } from '../ModalProvider.types';

export interface IModalContainer {
  type: ModalType | null;
  isOpen: boolean;
  content: IModalContent | undefined;
  onClose: () => void;
}
