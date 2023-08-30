import logo from './logo.svg';
import './index.css';
import React from 'react';

export default function App() {
  const [values, setValues] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    });

    const [submitted, setSubmitted] = React.useState(false);
    const [valid, setValid] = React.useState(false);


    const handleFirstNameInputChange = (event) => {
      setValues({...values, firstName: event.target.value})} 
    
    const handleLastNameInputChange = (event) => {
      setValues({...values, lastName: event.target.value})}

    const handleEmailInputChange = (event) => {
      setValues({...values, email: event.target.value})}

    const handleSubmit = (event) => {
      event.preventDefault();
      setSubmitted(true);
    }

  

  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
        {/* Uncomment the next line to show the success message */}
        {submitted && valid ? <div class="success-message">Success! Thank you for registering</div> : null}
        <input
          onChange={handleFirstNameInputChange}
          value={values.firstName}
          className="form-field"
          placeholder="First Name"
          name="firstName"
        />
        {/* Uncomment the next line to show the error message */}
        {submitted && !values.firstName ? <span id="first-name-error">Please enter a first name</span>: null}
        <input
          onChange={handleLastNameInputChange}
          value={values.lastName}
          className="form-field"
          placeholder="Last Name"
          name="lastName"
        />
        {/* Uncomment the next line to show the error message */}
        {submitted && !values.lastName ? <span id="last-name-error">Please enter a last name</span> : null}
        <input
          onChange={handleEmailInputChange}
          value={values.email}
          type="email"
          className="form-field"
          placeholder="Email"
          name="email"
        />
        {/* Uncomment the next line to show the error message */}
        {submitted && !values.email ? <span id="email-error">Please enter an email address</span> : null}
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}