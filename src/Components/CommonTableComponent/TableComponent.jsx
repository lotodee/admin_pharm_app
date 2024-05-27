/* eslint-disable react/prop-types */
import  { useState, useEffect, useRef } from 'react';
import "./module.tablecomponent.css"
import Search from '../../Components/SearchComponent/Search';
import BoxAndIcon from '../../Components/BoxAndIconComponent/BoxAndIcon';
import filterIcon from "../../assets/images/FilterIcon.svg";
import deleteIcon from "../../assets/images/deleteIcon.svg";
import Panadol from '../../assets/images/Panadol.svg';
import filterArrow from '../../assets/images/filterArrow.svg';

import downloadIcon from '../../assets/images/downloadIcon.svg';
import approved from "../../assets/images/approved.svg";
import pending from "../../assets/images/pending.svg";
import { Link } from 'react-router-dom';

const TableComponent = ({pathname, topleftText, showlast, placeholder, Data, withImage,Tablepath,tablelink,viewlink,viewPath}) => {
    console.log(Data);
    const [action, setAction] = useState(null);
    const [click, setClick] = useState(false);
    const actionsRef = useRef(null);

    const actionClicked = (index) => {
        setAction(index);
        setClick(true);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (actionsRef.current && !actionsRef.current.contains(event.target)) {
                setAction(null);
                setClick(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            <section className='productTable'>
                <div className='product-top-section'>
                    <h4>{topleftText}</h4>
                    {showlast && (
                        <div className='filter' >
                            <p>Last 7 days</p>
                            <img src={filterArrow} alt="" />
                        </div>
                    )}
                </div>

                <div className='table '>
                    <div className='tableheader'>
                        <Search text={placeholder}/>
                        <div className='tableButtons'>
                            <BoxAndIcon
                                icon={filterIcon}
                                text="Filter"
                                border=".5px solid #000040"
                                className="filter-box"
                            />
                            {pathname === "/purchase" && (
                                <BoxAndIcon
                                    text="Download"
                                    border=".5px solid #000040"
                                    className="filter-box"
                                    bgColor="#000040"
                                    icon={downloadIcon}
                                    color="white"
                                />
                            )}
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

                    <div className="head-container">
                    {pathname === "/dashboard" && (

<div className="head-content">
  <input  className="head-content-input" type="radio" name="" id="" />
  <p className="head-product-name">PRODUCT NAME</p>
  <p className="head-product-price">PRICE</p>
  <p className="head-product-category">CATEGORY</p>
  <p className="head-product-brand">BRAND NAME</p>
  <p className="head-product-quantity">QUANTITY SOLD</p>
  <p className="head-product-action">ACTION</p>
</div>

    )}
    {pathname === "/pharmacies" && (

<div className="head-content">
  <input  className="head-content-input" type="radio" name="" id="" />
  <p className="head-product-name">PHARMACY</p>
  <p className="head-product-price">VERIFICATION</p>
  <p className="head-product-category">ADDRESS</p>
  <p className="head-product-brand">EMAIL</p>
  <p className="head-product-quantity">STATUS</p>
  <p className="head-product-action">ACTION</p>
</div>

    )}

{pathname === "/products" && (

<div className="head-content">
  <input  className="head-content-input" type="radio" name="" id="" />
  <p className="head-product-name">PRODUCT NAME</p>
  <p className="head-product-price">PRICE</p>
  <p className="head-product-category">CATEGORY</p>
  <p className="head-product-brand">BRAND NAME</p>
  <p className="head-product-quantity">QUANTITY</p>
  <p className="head-product-action">CREATED</p>
</div>

    )}

{pathname === "/admins" && (

<div className="head-content">
  <input  className="head-content-input" type="radio" name="" id="" />
  <p className="head-product-name">ADMIN NAME</p>
  <p className="head-product-price">DATE ADDED</p>
  <p className="head-product-category">EMAIL</p>
  <p className="head-product-brand">LAST LOGIN</p>
  <p className="head-product-quantity">STATUS</p>
  <p className="head-product-action">ACTION</p>
</div>

    )}

{pathname === "/purchase" && (

<div className="head-content">
  <input  className="head-content-input" type="radio" name="" id="" />
  <p className="head-product-name">PRODUCT NAME</p>
  <p className="head-product-price">PRICE</p>
  <p className="head-product-category">CATEGORY</p>
  <p className="head-product-brand">BRAND NAME</p>
  <p className="head-product-quantity">QUANTITY</p>
  <p className="head-product-action">SUPPLIER NAME</p>
</div>

    )}


{pathname === "/customers" && (

<div className="head-content">
  <input  className="head-content-input" type="radio" name="" id="" />
  <p className="head-product-name">CUSTOMER NAME</p>
  <p className="head-product-price">VERIFICATION</p>
  <p className="head-product-category">ADDRESS</p>
  <p className="head-product-brand">EMAIL</p>
  <p className="head-product-quantity">STATUS</p>
  <p className="head-product-action">ACTION</p>
</div>

    )}
{pathname === "/coupons" && (

<div className="head-content">
  <input  className="head-content-input" type="radio" name="" id="" />
  <p className="head-product-name">ORGANIZATION</p>
  <p className="head-product-price">NUMBER OF STAFFS</p>
  <p className="head-product-category">USAGE DURATION</p>
  <p className="head-product-brand">LAST USED</p>
  <p className="head-product-quantity">STATUS</p>
  <p className="head-product-action">ACTION</p>
</div>

    )}

                    </div>

                    <div className="body-container">
                        {Data.map((item, index) => (
                           
                            <div key={index}>
                                <div className={!withImage ? "body-content-padd body-content" : "body-content"}>

                                
                                    <input type="radio" name="" id=""/>
                                    
                                    
                                  
                                  

                                    <Link className='linkTable link'   to={ tablelink ? `${Tablepath}/${index}` : ``}>
                                    <div className="product-name-image">
                                        {withImage && (
                                            <img src={Panadol} alt=""/>
                                        )}


                                        <p className="body-product-name">{item.col1}</p>
                                    </div>

                                    <p className="body-product-price">{item.col2}</p>


                                    <p className="body-product-category">{item.col3}</p>


                                    <p className="body-product-brand">{pathname === "/admins" ? item.col4 : item.col4}</p>


                                    {pathname === "/customers" || pathname === "/admins" || pathname === "/pharmacies" || pathname === "/coupons"  ? (
                                        <img src={item.col5 === true ? approved : pending} alt=""
                                             className="body-status-img body-product-quantity "/>
                                    ) : (
                                        <p className="body-product-quantity">{item.col5}</p>
                                    )}


                                    {pathname === "/purchase" || pathname === "/products" ? (
                                        <p className={pathname === "/purchase" ? "body-product-action body-product-supplier" : "body-product-action"}>{item.col6}</p>
                                    ) : (
                                        <p onClick={() => actionClicked(index)} className="body-product-action">...</p>
                                    )}


                                    {action === index && click && (
                                        <div ref={actionsRef} className="actions-container">
                                            <Link to={viewlink ? `${viewPath}/${item.id}` : ``} className='link action-top'>
                                            <div className="">View</div>
                                            </Link>
                                            
                                            <div className="action-mid">Share</div>
                                            <div className="action-bottom">Delete</div>
                                        </div>
                                    )}



                                    
                                    
                                    </Link>

                                </div>
                            </div>
                       
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default TableComponent;
