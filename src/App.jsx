// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import Sidebar from './Components/Sidebar'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Products from './Pages/Products';
// import Inventory from './Pages/Inventory';

// import Dashboard from './Pages/Dashboard';
// import Customers from './Pages/Customers';
// import Pharmacies from './Pages/Pharmacies';
// import Reviews from './Pages/Reviews';
// import Purchase from './Pages/Purchase';
// import Settings from './Pages/Settings';
// import Admins from './Pages/Admins';
// import { useNavigate } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
// function App() {
  





// // useEffect(() => {
// //   navigate('/dashboard');
// // }, [navigate]);

//   return (
//     <>
       
//         <Router>    
//         <div style={{ display:`flex` }}>  
//          <Sidebar  />
//         <div className='page' style={{ padding: "15px 0px", maxHeight: "calc(100vh - 30px)" , width:`100%` }}>
//         <Routes>
//           <Route path= "/dashboard" element={<Dashboard />} />
//           <Route path='/pharmacies' element={<Pharmacies />} />
//           <Route path='/inventory' element={<Inventory />} />
//           <Route path='/products' element={<Products />} />
//           <Route path='/customers' element={<Customers />} />
//           <Route path='/purchase' element={<Purchase />} />
//           <Route path='/reviews' element={<Reviews />} />
//           <Route path='/admins' element={<Admins />} />
//           <Route path='/settings' element={<Settings  />} />
//         </Routes>
//         </div>      
//          </div>     
//         </Router>
//     </>
//   )
// }

// export default App;


import React, { useEffect,useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Dashboard from './Pages/Dashboard/Dashboard';
import Pharmacies from './Pages/Pharmarcies/Pharmacies';
import Inventory from './Pages/Inventory/Inventory';
import Products from './Pages/Products/Products';
import Customers from './Pages/Customers/Customers';
import Purchase from './Pages/Purchase/Purchase';
import Reviews from './Pages/Reviews/Reviews';
import Admins from './Pages/Admins/Admins';
import Settings from './Pages/Settings/Settings';
import { useLocation } from 'react-router-dom';
import './App.css'
import Login from './Pages/Login/Login';
import Notifications from './Pages/Notifications/Notifications';
import AddProduct from './Pages/Products/AddProduct/AddProduct';
import EditProduct from './Pages/Products/EditProduct/EditProduct';
import ViewPharmacy from './Pages/Pharmarcies/VeiwPharmacyPage/ViewPharmacy';
import ViewCustomer from './Pages/Customers/ViewCustomer/ViewCustomer';
import AddAdmin from './Pages/Admins/AddAdmin/AddAdmin';
import { useAuthContext } from './hooks/useAuthContext';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const { user } = useAuthContext();
  const navigate = useNavigate();
const {pathname} = useLocation();

const  [showside ,setShowSide] = useState(true);

useEffect(() => {
 if(pathname === "/login"){
  setShowSide(false)
 }
 if(!user && pathname !== "/login"){
  navigate("/login")
 }
}, [pathname])


  return (
    <>

    <Routes>
        <Route path='/login' element={!user ? <Login /> : <Dashboard /> } />  {/* Login route here */}
      </Routes>

      {showside && (
   <div style={{ display: 'flex' }}>
   <Sidebar />
   <div className='page' style={{ padding: '15px 0px', maxHeight: 'calc(100vh - 30px)', width: '100%' }}>
     <Routes>
       <Route path='/dashboard' element={user ? <Dashboard /> : <Login />} />
       <Route path='/pharmacies' element={<Pharmacies />} />
       <Route path='/inventory' element={<Inventory />} />
       <Route path='/products' element={<Products />} />
       <Route path='/customers' element={<Customers />} />
       <Route path='/purchase' element={<Purchase />} />
       <Route path='/reviews' element={<Reviews />} />
       <Route path='/admins' element={<Admins />} />
       <Route path='/settings' element={<Settings />} />
       <Route path='/notifications' element={<Notifications />} />
       <Route path='/products/addproduct' element={<AddProduct />} />
       <Route path='/products/editproduct/:id' element={<EditProduct />} />
       <Route path='/pharmacies/viewpharmacy/:id' element={<ViewPharmacy />} />
       <Route path='/customers/viewcustomer/:id' element={<ViewCustomer />} />
       <Route path='/admins/addadmin' element={<AddAdmin />} />
     </Routes>
   
   </div>
 </div>

      )}
   
    </>
  );
}

export default App;


