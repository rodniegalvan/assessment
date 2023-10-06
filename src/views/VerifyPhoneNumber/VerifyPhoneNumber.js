import React from "react";
import "./VerifyPhoneNumber.css";

//components
import LogoWrapper from "../../components/layout/logo-wrapper/LogoWrapper";
import Button from "../../components/buttons/Button";
import LinkButton from "../../components/buttons/link-buttons/LinkButton";
import IconWithHeader from "../../components/icons/icons-header/IconsHeader";

function VerifyPhoneNumber({ onProceed, onCancel, handleUpdateNumber }) {
  const phoneNumber = "+63951***2047";

  const handleProceedClick = () => {
    onProceed(phoneNumber);
  };

  return (
    <div className="verify-wrapper">
      <IconWithHeader
        iconSrc="/icons/mobile.svg"
        headerText="Verify Phone Number"
      />
      <p className="text-medium">
        To proceed, a 6-digit code will be sent via SMS
      </p>
      <div className="number-wrapper">
        <p className="text-medium">Is this your phone number?</p>
        <p className="number">{phoneNumber}</p>
        <p className="text-small">
          <LinkButton
            onClick={handleUpdateNumber}
            label="Not you phone number"
          />
        </p>
      </div>
      <div className="button-wrapper">
        <Button label="CANCEL" onClick={onCancel} className="prev" />
        <Button label="PROCEED" onClick={handleProceedClick} className="next" />
      </div>
      <LogoWrapper />
    </div>
  );
}

export default VerifyPhoneNumber;
