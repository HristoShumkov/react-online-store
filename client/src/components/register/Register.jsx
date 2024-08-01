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
  const register = useRegister();
  const navigate = useNavigate();

  const registerHandler = async (values) => {
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
            <input type='email' id='email' name='email' value={values.email} onChange={changeHandler} />
          </div>
          <label htmlFor='username'>Username</label>
          <div className='input-field'>
            <input type='username' id='username' name='username' value={values.username} onChange={changeHandler} />
          </div>
          <label htmlFor='password'>Password</label>
          <div className='input-field'>
            <input type='password' id='password' name='password' value={values.password} onChange={changeHandler} />
          </div>
          <label htmlFor='confirm-password'>Confirm Password</label>
          <div className='input-field'>
            <input type='password' id='confirm-password' name='confirmPassword' value={values.confirmPassword} onChange={changeHandler} />
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