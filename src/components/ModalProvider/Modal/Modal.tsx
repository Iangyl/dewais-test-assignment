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
      <h1 className={styles.errorTitle}>{content?.userData?.login}</h1>
      <div className={styles.content}>
        <img src={content?.userData?.avatar_url} alt="user_avatar" />
        <h3>{content?.userData?.name}</h3>
        <p>{content?.userData?.bio}</p>
        <p>
          <a
            href={content?.userData?.html_url}
            target="_blank"
            rel="noreferrer"
          >
            {content?.userData?.html_url}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Modal;
