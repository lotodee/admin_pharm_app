import React from 'react'
import "./module.cashcomponent.css";
import CashFlowicon from "../../assets/images/Cashflow.svg";

const CashComponent = ({cashImage ,topText , bottomText ,icon,Data}) => {

  console.log(Data)
  return (

<>


<div className='main-Box'>
      
<div className="container">
<img className='cashImage' src={cashImage} alt="" />
 <div className="texts">
     <p className="topText">{topText}</p>
    <div className='bottomTextAndImage'>
    {icon && <img className='NairaIcon' src={icon} alt="" />}
     <p className="bottomText">{bottomText}</p>
    </div>
 </div>

</div>
</div>


</>
   
  )
}

export default CashComponent