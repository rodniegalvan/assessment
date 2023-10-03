import React, { useState, useEffect } from "react";
import "./Confirmation.css";

function Confirmation({ onReturn, isSuccess }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for a few seconds and then show the result
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the duration as needed

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
        <button className="next" onClick={onReturn}>
          RETURN
        </button>
        <div className="logo-wrapper">
          <img src="/images/bpi.png" alt="BPI Logo" width="100" />
          <img src="/images/affinity.png" alt="Affinity Logo" width="100" />
        </div>
      </div>
    </div>
  );
}

export default Confirmation;
