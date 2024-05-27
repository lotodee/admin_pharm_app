import DashboardIcon from '../assets/images/dashboard.svg'
import PharmacyIcon from '../assets/images/pharmacy.svg';
import ProductIcon from '../assets/images/Products.svg';
import InventoryIcon from '../assets/images/Inventory.svg';
import CustomerIcon from '../assets/images/User.svg';
import ReviewsIcon from '../assets/images/StarFill.svg'
import PurchaseIcon from '../assets/images/creditcard.svg'
import Admins from '../assets/images/Admins.svg';
import SettingsIcon from '../assets/images/Settingsicon.svg';
import Helpicon from '../assets/images/Helpicon.svg';
import ReviewImg from '../assets/images/reviewimg.svg';
import Panadol from '../assets/images/Panadol.svg';
import CashFlowicon from "../assets/images/Cashflow.svg";
import revenue from '../assets/images/newRevenue.svg';
import DownArrow from '../assets/images/newArrowDown.svg';
import UpArrow from '../assets/images/newArrowUp.svg';
import NairaIcon from "../assets/images/naira.png";

import received from '../assets/images/orderReceived.svg';
import count from '../assets/images/orderCount.svg';
import rejected from '../assets/images/orderRejected.svg';
import accepted from '../assets/images/orderAccepted.svg';
import coupons from '../assets/images/coupons.svg';

export const General = [
    { url: "/dashboard", img: DashboardIcon, text: "Dashboard" },
    { url: "/pharmacies", img: PharmacyIcon, text: "Pharmacies" },
    { url: "/products", img: ProductIcon, text: "Products" },
    { url: "/inventory", img: InventoryIcon, text: "Inventory" },
    { url: "/customers", img: CustomerIcon, text: "Customers" },
    { url: "/reviews", img: ReviewsIcon, text: "Reviews" },
    { url: "/purchase", img: PurchaseIcon, text: "Purchase" },
    { url: "/admins", img: Admins, text: "Admins" },
    { url: "/coupons", img: coupons, text: "Coupons" },
  ];
  


 export const Accounts = [
    { url: "/settings", img: SettingsIcon, text: "Settings" },
    { url: "/help", img: Helpicon, text: "Help" },
  ];


  export const ReviewData = [

    {
      profilePicture:ReviewImg,
      drugImage:Panadol,
      username:"Papa Yankee",
      yearJoined:"2020",
      drug:"Panadol pain & fever",
      rating:"4.9",
      yearCreated:"2020",
      Comment:"Panadol is my go-to choice for swift pain and fever relief.Its reliable effectiveness and easy-to-use format makes it a staple in my medicine cabinet."

    },
    {
      profilePicture:ReviewImg,
      drugImage:Panadol,
      username:"Papa Yankee",
      yearJoined:"2020",
      drug:"Panadol pain & fever",
      rating:"4.9",
      yearCreated:"2020",
      Comment:"Panadol is my go-to choice for swift pain and fever relief.Its reliable effectiveness and easy-to-use format makes it a staple in my medicine cabinet."

    },
    {
      profilePicture:ReviewImg,
      drugImage:Panadol,
      username:"Papa Yankee",
      yearJoined:"2020",
      drug:"Panadol pain & fever",
      rating:"4.9",
      yearCreated:"2020",
      Comment:"Panadol is my go-to choice for swift pain and fever relief.Its reliable effectiveness and easy-to-use format makes it a staple in my medicine cabinet."

    },
    {
      profilePicture:ReviewImg,
      drugImage:Panadol,
      username:"Papa Yankee",
      yearJoined:"2020",
      drug:"Panadol pain & fever",
      rating:"4.9",
      yearCreated:"2020",
      Comment:"Panadol is my go-to choice for swift pain and fever relief.Its reliable effectiveness and easy-to-use format makes it a staple in my medicine cabinet."

    },
    {
      profilePicture:ReviewImg,
      drugImage:Panadol,
      username:"Papa Yankee",
      yearJoined:"2020",
     
      drugName:"Panadol pain & fever",
      rating:"4.9",
      yearCreated:"2020",
      Comment:"Panadol is my go-to choice for swift pain and fever relief.Its reliable effectiveness and easy-to-use format makes it a staple in my medicine cabinet."

    },
    {
      profilePicture:ReviewImg,
      drugImage:Panadol,
      username:"Papa Yankee",
      yearJoined:"2020",
      drug:"Panadol pain & fever",
      rating:"4.9",
      yearCreated:"2020",
      Comment:"Panadol is my go-to choice for swift pain and fever relief.Its reliable effectiveness and easy-to-use format makes it a staple in my medicine cabinet."

    },
    {
      profilePicture:ReviewImg,
      drugImage:Panadol,
      username:"Papa Yankee",
      yearJoined:"2020",
      drug:"Panadol pain & fever",
      rating:"4.9",
      yearCreated:"2020",
      Comment:"Panadol is my go-to choice for swift pain and fever relief.Its reliable effectiveness and easy-to-use format makes it a staple in my medicine cabinet."

    },
    {
      profilePicture:ReviewImg,
      drugImage:Panadol,
      username:"Papa Yankee",
      yearJoined:"2020",
      drug:"Panadol pain & fever",
      rating:"4.9",
      yearCreated:"2020",
      Comment:"Panadol is my go-to choice for swift pain and fever relief.Its reliable effectiveness and easy-to-use format makes it a staple in my medicine cabinet."

    },
    {
      profilePicture:ReviewImg,
      drugImage:Panadol,
      username:"Papa Yankee",
      yearJoined:"2020",
      drug:"Panadol pain & fever",
      rating:"4.9",
      yearCreated:"2020",
      Comment:"Panadol is my go-to choice for swift pain and fever relief.Its reliable effectiveness and easy-to-use format makes it a staple in my medicine cabinet."

    }

  ]



  export const DashboardCashData = [

   {
    topText:"Total Cash Flow",
    bottomText:"200,000",
    icon:NairaIcon,
    cashImage:CashFlowicon
   },

   {
    topText:"Total Revenue",
    bottomText:"23",
   
    cashImage:revenue
   },

   {
    topText:"Total Cash Inflow",
       bottomText:"1002",
      
       cashImage:DownArrow
   },
  {
    topText:"Total Cash Outflow",
    bottomText:"32",
   
    cashImage:UpArrow
 
  }
  ]


  export const ViewPharmacyCashData = [

    {
     topText:"Total Order Received",
     bottomText:"200",
     
     cashImage:received
    },
 
    {
     topText:"Inventory Count",
     bottomText:"134",
    
     cashImage:count
    },
 
    {
     topText:"Order Accepted",
        bottomText:"1002",
       
        cashImage:accepted
    },
   {
     topText:"Order Rejected",
     bottomText:"32",
    
     cashImage:rejected
  
   }
   ]


