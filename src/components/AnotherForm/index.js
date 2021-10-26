import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import DOB from "./DOB";
import InfoBoard from "./InfoBoard";

export default function AnotherForm() {
  const [data, setData] = useState({
    name: "",
    age: "",
    dob: "",
    gender: "",
    email: "",
    phone: "",
    about: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitHandler(e) {
    e.preventDefault();
    setIsSubmitted(true);
    console.log(`data`, data);
  }

  function onChangeHandler({ target: { id, value } }) {
    setData({ ...data, [id]: value });
  }

  return (
    <div className="form-group">
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Your Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter our name"
            onChange={onChangeHandler}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="age">
          <Form.Label>Your Age:</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter our age"
            onChange={onChangeHandler}
          />
        </Form.Group>

        <DOB data={{ dob: data.dob, onChangeHandler }} />

        <Form.Group className="mb-3" controlId="gender">
          <Form.Label>Gender:</Form.Label>

          <Form.Select aria-label="Gender select" onChange={onChangeHandler}>
            <option>Select your gender</option>
            <option value="0">Male</option>
            <option value="1">Female</option>
          </Form.Select>
        </Form.Group>

        <Form.Group
          className="mb-3"
          controlId="email"
          onChange={onChangeHandler}
        >
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="phone">
          <Form.Label>Your phone:</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter your phone"
            onChange={onChangeHandler}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="about">
          <Form.Label>About:</Form.Label>
          <Form.Control as="textarea" rows={3} onChange={onChangeHandler} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <InfoBoard info={{ ...data, isSubmitted: isSubmitted }} />
    </div>
  );
}
