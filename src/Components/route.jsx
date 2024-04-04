import Dashboard from "../Pages/Dashboard"
import Pharmacies from "../Pages/Pharmacies"
import Products from "../Pages/Products"
import Inventory from "../Pages/Inventory"
import Customers from "../Pages/Customers"
import Reviews from "../Pages/Reviews"
import Purchase from "../Pages/Purchase"
import Admins from "../Pages/Admins"
import Settings from "../Pages/Settings"


export default route = [
    {
      component: <Dashboard />,
      path: "/Dashboard",
    }, 
    
    {
      component: <Pharmacies />,
      path: "/Pharmacies",  
    },
    
    {
     component: <Products />,
     path: "/Products",  
    },

    {
      component: <Inventory />,
      path: "/Inventory",  
    },

    {
       component: <Customers />,
       path: "/Customers",  
    },
    
    {
       component: <Reviews />,
       path: "/Reviews",  
    },

    {
       component: <Purchase />,
       path: "/Purchase",  
    },
    
    {
       component: <Admins />,
       path: "/Admins",  
    },

    {
       component: <Settings />,
       path: "/settings" 
    }
]