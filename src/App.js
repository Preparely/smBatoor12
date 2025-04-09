// Login Code
import React from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

// Importing Components & Pages
import Navbar from "./components/NaveBar/navbar";
import Sidebar from "./components/SideBar/sidebar";
import Dashboard from "./pages/Dashboard/dashboard";
import OnlineOrder from "./pages/Online-Orders/ManageOrders";
import AllItems from "./pages/storeandproduct/AllItems";
import ManageandAdd_Store from "./pages/storeandproduct/ManageandAdd_Store";
import Manage_Product from "./pages/storeandproduct/Manage_Products";
import Payment from "./pages/Payment/payment";
import UserComplaints from "./pages/Comlaints/user_Complaints";
import MenuCard from "./pages/Menu/Menu_card";
import HelpAndSupport from "./pages/Setting/helpAndSupport";
import User_manage from "./pages/Customer/User-manage";
import RiderManage from "./pages/Customer/rider-manage";
import Rider from "./pages/Riders/Rider";
import Notification from "./pages/Notification/Notification";
import PerformanceChart from "./pages/Riders/Chart";
import AccountPage from "./pages/Setting/Account";
import AddStore from "./pages/storeandproduct/AddStore";
import AddItem from "./pages/storeandproduct/AddItem";
import RiderComplaints from "./pages/Comlaints/rider_Comalaints";
import Chat from "./pages/Setting/Chat";
import Login from "./pages/Login/login";
import CustomerTable from "./pages/Customer/User-manage";

