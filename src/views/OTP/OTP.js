import React, { useState } from "react";
import "./OTP.css";

//components
import LogoWrapper from "../../components/layout/logo-wrapper/LogoWrapper";
import Button from "../../components/buttons/Button";

//utils
import { handleOtpInputChange } from "../../utils/handleOtpChangeInput";

function OTP({ onCancel, onNext, phoneNumber, onResendOTP }) {
  const [otpError, setOtpError] = useState(false);

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleOtpSubmit = () => {
    const enteredOtp = otp.join("");
    if (enteredOtp.length === 6) {
      setOtpError(false);
      onNext();
    } else {
      setOtpError(true);
    }
  };

  return (
    <div className="otp-wrapper">
      <div className="icon-wrapper">
        <img src="/icons/otp.svg" alt="OTP Icon" />
      </div>
      <p className="text-large">One Time Pin</p>
      <p className="text-medium">
        Enter the 6-digit code from the SMS we sent to
      </p>
      <p className="number">{phoneNumber}</p>
      <div className="otp-input-container">
        {Array.from({ length: 6 }, (_, index) => (
          <input
            key={index}
            id={`otp-input-${index}`}
            type="numbers"
            maxLength="1"
            value={otp[index] || ""}
            onChange={(e) => handleOtpInputChange(e, index, otp, setOtp)}
          />
        ))}
      </div>

      {otpError && (
        <p className="error-message">Incorrect OTP. Please try again.</p>
      )}
      <p className="text-small">
        Didn't receive the code?{" "}
        <a
          className="text-small"
          href="http://localhost:3000/"
          onClick={onResendOTP}
        >
          Resend
        </a>
      </p>
      <div className="button-wrapper">
        <Button label="CANCEL" onClick={onCancel} className="prev" />
        <Button label="PROCEED" onClick={handleOtpSubmit} className="next" />
      </div>
      <LogoWrapper />
    </div>
  );
}

export default OTP;
