import React, { useEffect } from 'react'
import Footer from '../../components/layout/common/Footer'
import Sidebar from '../../components/layout/admin/Sidebar'
import Navbar from '../../components/layout/Navbar'

export default function AdminDashboard() {
    // let navigate = useNavigate();
    useEffect(()=>{
        // if(localStorage.getItem("admin")==undefined)
        // navigate('/notfound')
    })
  return (
    <div>
  
         <div>
      <div>
        <div className="container-scroller">         
          <Sidebar />
          <div className="container-fluid page-body-wrapper">
            <Navbar />
            <div className="main-panel">
              <div className="content-wrapper pb-0">
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
