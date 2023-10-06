import React from "react";
import { Select } from "antd";
import "./SelectBirthdate.css";
//constants
import { years, months, days } from "../../../constants/Dates";

function SelectBirthdate() {
  const { Option } = Select;
  return (
    <div className="birthdate-wrapper">
      <Select
        showSearch
        style={{
          width: 200,
        }}
        placeholder="YYYY"
        optionFilterProp="children"
        filterOption={(input, option) =>
          option.children.toLowerCase().includes(input.toLowerCase())
        }
        filterSort={(optionA, optionB) =>
          optionA.children
            .toLowerCase()
            .localeCompare(optionB.children.toLowerCase())
        }
      >
        {/* Map over the options and create Option components */}
        {years.map((year) => (
          <Option key={year.value} value={year.value}>
            {year.label}
          </Option>
        ))}
      </Select>
      <Select
        showSearch
        style={{
          width: 200,
        }}
        placeholder="MM"
        optionFilterProp="children"
        filterOption={(input, option) =>
          option.children.toLowerCase().includes(input.toLowerCase())
        }
        filterSort={(optionA, optionB) =>
          optionA.children
            .toLowerCase()
            .localeCompare(optionB.children.toLowerCase())
        }
      >
        {/* Map over the options and create Option components */}
        {months.map((month) => (
          <Option key={month.value} value={month.value}>
            {month.label}
          </Option>
        ))}
      </Select>
      <Select
        showSearch
        style={{
          width: 200,
        }}
        placeholder="DD"
        optionFilterProp="children"
        filterOption={(input, option) =>
          option.children.toLowerCase().includes(input.toLowerCase())
        }
        filterSort={(optionA, optionB) =>
          optionA.children
            .toLowerCase()
            .localeCompare(optionB.children.toLowerCase())
        }
      >
        {/* Map over the options and create Option components */}
        {days.map((day) => (
          <Option key={day.value} value={day.value}>
            {day.label}
          </Option>
        ))}
      </Select>
    </div>
  );
}
export default SelectBirthdate;
