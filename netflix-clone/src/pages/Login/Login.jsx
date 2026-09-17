import React from 'react'
import './Login.css'
import logo from '../../assets/assets/logo.png'
import { useState } from 'react'
import { login, signup } from '../../../firebase.js'
import netflix_spinner from '../../assets/assets/netflix_spinner.gif'

const Login = () => {

  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const user_auth = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      if (signState === "Sign In") {
        await login(email, password);
      } else {
        await signup(name, email, password);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    loading? <div className="login-spinner">
      <img src={netflix_spinner} alt="" />
    </div>:
    <div className='login'>
      <img src={logo} className="login-logo" alt="Logo" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState==="Sign Up"?
          <input value={name} onChange={(e)=>{setName(e.target.value)
          }} type="text" placeholder="Username" />: <></>}
          
          <input value={password} onChange={(e)=>{setPassword(e.target.value)
          }} type="password" placeholder="Password" />

          <input value={email} onChange={(e)=>{setEmail(e.target.value)
          }} type="email" placeholder="Email" />

          <button onClick={user_auth} type="submit">{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState==="Sign In"?
           <p>New to Netflix?<span onClick={()=>{setSignState("Sign Up")}}> Sign Up</span></p>:
           <p>Already have an account? <span onClick={()=>{setSignState("Sign In")}}>Sign In</span></p>}
         
         
        </div>
      </div>
    </div>
  )
}

export default Login
