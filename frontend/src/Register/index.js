import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    let data = new FormData()
    data.append("username",formData.username)
    data.append("email",formData.email)
    data.append("password",formData.password)

    await axios.post("http://127.0.0.1:5000/userRegister",data).then((res)=>{
      alert(res.data)
      setFormData({username: '',
        email: '',
        password: ''})
    }).catch((err)=>{
      console.log(err)
    })

  };
  return (
    <div>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder='enter Your username'
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder='enter Your Email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder='enter your Passoword'
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button type='submit'>Register</button>
        </div>
      </form>
      <div>
        <h5>you alreasy have account pls <Link  to='/'>login</Link></h5>
      </div>
    </div>
  )
}

export default Register