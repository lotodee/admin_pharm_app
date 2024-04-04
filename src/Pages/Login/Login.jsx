import React from 'react'
import authImageTop from "../../assets/images/authImageTop.svg"
import "./module.login.css"
import Logo from '../../assets/images/Logo.svg'; 
import InputComponent from '../../Components/AuthComponent/InputComponent';
import { useState } from 'react';
import { useLogin } from '../../hooks/useLogin';
import { useNavigate } from 'react-router-dom'; 
const Login = () => {
  const [show , setshow] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login ,error ,isLoading , loggedIn} =useLogin()
  const navigate = useNavigate();
  
const handleLogin = async() =>{
  console.log("login clicked")
  console.log(`Email : ${email}  Password : ${password}`)
 
   await login(email,password)


if(error){
  console.log(error)
}

}


  
  const showPassword = () => {
 setshow(!show)
  }
  return (
    <>
   
   
   <div className="login-main-container">
    <div className="login-left-container">
      <div className="login-left">
{/* logo */}
<div className='logo-div'>
<img src={Logo} alt="" className="login-logo" />
</div>
  
 
 {/* texts */}
 <div className="login-text">
  <p className="top-text">Welcome Admin</p>
  <p className="bottom-text">Login to Continue</p>
 </div>

{/* inputs */}
<div className="input-containers">
<InputComponent placeholder={"Email"}
value={email}
onchange={(e)=> setEmail(e.target.value)}
/>
<InputComponent placeholder={"Password"} show={show} showPassword={showPassword} 
value={password}
onchange={(e)=> setPassword(e.target.value)}
/>
</div>


<div className="error-div">{error? error.message : ""}</div>


{/* remember /forgot */}
<div className="questions">
  <div className="remember">
   <input type="checkbox" />
   <p>Remember me</p>
  </div>
  <div className="forgot">
  Forgotten Password
  </div>
</div>

{/* login button */}
<button className='login-button'
disabled={isLoading}
onClick={handleLogin}>
 {isLoading ? 'logging In' : `login`}

</button>
      </div>
    </div>
    <div className="login-right-container">
     <div className="login-right">
<img src={authImageTop} alt="" />
     </div>
    </div>
   </div>

   </>
  )
}

export default Login