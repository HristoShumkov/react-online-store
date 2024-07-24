import { Link } from 'react-router-dom'
import './register.css'


const Register = () => {

  return (
    <div className='flex-center'>
      <div className='container-default'>
        <h1 style={{ textAlign: 'center', marginTop: 0 }}>Sign up</h1>
        <form method="POST">
          <label htmlFor='email'>Email</label>
          <div className='input-field'>
            <input type='email' id='email' name='email' value="" />
          </div>
          <label htmlFor='username'>Username</label>
          <div className='input-field'>
            <input type='username' id='username' name='username' value="" />
          </div>
          <label htmlFor='password'>Password</label>
          <div className='input-field'>
            <input type='password' id='password' name='password' value="" />
          </div>
          <label htmlFor='confirm-password'>Confirm Password</label>
          <div className='input-field'>
            <input type='password' id='confirm-password' name='confirmPassword' value="" />
          </div>
          <label htmlFor='pfp'>Profile Pic</label>
          <div className='input-field'>
            <input type='text' id='pfp' name='pfp' value="" />
          </div>
          <input type='submit' value='Sign up' className='button-main' id='button-signup' />
        </form>
        <div className='divider'></div>
        <p style={{ textAlign: 'center' }}>Already have an account? <Link to='/login' id='to-login'>Sign in.</Link></p>
      </div>
    </div>
  )
}

export default Register