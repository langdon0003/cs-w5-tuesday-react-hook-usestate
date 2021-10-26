import React from "react";
import { format } from "date-fns";

export default function InfoBoard({ info }) {
  const { name, age, dob, gender, email, phone, about,isSubmit } = info;
  if (!isSubmit) {
    return <div>You have not submit yet...</div>;
  } else {
    return (
      <div>
        Your info:
        <ul>
          <li>Name: {name}</li>
          <li>Age: {age}</li>
          {/* <li>Date of birth: {format(dob, 'dd.MM.yyyy')}</li> */}
          <li>Gender: {gender}</li>
          <li>Email: {email}</li>
          <li>Phone: {phone}</li>
          <li>About: {about}</li>
        </ul>
      </div>
    );
  }
}
