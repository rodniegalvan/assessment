import React from "react";
import { MobileOutlined } from "@ant-design/icons";
import "./VerifyPhoneNumber.css";

function VerifyPhoneNumber({ onProceed, onCancel, onNotYourPhoneNumber }) {
  const phoneNumber = "+639517042047";

  const handleProceedClick = () => {
    onProceed(phoneNumber);
  };

  return (
    <div className="form-container">
      <div className="verify-wrapper">
        {" "}
        <div className="icon-wrapper">
          <MobileOutlined style={{ fontSize: "50px", color: "white" }} />
        </div>
        <h2>Verify Phone Number</h2>
        <p>To proceed, a 6-digit code will be sent via SMS</p>
        <p>Is this your phone number?</p>
        <p className="number">{phoneNumber}</p>
        <a href="http://localhost:3000/" onClick={onNotYourPhoneNumber}>
          Not your phone number?
        </a>
        <div className="button-wrapper">
          <button className="prev" onClick={onCancel}>
            Cancel
          </button>
          <button className="next" onClick={handleProceedClick}>
            Proceed
          </button>
        </div>
        <div className="logo-wrapper">
          <img src="/images/bpi.png" alt="BPI Logo" width="100" />
          <img src="/images/affinity.png" alt="Affinity Logo" width="100" />
        </div>
      </div>
    </div>
  );
}

export default VerifyPhoneNumber;
