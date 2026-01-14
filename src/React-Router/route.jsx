import React, { Component } from "react";
import { createBrowserRouter } from "react-router-dom";
import RootLay from "./RootLayout";
import Home from "../Componet/Home";

 

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLay/>,
    children: [
        {
            index:true,
           Component: Home
        },
    
   
    ],
    
       
    
  },

  
]);
