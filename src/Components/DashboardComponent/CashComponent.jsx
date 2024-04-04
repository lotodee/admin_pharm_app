import React from 'react'
import "./module.cashcomponent.css";
import CashFlowicon from "../../assets/images/Cashflow.svg";

const CashComponent = ({cashImage ,topText , bottomText ,icon,Data}) => {

  console.log(Data)
  return (

<>
{Data.map((item)=> (

<div className='main-Box'>
      
<div className="container">
<img className='cashImage' src={item.cashImage} alt="" />
 <div className="texts">
     <p className="topText">{item.topText}</p>
    <div className='bottomTextAndImage'>
    {item.icon && <img className='NairaIcon' src={item.icon} alt="" />}
     <p className="bottomText">{item.bottomText}</p>
    </div>
 </div>

</div>
</div>

))}


</>
   
  )
}

export default CashComponent