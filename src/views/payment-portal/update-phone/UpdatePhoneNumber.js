import React, { useRef } from "react";
import "./UpdatePhoneNumber.css";
import { Input, Form } from "antd";

//components
import LogoWrapper from "../../../components/layout/logo-wrapper/LogoWrapper";
import SelectBirthdate from "../../../components/selects/selects-birthdate/SelectBirthdate";
import IconWithHeader from "../../../components/icons/icons-header/IconsHeader";
import Button from "../../../components/buttons/Button";

function UpdatePhoneNumber({
  onConfirm,
  onCancel,
  phoneNumber,
  selectedAccount,
}) {
  const [form] = Form.useForm();
  const mobileNumberInputRef = useRef(null);

  const handleProceedClick = async () => {
    try {
      const values = await form.validateFields();
      const { mobileNumber } = values;

      if (
        mobileNumber &&
        mobileNumber[0] === "9" &&
        /^\d{10}$/.test(mobileNumber)
      ) {
        const formattedMobileNumber = "+63" + mobileNumber;
        onConfirm(formattedMobileNumber, selectedAccount, 4);
      } else {
        form.setFields([
          {
            name: "mobileNumber",
            errors: ["Please enter a valid mobile number"],
          },
        ]);
      }
    } catch (errorInfo) {
      console.log("Validation failed:", errorInfo);
    }
  };
  const handleMobileChange = (e) => {
    let formattedAmount = e.target.value.replace(/[^0-9.]/g, "");
    form.setFieldsValue({ mobileNumber: formattedAmount });
  };
  const handleMobileInputKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      mobileNumberInputRef.current.blur();
      handleProceedClick();
    }
  };
  return (
    <div className="update-wrapper">
      <IconWithHeader
        iconSrc="/icons/mobile-number.svg"
        headerText="Update Mobile Number"
      />
      <Form
        className="update-mobile-number-form"
        form={form}
        onFinish={handleProceedClick}
      >
        <div className="fill-details-wrapper">
          <p className="text-medium center">Fill in the details</p>
          <div className="birthdate">
            <p className="text-small">Birthdate</p>
            <SelectBirthdate form={form} />
          </div>
          <div className="enter-mobile-number">
            <p className="text-small">New Mobile Number</p>
            <Form.Item
              name="mobileNumber"
              rules={[
                {
                  required: true,
                  message: "Please enter your new mobile number",
                },
              ]}
            >
              <Input
                prefix="+63"
                placeholder="Ex. 9170000000"
                className="input-mobile-number"
                inputMode="numeric"
                maxLength={10}
                onChange={handleMobileChange}
                onKeyPress={handleMobileInputKeyPress}
                ref={mobileNumberInputRef}
              />
            </Form.Item>
          </div>
        </div>
        <div className="security-warning">
          <p className="text-xs">
            Your new mobile number will be used to receive the One-Time PIN
            sensitive transactions
          </p>
        </div>
        <div className="button-wrapper">
          <Button label="CANCEL" onClick={onCancel} className="prev" />
          <Button type="submit" label="CONFIRM" className="next" />
        </div>
      </Form>
      <LogoWrapper />
    </div>
  );
}

export default UpdatePhoneNumber;
