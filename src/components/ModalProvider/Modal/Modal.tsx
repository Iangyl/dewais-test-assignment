import React from 'react';
import CloseIcon from 'assets/icons/Close';
import Button from 'components/Search/Button/Button';

import styles from './Modal.module.sass';
import { IModalContent, ModalType } from '../ModalProvider.types';

const Modal = ({
  type,
  content,
  onClose,
}: {
  type: ModalType | null;
  content: IModalContent | undefined;
  onClose: () => void;
}) => {
  return (
    <div className={`${styles.modal} ${styles[type!]}`}>
      <div className={styles.top}>
        <Button type="button" onClick={onClose}>
          {type === 'error' ? (
            <CloseIcon
              width={18}
              height={18}
              onClick={onClose}
              color="#FFFFFF"
            />
          ) : (
            <CloseIcon width={18} height={18} onClick={onClose} />
          )}
        </Button>
      </div>
      {content && <h2 className={styles.errorTitle}>{content?.userData?.name}</h2>}
      <div className={styles.content}></div>
    </div>
  );
};

export default Modal;
