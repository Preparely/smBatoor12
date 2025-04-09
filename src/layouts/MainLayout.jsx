// MainLayout.jsx
import React from "react";
import Navbar from "./components/NaveBar/navbar";
import Sidebar from "./components/SideBar/sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex", marginTop: "57px" }}>
        <Sidebar />
        <div style={{ flexGrow: 1, padding: "16px" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
