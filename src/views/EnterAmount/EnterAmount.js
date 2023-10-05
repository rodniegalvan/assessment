import React, { useState } from "react";
import { Input, Form } from "antd";

import "./EnterAmount.css";

//components
import Button from "../../components/buttons/Button";
import DebitRadio from "../../components/debit-account-radio/DebitRadio";

//constants
import { users } from "../../constants/Users";

function EnterAmount({ onNext }) {
  const [form] = Form.useForm(); // Create a form instance
  const [selectedAccount, setSelectedAccount] = useState(
    users[0].bankAccounts[0].id
  );
  const handleAmountChange = (e) => {
    let formattedAmount = e.target.value.replace(/[^0-9.]/g, "");
    formattedAmount = formattedAmount.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    form.setFieldsValue({ amount: formattedAmount }); // Set the formatted amount in the form
  };

  const handleAccountSelection = (accountValue) => {
    setSelectedAccount(accountValue);
    form.setFieldsValue({ selectedAccountGroup: accountValue }); // Set the selected account in the form
  };

  const handleSubmit = (values) => {
    onNext();
  };

  return (
    <div className="enter-amount-wrapper">
      <img src="/images/bpi.png" alt="BPI Logo" width="163" />
      <Form
        className="form-container"
        form={form}
        onFinish={handleSubmit}
        initialValues={{ amount: "", selectedAccount: "" }}
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
            inputmode="numeric"
            pattern="[0-9]*"
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
