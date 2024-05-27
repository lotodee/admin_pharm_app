/* eslint-disable react/prop-types */

import "./module.boxandicon.css"

const BoxAndIcon = ({icon ,bgColor,text,border,flexDirection,color,gap,fz,onClick,padding}) => {
  return (
 <div className='box-and-icon-container' 
 onClick={onClick}
 style={{
    
    backgroundColor:`${bgColor}`,
    border:`${border}`,
    flexDirection:`${flexDirection}`,
   padding: padding ? `${padding}` :`10px 25px`  ,
cursor:`pointer`,
gap:`${gap}`

}}
 >
         <p className='' 
         style={{
            color:`${color}`,
            fontSize:`${fz}` ? `${fz}` : `15px`,
            cursor:`pointer`
            }}
         >{text}</p>
        {icon &&(
 <img className='icon' src={icon} 
 style={{
    width:`20px`,
    height:`20px`,
    cursor:`pointer`
}}
 />
        )}
        
        </div>  
  )
}

export default BoxAndIcon
