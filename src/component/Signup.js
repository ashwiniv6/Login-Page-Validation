import React, { useState, useEffect } from 'react'
import Validation from './Validation';
import { Link } from 'react-router-dom';
import '../App.css';

const Signup = ({ registerForm }) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});
  const [dataIsCorrect, setDataIsCorrect] = useState(false);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    setDataIsCorrect(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
      registerForm(true);
    }
  }, [errors]);

  // const handleRegister=()=>{

  // }

  return (
    <body>
      <div>
        <h1>SIGN UP PAGE</h1>
        <div className='wrapper'>
          <div className='main'>
            <div>
              <div>
                <label><span className="required">*</span></label>
                <input type="text" placeholder="User Name"
                  className="a"
                  name="username"
                  value={values.username}
                  onChange={handleChange} />
                {errors.username && <p className='error'>{errors.username}</p>}
              </div>
              <div >
                <label><span className="required">*</span></label>
                <input type="email" placeholder="Email ID"
                  className='b'
                  name="email"
                  value={values.email}
                  onChange={handleChange} />
                {errors.email && <p className='error'>{errors.email}</p>}
              </div>
              <div>
                <input type="password" placeholder='Password'
                  className='c'
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  name="password"
                  value={values.password}
                  onChange={handleChange} />
                {errors.password && <p className='error'>{errors.password}</p>}
              </div>
              <div >
                <button className='button' onClick={handleSubmit} >Register</button>
                {/*//onSubmit={handleRegister}// <Link to="/register">Register</Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}

export default Signup