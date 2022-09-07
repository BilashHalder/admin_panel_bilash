import React from 'react'
import AdminDashboard from '../../components/dashboard/AdminDashboard'
import Head from 'next/head'
import Script from 'next/Script'
export default function index() {
  return (
    <div>
      <Head>
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="stylesheet" href="./assets/vendors/mdi/css/materialdesignicons.min.css"/>
    <link rel="stylesheet" href="./assets/vendors/flag-icon-css/css/flag-icon.min.css"/>
    <link rel="stylesheet" href="./assets/vendors/css/vendor.bundle.base.css"/>
    <link rel="stylesheet" href="./assets/vendors/jquery-bar-rating/css-stars.css" />
    <link rel="stylesheet" href="./assets/vendors/font-awesome/css/font-awesome.min.css" />
    <link rel="stylesheet" href="./assets/css/demo_1/style.css" />
    <link rel="shortcut icon" href="./assets/images/favicon.png" />

      </Head>
   <AdminDashboard/>
   <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"  crossorigin="anonymous"></Script>
    <Script src="./assets/js/off-canvas.js"></Script>
    <Script src="./assets/js/hoverable-collapse.js"></Script>
    <Script src="./assets/js/misc.js"></Script>
    <Script src="./assets/js/settings.js"></Script>
    <Script src="./assets/js/todolist.js"></Script>
    <Script src="./assets/js/dashboard.js"></Script>
    <Script src="./assets/js/tabs.js"></Script>
    <Script src="./assets/js/alerts.js"></Script>
    
 
    </div>
  )
}
