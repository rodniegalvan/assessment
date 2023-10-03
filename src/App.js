import React, { useState } from "react";
import "./App.css";
import EnterAmount from "./components/EnterAmount/EnterAmount";
import VerifyPhoneNumber from "./components/VerifyPhoneNumber/VerifyPhoneNumber";
import OTP from "./components/OTP/OTP";
import Confirmation from "./components/Confirmation/Confirmation";

function App() {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleNext = async (newPhoneNumber) => {
    setIsLoading(true);
    try {
      if (step === 1) {
        // Simulate API call or asynchronous operation
        await new Promise((resolve) => setTimeout(resolve, 100));
        setStep(2);
      } else if (step === 2) {
        // Simulate API call or asynchronous operation
        await new Promise((resolve) => setTimeout(resolve, 100));
        setPhoneNumber(newPhoneNumber);
        setStep(3);
      } else if (step === 3) {
        // Simulate API call or asynchronous operation
        await new Promise((resolve) => setTimeout(resolve, 100));
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
    <div className="App">
      {isLoading ? (
        <div></div>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}

export default App;
