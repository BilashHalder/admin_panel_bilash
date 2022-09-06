import React from 'react'
import ImageWithCard from './card/ImageWithCard'
import Footer from './layout/Footer'
import Navbar from './layout/Navbar'
import Sidebar from './layout/Sidebar'
import Home from './Home'
import Header from './layout/Header'
import Transaction from './Table/Transaction'
import Invesments from './Table/Invesments'
import Profile from './profile/Profile'
import AddInvesment from './Forms/AddInvesment'
import Tabs from './Tabs'
import Invoice from './Invoice'
import Alerts from './Alerts'
import TicketInfo from './TicketInfo'
export default function Demo() {
  return (
    <div>
          <div class="container-scroller">
          <Sidebar/>
      <div class="container-fluid page-body-wrapper">
        
        <Navbar/>
        <div class="main-panel">
        <div class="content-wrapper pb-0">
            <Header/>
            {/* <Transaction/> */}
            {/* <Invesments/> */}
            {/* <Home/> */}
            {/* <Profile/> */}
            {/* <AddInvesment/> */}
            {/* <Tabs/> */}
            {/* <Invoice/> */}
            {/* <Alerts/> */}
            <TicketInfo/>
          </div>
      <Footer/>
        </div>
      </div>
    </div>
    </div>
  )
}
