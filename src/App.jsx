

import  { useEffect,useState } from 'react';
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
import Coupons from './Pages/Coupons/Coupons';
import ViewStaff from './Pages/Coupons/ViewStaffPage/ViewStaff';


function App() {

  return (
    <Router >
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [showSide, setShowSide] = useState(user && pathname !== "/login");
console.log(user)
  useEffect(() => {
    if (!user && pathname !== "/login") {
      navigate("/login");
    } else if (user && pathname === "/login") {
      navigate("/dashboard");
    }
  }, [user, pathname, navigate]);


  useEffect(() => {
    setShowSide(user && pathname !== "/login");
  }, [user, pathname]);

  return (
    <>
      <Routes>
        <Route path='/login' element={!user ? <Login /> : <Dashboard />} /> 
      </Routes>

      {showSide && (
        <div style={{ display: 'flex' }}>
          <Sidebar />
          {/* <div>{user.token}</div> */}
          <div className='page' style={{ padding: '15px 0px', maxHeight: 'calc(100vh - 30px)', width: '100%' }}>
            <Routes>
              <Route path='/dashboard' element={user ? <Dashboard /> : <Login/>} />
              <Route path='/pharmacies' element={<Pharmacies />} />
              <Route path='/inventory' element={<Inventory />} />
              <Route path='/products' element={<Products />} />
              <Route path='/customers' element={<Customers />} />
              <Route path='/purchase' element={<Purchase />} />
              <Route path='/reviews' element={<Reviews />} />
              <Route path='/admins' element={<Admins />} />
              <Route path='/settings' element={<Settings />} />
              <Route path='/notifications' element={<Notifications />} />
              <Route path='/coupons' element={<Coupons />} />
              <Route path='/products/addproduct' element={<AddProduct />} />
              <Route path='/products/editproduct/:id' element={<EditProduct />} />
              <Route path='/pharmacies/viewpharmacy/:id' element={<ViewPharmacy />} />
              <Route path='/customers/viewcustomer/:id' element={<ViewCustomer />} />
              <Route path='/admins/addadmin' element={<AddAdmin />} />
              <Route path='/coupons/viewstaff/:id' element={<ViewStaff />} />
             
              
            </Routes>
          </div>
        </div>
      )}
    </>
  );
}

export default App;


