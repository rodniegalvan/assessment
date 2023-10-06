import React from "react";
import { Select, Form } from "antd";
import { years, months, days } from "../../../constants/Dates";
import "./SelectBirthdate.css";

function SelectBirthdate() {
  const { Option } = Select;

  return (
    <div className="birthdate-wrapper">
      <Form.Item
        name="birthYear"
        rules={[
          {
            required: true,
            message: "Please select a year",
          },
        ]}
      >
        <Select showSearch placeholder="YYYY">
          {years.map((year) => (
            <Option key={year.value} value={year.value}>
              {year.label}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        name="birthMonth"
        rules={[
          {
            required: true,
            message: "Please select a month",
          },
        ]}
      >
        <Select showSearch placeholder="MM">
          {months.map((month) => (
            <Option key={month.value} value={month.value}>
              {month.label}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        name="birthDay"
        rules={[
          {
            required: true,
            message: "Please select a day",
          },
        ]}
      >
        <Select showSearch placeholder="DD">
          {days.map((day) => (
            <Option key={day.value} value={day.value}>
              {day.label}
            </Option>
          ))}
        </Select>
      </Form.Item>
    </div>
  );
}

export default SelectBirthdate;
