import React, { useState, useEffect } from 'react'
import { Link, navigate, useNavigate } from 'react-router-dom';
import '../App.css';
import Validation from './Validation';

const Login = ({ submitForm }) => {

  const hardCodeValues = {
    username: "jay",
    email: "jay@gmail.com",
    password: "Jaya@1234"
  }

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

    if (values.username == hardCodeValues.username && values.email == hardCodeValues.email && values.password == hardCodeValues.password) {
      console.log("Logged in");
      
      // setValues({
      //   username : values.username,
      //   email:values.email,
      //   password:values.password
      // })
    } else {
      console.log("error");
      
    }
    // let hardCodeValues={
    //   username:"parru",
    //   email:"parru@gmail.com",
    //   password:"Parru#123"
    // }
    // if((values.email == hardCodeValues.email) && (values.username == hardCodeValues.username) && (values.password == hardCodeValues.password)){
    // navigate('/success');
    // setDataIsCorrect(true);
    // }else{
    //   setErrors(Validation(values));
    // }
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
      submitForm(true);
    }
  }, [errors]);

  return (
    <body>
      <div>
        {/* <h1>LOGIN PAGE</h1> */}
        <div className='wrapper'>
          <div className='main'>
            <div>
              <div>
              <h1>LOGIN PAGE</h1>
                <span className="required">*</span>
                <input type="text" placeholder="User Name"
                  className="a"
                  name="username"
                  value={values.username}
                  onChange={handleChange} />
                {errors.username && <p className='error'>{errors.username}</p>}
              </div>
              <div >
                <span className="required">*</span>
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
                <button className='button' onClick={handleSubmit}>Login</button>
              </div>
              <p className='link'>
                <Link to='/forgot'>Forgot password?</Link> or <Link to='/part'>Signup</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}

export default Login;
