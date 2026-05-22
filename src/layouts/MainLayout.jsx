import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';
import CustomCursor from '../components/CustomCursor/CustomCursor';


const MainLayout = () => {
    return (
        <div>
            <CustomCursor />
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;