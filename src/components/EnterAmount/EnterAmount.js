import React, { useState } from "react";
import { Input } from "antd";
import {maskCardNumber} from '../../utils/maskCardNumber';
import "./EnterAmount.css";

function EnterAmount({ onNext }) {
  const savingsAccounts = [
    { value: "savings1", accountNumber: "1234 1234 1234 1234", label: "Savings Account" },
    { value: "savings2", accountNumber: "5678 5678 5678 5678", label: "Savings Account" },
  ];

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
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="enter-amount-wrapper">
        <img src="/images/bpi.png" alt="BPI Logo" width="100" />
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
        {amountEmpty && (
          <p className="error-message">Amount cannot be empty.</p>
        )}
        <p className="choose-debit">Choose what BPI account to debit from:</p>
        <div className="account-details-wrapper">
          {savingsAccounts.map((account, index) => (
            <div key={account.value} className="account-details">
              <label>
                <div className="account-number-wrapper">
                  <div className="account-number">
                    {maskCardNumber(account.accountNumber)}
                  </div>
                  <div className="account-label">{account.label}</div>
                </div>
                <input
                  type="radio"
                  id={account.value}
                  name="selectedAccount"
                  value={account.value}
                  checked={selectedAccount === account.value}
                  onChange={() => handleAccountSelection(account.value)}
                />
              </label>
              <hr />
            </div>
          ))}
        </div>
        <button className="next" type="submit">NEXT</button>
        <div className="logo-wrapper">
          <img src="/images/affinity.png" alt="Affinity Logo" width="100" />
        </div>
      </div>
    </form>
  );
}

export default EnterAmount;
