import React from 'react';
import Header from '../pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import toast, { Toaster } from 'react-hot-toast';
const LoginLayout = () => {
    return (
        <div>
            <Toaster position="top-center" />
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default LoginLayout;