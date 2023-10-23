import React from 'react';
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer"
import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <>
        <Header />
        {/* it uses layout as base stucture. */}
        {/* where you use the Outlet then their you can render component dynamically. */}
        {/* Outlet is used for rendering component dynamically. */}
        {/* if you want top two component behave like static, so you can use Outlet after rendering those two component. */}
        {/* its up to you how you wanna render components. */}
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout