import React, { useState } from "react";
import "./OTP.css";
import { BsFillShieldLockFill } from "react-icons/bs";

function OTP({ onCancel, onNext, phoneNumber, onResendOTP }) {
  const [otpError, setOtpError] = useState(false);

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleOtpSubmit = () => {
    const enteredOtp = otp.join("");
    if (enteredOtp === "123456") {
      setOtpError(false);
      onNext();
    } else {
      setOtpError(true);
    }
  };

  function handleOtpInputChange(e, index) {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);

    if (index < 5 && e.target.value !== "") {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  }

  return (
    <div className="form-container">
      <div className="otp-wrapper">
        <div className="icon-wrapper">
          <BsFillShieldLockFill className="otp-icon" />
        </div>
        <h2>One Time Pin</h2>
        <p>Enter the 6-digit code from the SMS we sent to</p>
        <p className="number">{phoneNumber}</p>
        <div className="otp-input-container">
          {Array.from({ length: 6 }, (_, index) => (
            <input
              key={index}
              id={`otp-input-${index}`}
              type="text"
              maxLength="1"
              value={otp[index] || ""}
              onChange={(e) => handleOtpInputChange(e, index)}
            />
          ))}
        </div>

        {otpError && (
          <p className="error-message">Incorrect OTP. Please try again.</p>
        )}
        <p className="small-font">
          Didn't receive the code?{" "}
          <a href="http://localhost:3000/" onClick={onResendOTP}>
            Resend
          </a>
        </p>
        <div className="button-wrapper">
          <button className="prev" onClick={onCancel}>
            CANCEL
          </button>
          <button className="next" onClick={handleOtpSubmit}>
            SUBMIT
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

export default OTP;
