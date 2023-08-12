import React from 'react';
import CloseIcon from 'assets/icons/Close';
import Button from '../../Search/Button/Button';

import styles from './ModalError.module.sass';
import { IModalContent } from '../ModalProvider.types';

const ModalError = ({
  content,
  onClose,
}: {
  content: IModalContent | undefined;
  onClose: () => void;
}) => {
  return (
    <div className={styles.modal}>
      <div className={styles.topContainer}>
        <div className={styles.top}>
          <Button type="button" onClick={onClose}>
            <CloseIcon
              width={18}
              height={18}
              onClick={onClose}
              color="#FFFFFF"
            />
          </Button>
        </div>
        <h2 className={styles.errorTitle}>Error</h2>
      </div>
      <div className={styles.content}>{content?.error}</div>
    </div>
  );
};

export default ModalError;
