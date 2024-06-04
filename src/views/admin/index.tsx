import React from "react";

import { NavLink, Outlet } from "react-router-dom";
function Admin() {
  return (
    <div>
      <h3>管理页面</h3>
      <NavLink to="">管理页面</NavLink>
      <NavLink to="order-list">概览页面</NavLink>
      <Outlet />
    </div>
  );
}
export default Admin;
