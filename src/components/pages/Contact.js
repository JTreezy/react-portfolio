import React, { useState } from 'react';
import { capitalizeFirstLetter, validateEmail } from '../utils/helpers';
import Button from '../Button';
import './styles/contact.scss';


const ContactForm = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const {
    name,
    email,
    message,
  } = formState;
  const [errorMessages, setErrorMessages] = useState({
    'email': '',
    'name': '',
    'message': '',
  });
  const {
    email: emailErr,
    name: nameErr,
    message: msgErr,
  } = errorMessages;

  const handleInputBlur = (event) => {
    if (event.target.name === 'email') {
      const emailValid = validateEmail(event.target.value);

      if (!emailValid) {
        setErrorMessages({...errorMessages, 'email': 'Your email is invalid.'});
      } else {
        setErrorMessages({...errorMessages, 'email': ''});
      }
    }

    if (event.target.name === 'name' || event.target.name === 'message') {
      if (!event.target.value.length) {
        setErrorMessages({...errorMessages, [event.target.name]: `${capitalizeFirstLetter(event.target.name)} is required.`});
      } else {
        setErrorMessages({...errorMessages, [event.target.name]: ''});
      }
    }

    const weHaveErrors = emailErr|| nameErr || msgErr;

    if (!weHaveErrors) {
      setFormState({...formState, [event.target.name]: event.target.value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    if (! formState.email) {
      console.log('No email, no contact!'); 
    } else {
      console.log(formState); 
    }
  };

  return (
    <section className="contact">
      <h1 className='contact-title'>Contact Me</h1>
      <p>(Form Validation Demonstration for Front End only)</p>
      <form
        id="contact-form"
        className=""
        onSubmit={handleSubmit}
      >
        <div className="">
          <div className="">
            <label
              className=""
              htmlFor="name"
            >
              Name:
            </label>
          </div>
          <div className="">
            <input
              className=""
              type="text"
              name="name"
              defaultValue={name}
              onBlur={(value) => handleInputBlur(value)}
            />
            {nameErr && (
              <p className="">{nameErr}</p>
            )}
          </div>
        </div>
        <div className="">
          <div className="">
            <label
                className=""
                htmlFor="email"
              >
                Email:
            </label>
          </div>
          <div className="">
            <input
              className=""
              type="email"
              name="email"
              defaultValue={email}
              onBlur={(value) => handleInputBlur(value)}
            />
            {emailErr && (
              <p className="">{emailErr}</p>
            )}
          </div>
        </div>
        <div className="">
        <div className="">
            <label
                className=""
                htmlFor="message"
              >
                Message:
            </label>
          </div>
          <div className="">
            <textarea
              className=""
              name="message"
              rows="5"
              defaultValue={message}
              onBlur={(value) => handleInputBlur(value)}
            />
            {msgErr && (
              <p className="">{msgErr}</p>
            )}
          </div>
        </div>
        <div className="">
          <div className=""></div>
          <div className="">
            <Button className='button is-light' text="Submit" />
          </div>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;