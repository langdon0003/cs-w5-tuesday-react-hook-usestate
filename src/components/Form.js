import React from "react";

import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, phone, email, password, confirmPassword } = formData;

  const onChangeHandler = ({ target: { id, value } }) => {
    // const data = { ...formData };
    // data[target.id] = target.value;
    // setFormData(data);

    setFormData({ ...formData, [id]: value });
  };
  console.log(`formData`, formData);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={onChangeHandler} />
      <br />
      <label htmlFor="phone">Phone:</label>
      <input type="text" id="phone" value={phone} onChange={onChangeHandler} />
      <br />
      <label htmlFor="email">Email:</label>
      <input type="text" id="email" value={email} onChange={onChangeHandler} />
      <br />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={onChangeHandler}
      />
      <br />
      <label htmlFor="confirmPassword">Confirm Password:</label>
      <input
        type="password"
        id="confirmPassword"
        value={confirmPassword}
        onChange={onChangeHandler}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
