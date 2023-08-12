import { IUserData } from 'interfaces/IUserData';

export type ModalType = 'loading' | 'modal' | 'error';
export interface IModalContext {
  openModal: (args: IOpenOptions) => void;
  closeModal: () => void;
}

export interface IModalContent {
  userData?: IUserData;
  error?: string;
}

export interface IOpenOptions {
  type: ModalType;
  content?: IModalContent;
}
