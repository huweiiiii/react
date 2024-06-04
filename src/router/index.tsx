// import React from 'react';
// 导入路由依赖
import { useRoutes } from "react-router-dom";
// 导入懒加载组件方法
import LazyLoad from "./LazyLoad";

// 创建路由
export const routes = [
  {
    path: "/",
    element: LazyLoad(() => import("../views/Home"))
  },
  {
    path: "/login",
    element: LazyLoad(() => import("../views/login/Login"))
  },
  {
    path: "/Product/:id",
    element: LazyLoad(() => import("../views/Product"))
  },
  {
    path: "/admin",
    element:  LazyLoad(() => import("../views/admin/index")),
    // 配置子路由
    children: [
      {
        path: "",
        element: LazyLoad(() => import("../views/admin/Dash")),
      },
      {
        path: "order-list",
        element: LazyLoad(() => import("../views/admin/OrderList")),
      }
    ]
  },
   // 配置404页面
  {
    path: "*",
    element: LazyLoad(() => import("../views/NoMatch"))
  }
];
// 使用useRoutes 创建
export default function RouterView() {
  // 创建路由
  const elem = useRoutes(routes);
  // 返回接口
  return elem;
}
