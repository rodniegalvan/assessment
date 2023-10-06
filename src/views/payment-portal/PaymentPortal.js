import React, { useState } from "react";

//components
import EnterAmount from "../EnterAmount/EnterAmount";
import VerifyPhoneNumber from "../VerifyPhoneNumber/VerifyPhoneNumber";
import OTP from "../OTP/OTP";
import Confirmation from "../Confirmation/Confirmation";
import UpdatePhoneNumber from "../update-phone/UpdatePhoneNumber";

//reusable components
import LoadingSpinner from "../../components/spinner/LoadingSpinner";

import "./PaymentPortal.css";

function PaymentPortal() {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // ... (other code)

  const handleNext = async (newPhoneNumber, newStep) => {
    setIsLoading(true);
    try {
      if (newStep) {
        // If a new step is provided, set the step accordingly
        setStep(newStep);
      } else if (step === 1) {
        // Simulate API call or asynchronous operation
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setStep(2);
      } else if (step === 2) {
        // Simulate API call or asynchronous operation
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setPhoneNumber(newPhoneNumber);
        setStep(4); // Skip phone number verification and go to OTP (step 4)
      } else if (step === 3) {
        // Simulate API call or asynchronous operation
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setPhoneNumber(newPhoneNumber);
        setStep(4); // Skip phone number verification and go to OTP (step 4)
      } else if (step === 4) {
        // Simulate API call or asynchronous operation
        setIsSuccess(true); // Set to true for success
        setStep(5);
      }
    } catch (error) {
      console.log(error);
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };
  const handleUpdateNumber = async () => {
    // Simulate API call or asynchronous operation
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStep(3); // Set the step to 3 to navigate to the UpdatePhoneNumber component
  };

  const handleReturn = () => {
    if (step > 1) {
      setIsSuccess(false);
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
            handleUpdateNumber={handleUpdateNumber} // Pass the function here
          />
        )}
        {step === 3 && (
          <UpdatePhoneNumber onConfirm={handleNext} onCancel={handleReturn} />
        )}
        {step === 4 && (
          <OTP
            onNext={handleNext}
            onReturn={handleReturn}
            phoneNumber={phoneNumber}
          />
        )}
        {step === 5 && (
          <Confirmation onReturn={handleReturn} isSuccess={isSuccess} />
        )}
      </div>
    </main>
  );
}

export default PaymentPortal;
