import React, { useState } from 'react'
import {Link} from 'react-router-dom'
const Login = () => {
  const [formData, setFormData] = useState({
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login form data:', formData);
  };
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder='Enter your email'
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
            placeholder='Enter your Password'
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button type='submit'>Login</button>
        </div>
      </form>
      <div>
        <h5>you don't have account pls <Link to='/register'>Register</Link></h5>
      </div>
    </div>
  )
}

export default Login