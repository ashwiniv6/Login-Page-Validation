import React, { useState } from 'react';
import '../App.css';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './Validation';
// import axios from 'axios';

const Forgot = () => {
  const [values, setValues] = useState({
    email: ""
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // if ((values.errors) || (values.email) ) {
    // if ((values.errors) && (values.email) ) {
    if ((values.email)) {
      navigate("/mailsent");
    }
    else (setErrors(Validation(values)))


    //   axios({
    //     method:"POST",
    //     url:"http://localhost:3000/mailsent"
    //   })
  }

  // const redirect=(event)=>{
  //   var url="http://localhost:3000/mailsent";
  //   window.location.assign(url);
  //   event.preventDefault();
  //   setErrors(Validation(values));

  // }

  return (
    <body>
      <div className='wrapper'>
        <div className='main'>
          <div>
            <h3>Forgot Password</h3>
            <div>
              <label><span className="required">*</span></label>
              <input type="email" placeholder='Email ID'
                className='e'
                name='email'
                value={values.email}
                onChange={handleChange} />
              {errors.email && <p className='error'>{errors.email}</p>}
            </div>
            {/* <Link to="/mailsent"> */}
            <button className='button' onClick={handleSubmit} >Submit</button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </body>
  )
}

export default Forgot;
