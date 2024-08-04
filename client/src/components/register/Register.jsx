import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

import { useRegister } from "../../hooks/useAuth";
import { useForm } from '../../hooks/useForm';

import './register.css'

const initialValues = {
  email: "",
  username: "",
  password: "",
  confirmPassword: "",
  profilePic: "",
}

export default function Register() {
  const [errors, setErrors] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  })
  const register = useRegister();
  const navigate = useNavigate();

  const registerHandler = async (values) => {
    setErrors({
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    })

    if (!values.email) {
      setErrors(oldState => ({
        ...oldState,
        email: 'Please enter email',
      }));
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      setErrors(oldState => ({
        ...oldState,
        email: 'Please enter valid email',
      }));
    }

    if (values.username.length < 3) {
      setErrors(oldState => ({
        ...oldState,
        username: 'Username must be at least 3 characters long',
      }));
    } else if (!/^[A-Za-z0-9._]*$/.test(values.username)) {
      setErrors(oldState => ({
        ...oldState,
        username: 'Username must only contain letters, numbers, underscores and periods',
      }));
    }

    if (values.password.length < 6) {
      setErrors(oldState => ({
        ...oldState,
        password: 'Password must be at least 6 characters long',
      }))
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/.test(values.password)) {
      setErrors(oldState => ({
        ...oldState,
        password: 'Password must contain at least 1 uppercase, 1 lowercase, and 1 numeric character',
      }))
    }

    if (values.password !== values.confirmPassword) {
      setErrors(oldState => ({
        ...oldState,
        confirmPassword: 'Passwords don\'t match',
      }))
    }

    if (!values.email || !values.username || !values.password || !values.confirmPassword) {
      return;
    }

    try {
      await register(values.email, values.username, values.password, values.profilePic);

      navigate("/");
    } catch (err) {
      console.error(err.message)
    }
  }

  const { values, changeHandler, submitHandler } = useForm(initialValues, registerHandler);


  return (
    <div className='flex-center'>
      <div className='container-default'>
        <h1 style={{ textAlign: 'center', marginTop: 0 }}>Sign up</h1>
        <form method="POST" onSubmit={submitHandler}>
          <label htmlFor='email'>Email</label>
          <div className='input-field'>
            <input className={errors.email && "error-input"} type='email' id='email' name='email' value={values.email} onChange={changeHandler} />
            {errors.email && <span className='error-text'>{errors.email}</span>}
          </div>
          <label htmlFor='username'>Username</label>
          <div className='input-field'>
            <input className={errors.username && "error-input"} type='username' id='username' name='username' value={values.username} onChange={changeHandler} />
            {errors.username && <span className='error-text'>{errors.username}</span>}
          </div>
          <label htmlFor='password'>Password</label>
          <div className='input-field'>
            <input className={errors.password && "error-input"} type='password' id='password' name='password' value={values.password} onChange={changeHandler} />
            {errors.password && <span className='error-text'>{errors.password}</span>}
          </div>
          <label htmlFor='confirm-password'>Confirm Password</label>
          <div className='input-field'>
            <input className={errors.confirmPassword && "error-input"} type='password' id='confirm-password' name='confirmPassword' value={values.confirmPassword} onChange={changeHandler} />
            {errors.confirmPassword && <span className='error-text'>{errors.confirmPassword}</span>}
          </div>
          <label htmlFor='pfp'>Profile Pic</label>
          <div className='input-field'>
            <input type='text' id='profile-pic' name='profilePic' value={values.profilePic} onChange={changeHandler} />
          </div>
          <input type='submit' value='Sign up' className='button-main button-submit' />
        </form>
        <div className='divider' />
        <p style={{ textAlign: 'center' }}>Already have an account? <Link to='/login' id='to-login'>Sign in.</Link></p>
      </div>
    </div>
  )
}