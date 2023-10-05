import React, { useState } from "react";

//components
import EnterAmount from "../EnterAmount/EnterAmount";
import VerifyPhoneNumber from "../VerifyPhoneNumber/VerifyPhoneNumber";
import OTP from "../OTP/OTP";
import Confirmation from "../Confirmation/Confirmation";

//reusable components
import LoadingSpinner from "../../components/spinner/LoadingSpinner";

import "./PaymentPortal.css";

function PaymentPortal() {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleNext = async (newPhoneNumber) => {
    setIsLoading(true);
    try {
      if (step === 1) {
        // Simulate API call or asynchronous operation
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setStep(2);
      } else if (step === 2) {
        // Simulate API call or asynchronous operation
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setPhoneNumber(newPhoneNumber);
        setStep(3);
      } else if (step === 3) {
        // Simulate API call or asynchronous operation
        setIsSuccess(true); // Set to true for success
        setStep(4);
      }
    } catch (error) {
      setIsSuccess(false); // Set to false for failure
    } finally {
      setIsLoading(false);
    }
  };

  const handleReturn = () => {
    if (step > 1) {
      setIsSuccess(false); // Reset success state on return
      setStep(1);
    }
  };

  return (
    <main>
      {isLoading && <LoadingSpinner />}
      <div className="payment-form">
        {step === 1 && <EnterAmount onNext={handleNext} />}
        {step === 2 && (
          <VerifyPhoneNumber
            onProceed={handleNext}
            onCancel={handleReturn}
            onNotYourPhoneNumber={handleReturn}
          />
        )}
        {step === 3 && (
          <OTP
            onNext={handleNext}
            onCancel={handleReturn}
            phoneNumber={phoneNumber}
          />
        )}
        {step === 4 && (
          <Confirmation onReturn={handleReturn} isSuccess={isSuccess} />
        )}
      </div>
    </main>
  );
}

export default PaymentPortal;
