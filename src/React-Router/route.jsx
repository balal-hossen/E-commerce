import React, { Component } from "react";
import { createBrowserRouter } from "react-router-dom";
import RootLay from "./RootLayout";
import Home from "../Componet/Home";
import Login from "../LoginSystem/Login";
import Register from "../LoginSystem/Register";
import AdminRoute from "../AuthProvider/AdminRoute";
import DashboardLayout from "../AdminDashboard/DashboardLayout";

 

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLay/>,
    children: [
        {
            index:true,
           Component: Home
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/signup",
          element:<Register/>
        },
      
     {
    path: "/admin",
    element: (
      <AdminRoute>
        <DashboardLayout />
      </AdminRoute>
    ),
  },
    
   
    ],
    
    
     
    
    
    
       
    
  },

  
]);
