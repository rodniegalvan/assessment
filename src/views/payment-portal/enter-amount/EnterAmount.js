import React, { useState, useEffect } from "react";
import { Input, Form } from "antd";

import "./EnterAmount.css";

//components
import Button from "../../../components/buttons/Button";
import DebitRadio from "../../../components/debit-account-radio/DebitRadio";

//constants
import { users } from "../../../constants/Users";

function EnterAmount({ onNext, loggedInUserId }) {
  const [form] = Form.useForm();
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    // Find the currently logged-in user based on loggedInUserId
    const loggedInUser = users.find((user) => user.id === loggedInUserId);

    // If the logged-in user is found, set the default selectedAccountId
    if (loggedInUser) {
      setSelectedAccount(loggedInUser.bankAccounts[0]?.id || null);

      // Get the phone number of the selected bank account
      const selectedBankAccount = loggedInUser.bankAccounts.find(
        (account) => account.id === loggedInUser.bankAccounts[0]?.id
      );

      // Set the initial phone number
      const initialPhoneNumber = selectedBankAccount?.phoneNumber || "";
      setPhoneNumber(initialPhoneNumber);
    }
  }, [loggedInUserId]);

  const handleAmountChange = (e) => {
    let formattedAmount = e.target.value.replace(/[^0-9.]/g, "");
    formattedAmount = formattedAmount.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    form.setFieldsValue({ amount: formattedAmount });
  };

  const handleSubmit = (values) => {
    onNext(phoneNumber, selectedAccount, 2);
  };

  const handleAccountSelection = (accountValue) => {
    setSelectedAccount(accountValue);
    const selectedBankAccount = users
      .find((user) => user.id === loggedInUserId)
      .bankAccounts.find((account) => account.id === accountValue);
    const newPhoneNumber = selectedBankAccount?.phoneNumber || "";
    setPhoneNumber(newPhoneNumber); // Set the phone number
    form.setFieldsValue({ selectedAccount: accountValue });
  };
  return (
    <div className="enter-amount-wrapper">
      <img src="/images/bpi.png" alt="BPI Logo" width="163" />
      <Form
        className="form-container"
        form={form}
        onFinish={handleSubmit}
        initialValues={{ amount: "", selectedAccount: selectedAccount }}
      >
        <p className="text-large">Enter Amount</p>
        <Form.Item
          className="input-amount-form"
          name="amount"
          rules={[
            {
              required: true,
              message: "Please enter an amount.",
            },
          ]}
        >
          <Input
            inputMode="numeric"
            className="input-amount"
            prefix={<p>PHP&nbsp;&nbsp;&nbsp;</p>}
            onChange={handleAmountChange}
            style={{
              width: "100%",
              height: "40px",
            }}
          />
        </Form.Item>

        <div className="account-details-wrapper">
          <p className="choose-debit">
            Choose which BPI account to debit from:
          </p>
          <Form.Item className="card-item" name="account">
            <DebitRadio
              users={users}
              selectedAccount={selectedAccount}
              onAccountChange={handleAccountSelection}
              loggedInUserId={loggedInUserId}
            />
          </Form.Item>
        </div>
        <Button label="NEXT" type="submit" className="next" />
      </Form>
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
