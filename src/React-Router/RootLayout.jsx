import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Componet/Navbar';
import Footer from '../Componet/Footer';


const RootLayout = () => {
  return (
    <div className=''>
      < Navbar /> 
      <Outlet />
      <Footer/> 
    </div>
  );
};

export default RootLayout;
