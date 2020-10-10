import React, { useState } from 'react';
import './style.css';
import Axios from 'axios';

function RegisterForm() {

  const [form, setForm] = useState({
    mobile: "",
    firstname: "",
    lastname: "",
    date: "",
    gender: "",
    email: ""
  })

  const onSubmit = (val) => {
    Axios({
      url: "https://b7415cc1bf3c.ngrok.io/user",
      method: "POST",
      withCredentials: true,
      data: val
    }).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    })
  }

  console.log(form);

  return (
    <div className='wrapper'>
      <div className='form-wrapper'>
        <h2>Registration</h2>
        <form>
          <div className='fullName'>
            <input type='text' placeholder='Mobile Number' name='mobile number' onChange={(event) => { setForm({ ...form, mobile: event.target.value }) }} value={form.mobile} />
          </div>
          <div className='fullName'>
            <input type='text' placeholder='First Name' name='first name' onChange={(event) => { setForm({ ...form, firstname: event.target.value }) }} value={form.firstname} />
          </div>
          <div className='fullName'>
            <input type='text' placeholder='Last Name' name='last name' onChange={(event) => { setForm({ ...form, lastname: event.target.value }) }} value={form.lastname} />
          </div>
          <div style={{ padding: '20px' }}>
            <label>Date of Birth</label>
            <div style={{ display: "flex", width: '100%', flex: 1, flexDirection: "row" }}>
              <input type="date" id="birthday" name="birthday" onChange={(event) => { setForm({ ...form, date: event.target.value }) }} value={form.date} />
            </div>
          </div>
          <div style={{ padding: '20px' }}>
            <div style={{ display: "flex", width: '100%', flex: 1, flexDirection: "row" }} onChange={(event) => { setForm({ ...form, gender: event.target.value }) }} value={form.gender} >
              <input type="radio" value="Male" name="gender" /> Male
              <input type="radio" value="Female" name="gender" /> Female
            </div>
          </div>
          <div className='email'>
            <input type='text' placeholder='Email' name='email' onChange={(event) => { setForm({ ...form, email: event.target.value }) }} value={form.email} />
          </div>
          <div className='submit' onClick={() => {onSubmit(form)}}>
            <button>Register</button>
          </div>
          <div className='login' style={{ paddingTop: '10px' }}>
            <button>Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterForm
