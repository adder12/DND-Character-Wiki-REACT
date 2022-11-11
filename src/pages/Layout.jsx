import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "../Navbar";
import Banner from "../banner";
import ErrorBoundary from "../ErrorBoundary";


const Layout = () => {
    return (
        <>
       <ErrorBoundary>
        <Banner/>
        <Navbar />
        <Outlet/>
        </ErrorBoundary>
        </>
    )
}

export default Layout;