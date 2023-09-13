import React, { useState } from "react";
import "./App.css";
import EnterAmount from "./components/EnterAmount/EnterAmount";
import VerifyPhoneNumber from "./components/VerifyPhoneNumber/VerifyPhoneNumber";
import OTP from "./components/OTP/OTP";
import Confirmation from "./components/Confirmation/Confirmation";

function App() {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleNext = (newPhoneNumber) => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setPhoneNumber(newPhoneNumber);
      setStep(3);
    } else if (step === 3) {
      setStep(4);
    }
  };

  const handleReturn = () => {
    if (step > 1) {
      setStep(1);
    }
  };
  return (
    <div className="App">
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
        {step === 4 && <Confirmation onReturn={handleReturn} />}
      </div>

  );
}

export default App;
