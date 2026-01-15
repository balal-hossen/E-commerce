import React, { Component } from "react";
import { createBrowserRouter } from "react-router-dom";
import RootLay from "./RootLayout";
import Home from "../Componet/Home";
import Login from "../LoginSystem/Login";
import Register from "../LoginSystem/Register";

 

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
        }
    
   
    ],
    
       
    
  },

  
]);
