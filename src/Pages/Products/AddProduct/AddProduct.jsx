import React from "react";
import Header from "../../../Components/header";
import "./module.addproduct.css";
import back from "../../../assets/images/arrowLeft.svg";
import draft from "../../../assets/images/draft.svg";
import upload from "../../../assets/images/Upload.svg";
import BoxAndIcon from "../../../Components/BoxAndIconComponent/BoxAndIcon";
import deleteIcon from "../../../assets/images/deleteIcon.svg";
import { Link } from "react-router-dom";
import CommonInputComponent from "../../../Components/CommonInputComponent/CommonInputComponent";
const AddProduct = () => {
  return (
    <>
      <Header />

      <div className="add-product-top">
        <div className="add-product-top-left">
         <Link to="/products">
         <img src={back} alt="" className="back-image" />
         </Link>
          <div className="add-product-top-left-texts">
            <h1>Add Products</h1>
            <p>Details filled will be displayed to user in the application</p>
          </div>
        </div>

        <div className="add-product-top-right">
          <BoxAndIcon
            text="Upload"
            border=".5px solid #000040"
            className="filter-box"
            bgColor="#000040"
            flexDirection="row-reverse"
            icon={upload}
            color="white"
          />

          <BoxAndIcon
            text="Draft"
            border=".5px solid #000040"
            className="filter-box"
            bgColor="white"
            flexDirection="row-reverse"
            icon={draft}
            color="#000040"
            fz="19px"
          />

          <BoxAndIcon
            icon={deleteIcon}
            text="Delete"
            bgColor="red"
            flexDirection="row-reverse"
            color="white"
            border="none"
            className="filter-box"
          />
        </div>
      </div>

     
     <div className="add-product-bottom">
     
     <div className="input-fields-top">
   
    <CommonInputComponent small={true}  labelText="Medicine name" />
    <CommonInputComponent small={true}  labelText="Brand name"/>
    <CommonInputComponent small={true}  labelText="Manufacturer"/>
    <CommonInputComponent small={true}  labelText="Key Ingredient"/>
    <CommonInputComponent small={true}  labelText="Department"/>
    <CommonInputComponent small={true}  labelText="Category"/>
    <CommonInputComponent small={true}  labelText="Price"/>
    <CommonInputComponent small={true}  labelText="Quantity"/>
    <CommonInputComponent small={true}  labelText="Accessibility (OTC or Prescription)"/>
   
     </div>
     <div className="input-fields-mid">
    <CommonInputComponent  DragAndDrop={true} labelText="Product Image"/>
    <CommonInputComponent regular={true}  labelText="Description" />
    <CommonInputComponent regular={true}  labelText="How To use" />

     </div>
     <div className="input-fields-bottom">
     <CommonInputComponent small={true}  labelText="Expiry Date"/>
    <CommonInputComponent small={true}  labelText="Discount"/>
    <CommonInputComponent small={true}  labelText="Validity Period"/>
     </div>
     </div>

    </>
  );
};

export default AddProduct;
