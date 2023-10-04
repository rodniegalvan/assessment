import React, { useState, useEffect } from "react";
import "./Confirmation.css";
import LogoWrapper from '../layout/logo-wrapper/LogoWrapper';
import Button from "../buttons/Button";

function Confirmation({ onReturn, isSuccess }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for a few seconds and then show the result
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust the duration as needed

    return () => clearTimeout(loadingTimer);
  }, []);

  return (
    <div className="form-container">
      <div className="confirmation-wrapper">
        {isLoading ? (
          <div className="circle-loader"></div>
        ) : (
          <div className={`circle-loader ${isSuccess ? "load-complete" : ""}`}>
            <div className={`${isSuccess ? "checkmark draw" : ""}`}></div>
          </div>
        )}
        <p className="message">
          {isLoading
            ? "Processing your request..."
            : isSuccess
            ? "Your fund transfer to Affinity is successful"
            : "Fund transfer failed"}
        </p>
        <Button label="RETURN" onClick={onReturn} className="return" />
        <LogoWrapper />
      </div>
    </div>
  );
}

export default Confirmation;
