import React from 'react'

import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'


function AdminWrapper() {
  return (
    <div>
      <>
         <Header/>
         <Main />
         <Outlet/>
         <Footer />
      </>
    </div>
  )
}

export default AdminWrapper