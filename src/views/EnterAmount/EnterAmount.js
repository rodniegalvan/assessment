import React, { useState } from "react";
import { Input } from "antd";

import "./EnterAmount.css";

//components
import LogoWrapper from "../../components/layout/logo-wrapper/LogoWrapper";
import Button from "../../components/buttons/Button";

//functions
import { maskCardNumber } from "../../utils/maskCardNumber";

//constants
import { users } from "../../constants/Users";

function EnterAmount({ onNext }) {
  const [selectedAccount, setSelectedAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [accountSelected, setAccountSelected] = useState(false);
  const [amountEmpty, setAmountEmpty] = useState(false);

  const handleAmountChange = (e) => {
    let formattedAmount = e.target.value.replace(/[^0-9.]/g, "");
    formattedAmount = formattedAmount.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    setAmount(formattedAmount);
  };

  const handleAccountSelection = (accountValue) => {
    setSelectedAccount(accountValue);
    setAccountSelected(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount.trim() === "") {
      setAmountEmpty(true);
    } else if (!accountSelected) {
      alert("Please select a savings account.");
    } else {
      setAmountEmpty(false);
      onNext();
    }
  };

  return (
    <div className="enter-amount-wrapper">
      <img src="/images/bpi.png" alt="BPI Logo" width="150" />
      <div className="input-wrapper">
        <h2 className="enter-h2">Enter Amount</h2>
        <Input
          className="input-amount"
          prefix={<p>PHP&nbsp;&nbsp;&nbsp;</p>}
          value={amount}
          onChange={handleAmountChange}
          style={{
            width: "100%",
            height: "40px",
            borderColor: amountEmpty ? "red" : "",
          }}
        />
      </div>

      <div className="account-details-wrapper">
        <p className="choose-debit">Choose which BPI account to debit from:</p>
        {/* Use the bankAccounts from const users */}
        {users[0].bankAccounts.map((account, index) => (
          <div key={account.id} className="account-details">
            <label>
              <div className="account-number-wrapper">
                <div className="account-number">
                  {maskCardNumber(account.cardNumber)}
                </div>
                <div className="account-label">{account.type}</div>
              </div>
              <input
                type="radio"
                id={account.id}
                name="selectedAccount"
                value={account.id}
                checked={selectedAccount === account.id}
                onChange={() => handleAccountSelection(account.id)}
              />
            </label>
            <hr />
          </div>
        ))}
      </div>
      <Button label="NEXT" onClick={handleSubmit} className="next-first" />
      <div className="logo-wrapper">
        <img
          className="affinity"
          src="/images/affinity.png"
          alt="Affinity Logo"
        />
      </div>
    </div>
  );
}

export default EnterAmount;
