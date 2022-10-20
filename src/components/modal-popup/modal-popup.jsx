import React, { useEffect } from 'react';
import NftButton from '../nft-button/nft-button';
import ModalStyles from './modal-popup.module.scss';

const Modal = (props) => {
  if (!props.show) {
    return null;
  }
  return (
    <div className={ModalStyles.modal} onClick={props.onClose}>
      <div
        className={
          ' xs:w-96 2xs:w-72   bg-black border-2 border-[#0080ff] rounded-3xl flex gap-6 flex-col p-8 '
        }
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={
            ModalStyles.modalHeader + ' h-12 bg-[#0080ff]  rounded-2xl'
          }
        >
          <h4
            className={
              ModalStyles.modalTitle +
              ' text-white text-center font-ethnocentric   '
            }
          >
            Connect Via
          </h4>
        </div>
        <div className="flex flex-col  gap-4  xs:w-64 2xs:w-52 mx-auto ">
          {props.children}
        </div>
        <div className="flex justify-center">
          <div
            className={ModalStyles.ModalFooter + ' w-40 pb-2'}
            onClick={props.onClose}
          >
            <NftButton className="text-white" text="CLOSE" bgcolor="violet" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
