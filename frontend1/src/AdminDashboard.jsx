  import React from "react";
  import { Route, Routes } from "react-router-dom";

  import NavbarAdmin from "./components/NavbarAdmin/NavbarAdmin";
  import Sidebar from "./components/Sidebar/Sidebar";
  import AddFood from "./pages/Add/AddFood";
  import ListFood from "./pages/List/ListFood";
  import OrdersView from "./pages/Orders/OrdersView";

  const AdminDashboard = () => {
    return (
      <div className="admin-container">
        <NavbarAdmin />
        <div className="admin-content">
          <Sidebar />
          <div className="admin-pages">
            <Routes>
              <Route path="add" element={<AddFood />} />
              <Route path="list" element={<ListFood />} />
              <Route path="orders" element={<OrdersView />} />
            </Routes>
          </div>
        </div>
      </div>
    );
  };

  export default AdminDashboard;
