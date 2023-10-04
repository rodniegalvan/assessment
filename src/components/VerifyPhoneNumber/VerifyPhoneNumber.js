import React from 'react';
import LogoWrapper from '../layout/logo-wrapper/LogoWrapper';
import "./VerifyPhoneNumber.css";
import Button from '../buttons/Button';

function VerifyPhoneNumber({ onProceed, onCancel, onNotYourPhoneNumber }) {
  const phoneNumber = "+63951***2047";

  const handleProceedClick = () => {
    onProceed(phoneNumber);
  };

  return (
    <div className="form-container">
      <div className="verify-wrapper">
        <div className="icon-wrapper">
          <img src='/icons/mobile.svg' alt="Mobile Icon" />  
        </div>
        <p className='text-large'>Verify Phone Number</p>
        <p className='text-medium'>To proceed, a 6-digit code will be sent via SMS</p>
        <div className='number-wrapper'>        
          <p className='text-medium'>Is this your phone number?</p>
          <p className="number">{phoneNumber}</p>
          <a className="text-small" href="http://localhost:3000/" onClick={onNotYourPhoneNumber}>
            Not your phone number?
          </a>
        </div>

        <div className="button-wrapper">
          <Button label="CANCEL" onClick={onCancel} className="prev" />
          <Button label="PROCEED" onClick={handleProceedClick} className="next" />
        </div>
        <LogoWrapper />
      </div>
    </div>
  );
}

export default VerifyPhoneNumber;
