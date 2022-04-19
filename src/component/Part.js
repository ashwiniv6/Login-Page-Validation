import React, { useState } from 'react';
import "../App.css";
import Signup from './Signup';
import Register from './Register';

const Part = () => {
  const [formIsRegistered, setFormIsRegistered] = useState(false);

  const registerForm = () => {
    setFormIsRegistered(true);
  }

  return (
    <div>
      <div>
        {!formIsRegistered ? (<Signup registerForm={registerForm} />) : (<Register />)}
      </div>
    </div>

  );
};

export default Part;