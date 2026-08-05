import React from 'react'
import {Outlet} from "react-router-dom"
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'
function Layout() {
  return (
    <div>
    <Navbar />
    <Outlet/>
    <Footer />
  
    </div>
  )
}

export default Layout
