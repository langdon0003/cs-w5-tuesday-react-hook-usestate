import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DOB({ data }) {
  const { dob, onChangeHandler } = data;

  const handleOnChange = (date) => {
    const target = { id: "dob", value: date };
    onChangeHandler({ target });
  };

  return (
    <DatePicker selected={dob} onChange={(date) => handleOnChange(date)} />
  );
}
