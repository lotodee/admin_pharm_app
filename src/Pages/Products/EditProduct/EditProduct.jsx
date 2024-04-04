import React from "react";
import Header from "../../../Components/header";
import "./module.editproduct.css";
import back from "../../../assets/images/arrowLeft.svg";
import draft from "../../../assets/images/draft.svg";
import upload from "../../../assets/images/Upload.svg";
import BoxAndIcon from "../../../Components/BoxAndIconComponent/BoxAndIcon";
import deleteIcon from "../../../assets/images/deleteIcon.svg";
import { Link } from "react-router-dom";
import CommonInputComponent from "../../../Components/CommonInputComponent/CommonInputComponent";
const EditProduct = () => {
  return (
    <>
      <Header />

      <div className="add-product-top">
        <div className="add-product-top-left">
         <Link to="/products">
         <img src={back} alt="" className="back-image" />
         </Link>
          <div className="add-product-top-left-texts">
            <h1>Panadol pain & fever</h1>
            <p>Details filled were verified by the admin before uploading</p>
          </div>
        </div>

        <div className="add-product-top-right">
          <BoxAndIcon
            text="Update"
            border=".5px solid #000040"
            className="filter-box"
            bgColor="#000040"
            flexDirection="row-reverse"
            icon={upload}
            color="white"
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
   
    <CommonInputComponent small={true}  labelText="Medicine name" placeholder="Panadol pain & fever"/>
    <CommonInputComponent small={true}  labelText="Brand name" placeholder="panadol"/>
    <CommonInputComponent small={true}  labelText="Manufacturer" placeholder="GSK Nigeria"/>
    <CommonInputComponent small={true}  labelText="Key Ingredient" placeholder="paracetamol"/>
    <CommonInputComponent small={true}  labelText="Department" placeholder="Medical Supplies"/>
    <CommonInputComponent small={true}  labelText="Category" placeholder="Miscellaneous analgesics"/>
    <CommonInputComponent small={true}  labelText="Price" placeholder="1500.00"/>
    <CommonInputComponent small={true}  labelText="Quantity(Packs)" placeholder="24"/>
    <CommonInputComponent small={true}  labelText="Accessibility (OTC or Prescription)" placeholder="OTC"/>
   
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

export default EditProduct;
