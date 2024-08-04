import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useLogin } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";

const initialValues = {
  email: "",
  password: "",
}

export default function Login() {
  const [error, setError] = useState("");
  const login = useLogin();
  const navigate = useNavigate();

  const loginHandler = async (values) => {
    try {
      await login(values.email, values.password);

      navigate("/");
    } catch (err) {
      setError("Email or Password is incorrect");
      console.error(err.message);
    }
  }

  const { values, changeHandler, submitHandler } = useForm(initialValues, loginHandler);


  return (
    <div className='flex-center'>
      <div className='container-default'>
        <h1 style={{ textAlign: 'center', marginTop: 0 }}>Login</h1>
        <form method="POST" onSubmit={submitHandler}>
          <label htmlFor='email'>Email</label>
          <div className="input-field">
            <input type='email' id='email' name='email' value={values.email} onChange={changeHandler} />
          </div>
          <label htmlFor='password'>Password</label>
          <div className='input-field'>
            <input type='password' id='password' name='password' value={values.password} onChange={changeHandler} />
          </div>
            {error && <span className="error-text">{error}</span>}
          <input type='submit' value='Login' className='button-main button-submit' />
        </form>
        <div className='divider' />
        <Link to='/register'><button className='button-secondary button-submit'>Create New Account</button></Link>
      </div>
    </div>
  )

}