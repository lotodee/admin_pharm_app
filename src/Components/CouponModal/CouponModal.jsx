/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// Modal.js

import React, { useState, useEffect } from 'react';
import BoxAndIcon from '../BoxAndIconComponent/BoxAndIcon';
import CommonInputComponent from '../CommonInputComponent/CommonInputComponent';
import './module.couponModal.css';
import deleteIcon from "../../assets/images/deleteIcon.svg";
import copy from "../../assets/images/copy.svg";
import copied from "../../assets/images/copied.svg";

const Modal = ({ show, onClose, children, cancel, handleSave, showsave }) => {
  const [buttonText, setButtonText] = useState("Copy coupon");
  const [copyImg ,setCopyImage] = useState(copy)
  
const [couponCode,setCouponcode] = useState("MEDGLECO201")
  



  const handleCopyCoupon = () => {
    if (couponCode) {
    
      navigator.clipboard.writeText(couponCode).then(() => {
    
        setButtonText("Code copied");
      setCopyImage(copied)
        setTimeout(() => {setButtonText("Copy coupon"), setCopyImage(copy)}, 2000);
      }).catch(err => {
        console.error("Failed to copy: ", err); 
      });
    }
  };

  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {!showsave ? (
          <>
            <div className="modal-forms">
              <CommonInputComponent small={true} labelText="Name of organization" width="904px" height="56px" />
              <CommonInputComponent small={true} labelText="Organization mail" width="904px" height="56px" />
              <CommonInputComponent small={true} labelText="Proposed number of staffs" width="904px" height="56px" />
              <CommonInputComponent small={true} labelText="Coupon percentage" width="904px" height="56px" />
              <CommonInputComponent small={true} labelText="Usage duration" width="904px" height="56px" />
            </div>
            <div className="modal-buttons">
              <BoxAndIcon
                text="Save"
                border=".5px solid #000040"
                className="filter-box"
                bgColor="#000040"
                flexDirection="row-reverse"
                padding="10px 40px"
                color="white"
                onClick={handleSave}
              />
              <BoxAndIcon
                icon={deleteIcon}
                text="Cancel"
                bgColor="red"
                flexDirection="row-reverse"
                color="white"
                border="none"
                className="filter-box"
                onClick={cancel}
              />
            </div>
          </>
        ) : (
          <div className="save-modal">
            <div className="information-top">The 5% Coupon code generated for Company xyz to be used twice a month is</div>
            <p className="couponcode">{couponCode}</p>
            <div className="modal-buttons">
              <BoxAndIcon
                text={buttonText}
                border=".5px solid #000040"
                className="filter-box"
                bgColor="#000040"
                flexDirection="row-reverse"
                padding="10px 40px"
                color="white"
                icon={copyImg}
                onClick={handleCopyCoupon}
              />
              <BoxAndIcon
                icon={deleteIcon}
                text="Close"
                bgColor="red"
                flexDirection="row-reverse"
                color="white"
                border="none"
                className="filter-box"
                onClick={cancel}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
