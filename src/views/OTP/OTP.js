import React, { useState, useEffect } from "react";
import "./OTP.css";

//components
import LogoWrapper from "../../components/layout/logo-wrapper/LogoWrapper";
import Button from "../../components/buttons/Button";
import LinkButton from "../../components/buttons/link-buttons/LinkButton";
import IconWithHeader from "../../components/icons/icons-header/IconsHeader";
//utils
import {
  handleOtpInputChange,
  handleOtpInputKeyDown,
} from "../../utils/handleOtpChangeInput";
import { maskMobileNumber } from "../../utils/maskCardNumber";

function OTP({ onCancel, onNext, phoneNumber, selectedAccount, onResendOTP }) {
  const [otpError, setOtpError] = useState(false);

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [resendTimeout, setResendTimeout] = useState(0);

  useEffect(() => {
    let countdown = null;

    if (resendTimeout > 0) {
      countdown = setInterval(() => {
        setResendTimeout((prevTimeout) => prevTimeout - 1);
      }, 1000);
    }

    return () => {
      if (countdown !== null) {
        clearInterval(countdown);
      }
    };
  }, [resendTimeout]);
  const handleOtpSubmit = () => {
    const enteredOtp = otp.join("");
    if (enteredOtp.length === 6) {
      setOtpError(false);
      onNext(phoneNumber, selectedAccount, 5);
    } else {
      setOtpError(true);
    }
  };
  const handleResendClick = () => {
    // You can replace this with your actual logic
    console.log("Resending OTP...");

    // Set the countdown timer
    setResendTimeout(10);
  };
  const handleEnterKeyPress = (e) => {
    if (e.key === "Enter") {
      handleOtpSubmit();
    }
  };
  return (
    <div className="otp-wrapper">
      <IconWithHeader iconSrc="/icons/otp.svg" headerText="One Time Pin" />
      <p className="text-medium">
        Enter the 6-digit code from the SMS we sent to
      </p>
      <p className="number">{maskMobileNumber(phoneNumber)}</p>
      <div className="otp-input-container">
        {Array.from({ length: 6 }, (_, index) => (
          <input
            key={index}
            id={`otp-input-${index}`}
            inputMode="numeric"
            maxLength="1"
            value={otp[index] || ""}
            onChange={(e) => handleOtpInputChange(e, index, otp, setOtp)}
            onKeyDown={(e) => handleOtpInputKeyDown(e, index, otp)}
            onKeyUp={handleEnterKeyPress}
          />
        ))}
      </div>

      {otpError && (
        <p className="error-message">Incorrect OTP. Please try again.</p>
      )}
      <p className="text-small">
        {resendTimeout === 0 ? (
          <span>
            Didn't receive the code?{" "}
            <LinkButton onClick={handleResendClick} label="Resend" />
          </span>
        ) : (
          <span>
            <span className="resend">Resend</span> code in {resendTimeout}{" "}
            seconds
          </span>
        )}
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
