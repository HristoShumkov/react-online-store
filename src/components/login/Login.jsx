import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {

    return (
        <div className='flex-center'>
        <div className='container-default'>
          <h1 style={{ textAlign: 'center', marginTop: 0 }}>Login</h1>
          <form>
            <label htmlFor='email'>Email</label>
            <div className='input-field'>
              <input type='email' id='email' name='email' value=""/>
            </div>
            <label htmlFor='password'>Password</label>
            <div className='input-field'>
              <input type='password' id='password'  name='password' value=""/>
            </div>
            <input type='submit' value='Login' className='button-main' id='button-login'/>
          </form>
          <div className='divider'></div>
          <Link to='/register'><button className='button-secondary' id='button-to-register'>Create New Account</button></Link>
        </div>
      </div>
    )

}

export default Login