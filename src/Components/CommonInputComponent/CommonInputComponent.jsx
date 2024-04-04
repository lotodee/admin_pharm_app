import React from 'react'
import "./module.commoninput.css"
import upload from "../../assets/images/imageUpload.svg"
const CommonInputComponent = ({small,DragAndDrop,regular,labelText,placeholder,width,height}) => {
  return (
   <>

 <div className="input-main-container">
 

 {small && (
    <>
  
    <p className="add-product-label">{labelText}</p>
 <input type="text" className='add-product-input'
 placeholder={placeholder}
 style={{
     width: width ? `${width}` : '450px' ,
     height: height ? `${height}` :`50px`
 }}
 
 />
   </>
)}

{regular && (
    <>
       <p className="add-product-label">{labelText}</p>
    <textarea name="" id="" cols="30" rows="10"></textarea>
    </>
 
)}


</div>

   
{DragAndDrop && (
    <div className="input-sec-container">
     <p className="add-product-label">{labelText}</p>   
    <div className="drag-and-drop-container">
    <div className="image-text">
        <img src={upload} alt="" />
        <p className="add-product-label">Drag and Drop a file to upload</p>
    </div>
</div>
</div>
)}
   

   

   </>
  )
}

export default CommonInputComponent
