import React from 'react';
import Header from '../../Components/header';

import CashFlowicon from "../../assets/images/Cashflow.svg";
import revenue from '../../assets/images/newRevenue.svg';
import DownArrow from '../../assets/images/newArrowDown.svg';
import UpArrow from '../../assets/images/newArrowUp.svg';

import Consumers from '../../assets/images/Users.svg';
import User from '../../assets/images/User.svg';
import { useLocation } from 'react-router-dom';
import AgentIcon from '../../assets/images/Bank.svg';
import pharmacyIcon from '../../assets/images/Pharmarcystore.svg';
import './module.dashboard.css';
import { DashboardData } from '../TableData';
import CashComponent from '../../Components/DashboardComponent/CashComponent';
import StakeholderComponent from '../../Components/DashboardComponent/StakeholderComponent';
import { DashboardCashData } from '../../Components/ComponentsData';
import TableComponent from '../../Components/CommonTableComponent/TableComponent';

const Dashboard = () => {
   
  const {pathname} = useLocation();
  console.log(pathname)


  return (
    <div>
       <Header  />

       <section className='categories'>
      <div className="cash">
        
      <CashComponent  topText="Total Cash Flow"
      cashImage={CashFlowicon}
      bottomText="N200,000"
      />
 <CashComponent
      topText="Total Revenue "
     bottomText="23"
    
     cashImage={revenue}
     />

<CashComponent
       topText="Total Cash Inflow"
       bottomText="1002"
      
       cashImage={DownArrow}
     
     />
    
    

     <CashComponent
      topText="Total Cash Outflow"
      bottomText="32"
     
      cashImage={UpArrow}
     />

        

      </div>

     <div className="stakeholder">
     <StakeholderComponent
      color="#FDF6ED"
      topText="4200"
      bottomText="Users"
      
      image={Consumers}
      />
    <StakeholderComponent
      color="#D6D6F6"
      topText="23"
      bottomText="Consumers"
      
      image={User}
      />
       <StakeholderComponent
      color="#E5F8ED"
      topText="1002"
      bottomText="Agents"
      image={AgentIcon}
      />
       <StakeholderComponent
      color="#FCEAEA"
      topText="32"
      bottomText="Pharmacies"
      
      image={pharmacyIcon}
      />
     </div>
       
       </section>



      <TableComponent
       pathname={pathname}
      topleftText="Frequently Purchased"
      showlast={true}
      placeholder="Search Products ..."
   Data={DashboardData}
   withImage={true}
        />
    </div>
  )
}

export default Dashboard;
