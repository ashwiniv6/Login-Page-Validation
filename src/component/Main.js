import React, { useState } from 'react';
import Login from './Login';
import Success from './Success';
import "../App.css";

const Main = () => {
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  const submitForm = () => {
    setFormIsSubmitted(true);
  };

  return (
    <div>
      {!formIsSubmitted ? (<Login submitForm={submitForm} />) : (<Success />)}
    </div>
  );
};

export default Main;