import React from "react";
import "./UpdatePhoneNumber.css";
import { Input, Select } from "antd";
//components
import LogoWrapper from "../../components/layout/logo-wrapper/LogoWrapper";
import Button from "../../components/buttons/Button";
import SelectBirthdate from "../../components/selects/selects-birthdate/SelectBirthdate";
import IconWithHeader from "../../components/icons/icons-header/IconsHeader";

//constants
function UpdatePhoneNumber({ onConfirm, onCancel }) {
  const phoneNumber = "+63951***2047";
  const handleProceedClick = () => {
    onConfirm(phoneNumber);
  };

  const { Option } = Select;
  const selectBefore = (
    <Select defaultValue="+63">
      <Option value="+63">+63</Option>
      <Option value="+62">+62</Option>
    </Select>
  );
  return (
    <div className="update-wrapper">
      <IconWithHeader
        iconSrc="/icons/update-number.svg"
        headerText="Update Mobile Number"
      />
      <div className="fill-details-wrapper">
        <p className="text-medium center">Fill in the details</p>
        <div className="birthdate">
          <p className="text-small">Birthdate</p>
          <SelectBirthdate />
        </div>
        <div className="number">
          <p className="text-small">New Mobile Number</p>
          <Input
            addonBefore={selectBefore}
            placeholder="Ex. 9170000000"
            className="input-mobile-number"
          />
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
        <Button label="CONFIRM" onClick={handleProceedClick} className="next" />
      </div>
      <LogoWrapper />
    </div>
  );
}

export default UpdatePhoneNumber;
