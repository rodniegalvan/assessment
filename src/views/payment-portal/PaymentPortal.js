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
  const [step, setStep] = useState(3);
  const [selectedAccount, setSelectedAccount] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleNext = async (newPhoneNumber, newSelectedAccount, newStep) => {
    setIsLoading(true);
    try {
      if (newStep) {
        // If a new step is provided, set the step accordingly
        if (newStep === 5) {
          setIsSuccess(true);
          setStep(newStep);
        } else if (newStep === 3) {
          setStep(newStep);
        } else {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          setSelectedAccount(newSelectedAccount);
          setPhoneNumber(newPhoneNumber);
          setStep(newStep);
        }
      }
    } catch (error) {
      console.log(error);
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
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
        {step === 1 && (
          <EnterAmount
            onNext={handleNext}
            loggedInUserId={1}
            selectedAccount={selectedAccount}
            phoneNumber={phoneNumber}
          />
        )}
        {step === 2 && (
          <VerifyPhoneNumber
            onProceed={handleNext}
            onCancel={handleReturn}
            selectedAccount={selectedAccount}
            phoneNumber={phoneNumber}
          />
        )}
        {step === 3 && (
          <UpdatePhoneNumber
            onConfirm={handleNext}
            onCancel={handleReturn}
            selectedAccount={selectedAccount}
            phoneNumber={phoneNumber}
          />
        )}
        {step === 4 && (
          <OTP
            onNext={handleNext}
            onCancel={handleReturn}
            phoneNumber={phoneNumber}
            selectedAccount={selectedAccount} // Pass selected account
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
