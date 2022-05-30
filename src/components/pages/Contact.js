import React, { useState } from 'react';
// import './Styles/Contact.css';
import { validateEmail } from '../utils/helpers';

function Contact() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
   
    const { name, value } = e.target;
   
    if (name === 'fullName') {
      setFullName(value);

    } else if (name === 'email') {
      setEmail(value);
    }
    else {
      setMessage(value)
    }
     
  };

  const handleFormSubmit = (e) => {
   
    e.preventDefault();
    if (!validateEmail(email) || !fullName) {
      setErrorMessage('Email Address or Full Name is invalid');

      return;
     
    }
   
    alert(`Message sent to ${email}`);
    setFullName('');
    setEmail('');
    setMessage('');
    setErrorMessage("")
  };

  return (
    <div>
      <div>
        <h3>Contact Me</h3>
      </div>
      <div >

        <form>
          <div>
            <input
              value={fullName}
              name="fullName"
              onChange={handleInputChange}
              type="text"
              placeholder="Full Name"
            />
          </div>
          <div>

            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="text"
              placeholder="Email Address"
            />
          </div>
          <div>

            <textarea
              value={message}
              name="mesage"
              onChange={handleInputChange}
              type="text"
              placeholder="Message"
            />
          </div>
          <button type="button" onClick={handleFormSubmit}>
            Submit
          </button>
          {errorMessage && (
        <div>
          <p>{errorMessage}</p>
        </div>
      )}
        </form>
      </div>
      
    </div>
    
  );
}

export default Contact;