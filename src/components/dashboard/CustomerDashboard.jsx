import React, { useEffect } from 'react'
import {useNavigate,Routes, Route,Outlet} from "react-router-dom";
import Footer from '../../components/layout/common/Footer'
import Sidebar from '../../components/layout/customer/Sidebar'
import Navbar from '../../components/layout/Navbar'
import {Helmet} from "react-helmet";
export default function CustomerDashboard() {
    let navigate = useNavigate();
    useEffect(()=>{
        if(localStorage.getItem("admin")==undefined)
        navigate('/notfound')
    })
  return (
    <div>
      <Helmet>
  <title>Creazione Admin Panel</title>
  <link rel="stylesheet" href="../assets/vendors/mdi/css/materialdesignicons.min.css"/>
    <link rel="stylesheet" href="../assets/vendors/flag-icon-css/css/flag-icon.min.css"/>
    <link rel="stylesheet" href="../assets/vendors/css/vendor.bundle.base.css"/>
    <link rel="stylesheet" href="../assets/vendors/jquery-bar-rating/css-stars.css" />
    <link rel="stylesheet" href="../assets/vendors/font-awesome/css/font-awesome.min.css" />
    <link rel="stylesheet" href="../assets/css/demo_1/style.css" />
    <link rel="shortcut icon" href="../assets/images/favicon.png" />

    <script src="../assets/vendors/js/vendor.bundle.base.js"></script>
    <script src="../assets/vendors/jquery-bar-rating/jquery.barrating.min.js"></script>
    <script src="../assets/vendors/chart.js/Chart.min.js"></script>
    <script src="../assets/vendors/flot/jquery.flot.js"></script>
    <script src="../assets/vendors/flot/jquery.flot.resize.js"></script>
    <script src="../assets/vendors/flot/jquery.flot.categories.js"></script>
    <script src="../assets/vendors/flot/jquery.flot.fillbetween.js"></script>
    <script src="../assets/vendors/flot/jquery.flot.stack.js"></script>
    <script src="../assets/js/off-canvas.js"></script>
    <script src="../assets/js/hoverable-collapse.js"></script>
    <script src="../assets/js/misc.js"></script>
    <script src="../assets/js/settings.js"></script>
    <script src="../assets/js/todolist.js"></script>
    <script src="../assets/js/dashboard.js"></script>
    <script src="../assets/js/tabs.js"></script>
    <script src="../assets/js/alerts.js"></script>
</Helmet>
         <div>
      <div>
        <div className="container-scroller">         
          <Sidebar />
          <div className="container-fluid page-body-wrapper">
            <Navbar />
            <div className="main-panel">
              <div className="content-wrapper pb-0">
               <Outlet/>
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