// PrivateRoute Component: Only renders children if user is authenticated.
const PrivateRoute = () => {
  // Token can be stored in Redux state or sessionStorage.
  const token =
    useSelector((state) => state.auth.token) ||
    JSON.parse(sessionStorage.getItem("access"));
  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

// MainLayout Component: Contains Navbar, Sidebar and an Outlet for nested routes.
const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex", marginTop: "57px", background: "#F0F4F5" }}>
        <div style={{ width: "250px", flexShrink: 0 }}>
          <Sidebar />
        </div>
        <div style={{ flexGrow: 1, padding: "16px" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <Routes>
      {/* Public Route */}
      <Route path="/login" element={<Login />} />

      {/* Protected Routes */}
      <Route element={<PrivateRoute />}>
        <Route element={<MainLayout />}>
          {/* Protected Routes go here */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/stores/Notification" element={<Notification />} />
          <Route path="/stores/all-items" element={<AllItems />} />
          <Route path="/stores/Manage-&-Add-Store" element={<ManageandAdd_Store />} />
          <Route path="/stores/Add-Store" element={<AddStore />} />
          <Route path="/stores/Manage-Product" element={<Manage_Product />} />
          <Route path="/stores/AddItem" element={<AddItem />} />
          <Route path="/stores/Riders" element={<Rider />} />
          <Route path="/stores/PerformanceChart" element={<PerformanceChart />} />
          <Route path="/stores/Payment" element={<Payment />} />
          <Route path="/online-order" element={<OnlineOrder />} />
          <Route path="/stores/user_Complaints" element={<UserComplaints />} />
          <Route path="/stores/rider_Complaints" element={<RiderComplaints />} />
          <Route path="/stores/Menu_Card" element={<MenuCard />} />
          <Route path="/customer" element={<h1>Customer</h1>} />
          <Route path="/customer/rider-manage" element={<RiderManage />} />
          {/* <Route path="/customer/user-manage" element={<User_manage />} /> */}
          <Route path="/customer/customer-manage" element={<CustomerTable />} />
          <Route path="/settings/help_and_Support" element={<HelpAndSupport />} />
          <Route path="/settings/Chat" element={<Chat />} />
          <Route path="/settings/AccountPage" element={<AccountPage />} />
          <Route path="/menu" element={<h1>Menu</h1>} />
          <Route path="/complaints" element={<h1>Complaints</h1>} />
          <Route path="/sales-report" element={<h1>SalesReport</h1>} />
          <Route path="/update-menu" element={<h1>UpdateMenu</h1>} />
        </Route>
      </Route>

      {/* Fallback Route: Redirect to login if no match found */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;




// ?????????????????????????????????????????????????????????????????????????????????????????????
// import logo from './logo.svg';
// import { Route, Routes } from 'react-router-dom';
// import './App.css';
// import Navbar from './components/NaveBar/navbar';
// import Sidebar from '../src/components/SideBar/sidebar';
// import { Grid, Box } from '@mui/material';
// import Dashboard from './pages/Dashboard/dashboard';
// import OnlineOrder from './pages/Online-Orders/ManageOrders';
// import AllItems from './pages/storeandproduct/AllItems';
// import ManageandAdd_Store from './pages/storeandproduct/ManageandAdd_Store';
// import Manage_Product from './pages/storeandproduct/Manage_Products';
// import Payment from './pages/Payment/payment';
// import UserComplaints from './pages/Comlaints/user_Complaints';
// import MenuCard from './pages/Menu/Menu_card';
// import HelpAndSupport from './pages/Setting/helpAndSupport';
// import User_manage from './pages/Customer/User-manage';
// import RiderManage from './pages/Customer/rider-manage';
// import Rider from './pages/Riders/Rider';
// import Notification from './pages/Notification/Notification';
// import PerformanceChart from './pages/Riders/Chart';
// import AccountPage from './pages/Setting/Account';
// import AddStore from './pages/storeandproduct/AddStore';
// import AddItem from './pages/storeandproduct/AddItem';
// import RiderComplaints from './pages/Comlaints/rider_Comalaints';
// import Chat from './pages/Setting/Chat';

// function App() {
//   return (
//     <div className="App">
//       {/* Full-width Navbar */}
//       <Box sx={{ width: "100%", position: "fixed", top: 0, zIndex: 3 }}>
//         <Navbar />
//       </Box>

//       {/* Main Content Area */}
//       <Box sx={{ display: "flex", marginTop: "57px", background:'#F0F4F5' }}>
//         {/* Sidebar */}
//         <Box sx={{ width: "250px", flexShrink: 0 }}>
//           <Sidebar />
//         </Box>

//         {/* Main Content */}
//         <Box sx={{ flexGrow: 1, padding: "16px" }}>
//         <Routes>
//             <Route path="/" element={<Dashboard />} />
//             <Route path="/stores/Notification" element={<Notification />} />
//             <Route path="/stores/all-items" element={<AllItems />} />
//             <Route path="/stores/Manage-&-Add-Store" element={<ManageandAdd_Store />} />
//             <Route path="/stores/Add-Store" element={<AddStore />} />
//             <Route path="/stores/Manage-Product" element={<Manage_Product />} />
//             <Route path="/stores/AddItem" element={<AddItem />} />
//             <Route path="/stores/Riders" element={<Rider />} />
//             <Route path="/stores/PerformanceChart" element={<PerformanceChart />} />
//             <Route path="/stores/Payment" element={<Payment />} />
//             <Route path="/online-order" element={<OnlineOrder />} />
//             <Route path="/stores/user_Complaints" element={<UserComplaints />} />
//             <Route path="/stores/rider_Complaints" element={<RiderComplaints />} />
//             <Route path="/stores/Menu_Card" element={<MenuCard />} />
//             <Route path="/customer" element={<h1>Customer</h1>} />
//             <Route path="/customer/rider-manage" element={<RiderManage />} />
//             <Route path="/customer/user-manage" element={<User_manage />} />
//             {/* Setting */}
//             <Route path="/settings/help_and_Support" element={<HelpAndSupport />} />
//             <Route path="/settings/Chat" element={<Chat />} />
//             <Route path="/settings/AccountPage" element={<AccountPage />} />


//             <Route path="/menu" element={ <h1>Menu</h1> } />
//             <Route path="/complaints" element={<h1>Complaints </h1>} />
//             <Route path="/sales-report" element={ <h1> SalesReport</h1>} />
//             <Route path="/update-menu" element={ <h1>UpdateMenu</h1>} />
//           </Routes>
//         </Box>
//       </Box>
//     </div>
//   );
// }

// export default App;



