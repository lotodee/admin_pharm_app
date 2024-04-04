import React from 'react'
import "./module.input.css"
import user from "../../assets/images/authuser.svg"
import eyeOpen from "../../assets/images/eyeopen.svg"
import eyeClosed from "../../assets/images/eyeclosed.svg"

const InputComponent = ({placeholder,show,showPassword,onchange}) => {
  return (
    <>
    <div className="input-container">
      
      {placeholder === "Email" && (
        <>
    
         <input className='input' type= { "text"}
         placeholder={placeholder}
         onChange={onchange}
         />
 <img className='input-img' src={user} alt="" />
 </>
      )}
       
        {placeholder === "Password" && (
            <>
           
             <input className='input' type= {show ? "text" : "password"}
             placeholder={placeholder}
             onChange={onchange}
             />
            <img className='input-img' src={show ? eyeClosed : eyeOpen} alt=""  onClick={showPassword}/>
            </>
        )}
    </div>
    </>
  )
}

export default InputComponent