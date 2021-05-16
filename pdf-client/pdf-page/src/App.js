import axios from 'axios';
import { saveAs } from 'file-saver';
import { useForm } from 'react-hook-form';
import React, { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [valid, setValid] = useState(false);
  const [characters, setCharacters] = useState(false);

  const handleFirstNameInputChange = (e) => {
    setValues({ ...values, firstname: e.target.value });
    console.log(values);

    if (values.firstname.includes('h')) {
      setCharacters(true);
    } else {
      setCharacters(false);
    }
  }

  const handleLastNameInputChange = (e) => {
    setValues({ ...values, lastname: e.target.value });
    console.log(values);

  }

  const handleEmailInputChange = (e) => {
    setValues({ ...values, email: e.target.value });
    console.log(values);

  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (values.firstname && values.lastname && values.email) {
      setValid(true);
    }

    setSubmitted(true);
  }

  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>

        {submitted && valid ? <div class="success-message">Success! Thank you for registering</div> : null}
        <input
          onChange={handleFirstNameInputChange}
          value={values.firstname}
          id="first-name"
          class="form-field"
          pattern="[a-zA-z]"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {characters ? <span id="first-name-error">H is a bad word.</span> : null}
        {submitted && !values.firstname ? <span id="first-name-error">Please enter a first name</span> : null}

        <input
          onChange={handleLastNameInputChange}
          value={values.lastname}
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />

        {/* <input type="number" pattern="[0-9]*" /> */}

        {submitted && !values.lastname ? <span id="last-name-error">Please enter a last name</span> : null}

        <input
          onChange={handleEmailInputChange}
          value={values.email}
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />

        {submitted && !values.email ? <span id="email-error">Please enter an email address</span> : null}

        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default App;
