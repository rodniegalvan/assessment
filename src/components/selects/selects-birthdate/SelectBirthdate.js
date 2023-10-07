import React, { useEffect, useRef } from "react";
import { Select, Form } from "antd";
import { years, months, days } from "../../../constants/Dates";
import "./SelectBirthdate.css";

function SelectBirthdate() {
  const { Option } = Select;

  const yearRef = useRef(null);
  const monthRef = useRef(null);
  const dayRef = useRef(null);

  useEffect(() => {
    if (yearRef.current) {
      yearRef.current.focus();
    }
  }, []);

  const handleYearSelect = () => {
    if (monthRef.current) {
      monthRef.current.focus();
    }
  };

  const handleMonthSelect = () => {
    if (dayRef.current) {
      dayRef.current.focus();
    }
  };

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
        <Select
          showSearch
          placeholder="YYYY"
          onChange={handleYearSelect}
          ref={yearRef}
        >
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
        <Select
          ref={monthRef}
          showSearch
          placeholder="MM"
          onChange={handleMonthSelect}
        >
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
        <Select ref={dayRef} showSearch placeholder="DD">
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
