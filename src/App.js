import React from 'react'
import { Routes, Route,Link ,Router,Outlet} from "react-router-dom";
import AssociateLogin from './components/AssociateLogin';
import AdminLogin from './components/AdminLogin';
import CustomerLogin from './components/CustomerLogin';
import EmployeeLogin from './components/EmployeeLogin';
import NotFound from './components/NotFound';
import AdminDashboard from './components/dashboard/AdminDashboard';
import CustomerDashboard from './components/dashboard/CustomerDashboard';
import AssociateDashboard from './components/dashboard/AssociateDashboard';
import EmployeeDashboard from './components/dashboard/EmployeeDashboard';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/admin" element={<AdminDashboard />}>
          
        <Route path="customer_add" element={<p>Customer add</p>} />
                  <Route path="customers" element={<p>Customer List</p>} />
                  <Route path="transaction_request" element={<p>req tran</p>} />
                  <Route path="tansaction_history" element={<p>tran his</p>} />
                  <Route path="employee_add" element={<p>add emp</p>} />
                  <Route path="employees" element={<p>emp lis</p>} />
                  <Route path="associate_add" element={<p>add ass</p>} />
                  <Route path="associates" element={<p>ass list</p>} />
                  <Route path="invesments" element={<p>add inve</p>} />
                  <Route path="pending_invesments" element={<p>inv pen</p>} />
                  <Route path="inevesment_request" element={<p>inv req</p>} />
                  <Route path="salary" element={<p>sal</p>} />
                  <Route path="designation" element={<p>desg</p>} />
                  <Route path="change_pass" element={<p>change pass</p>} /> 

        </Route>
        <Route path="/customer" element={<CustomerDashboard />}>
          <Route path="search" element={<Search />} />
          <Route path="list" element={<List/>}/>
        </Route>

        <Route path="/associate" element={<AssociateDashboard />}>
          <Route path="search" element={<Search />} />
          <Route path="list" element={<List/>}/>
        </Route>

        <Route path="/employee" element={<EmployeeDashboard />}>
          <Route path="search" element={<Search />} />
          <Route path="list" element={<List/>}/>
        </Route>


      </Routes>

  </div>
  )
}


const Search = () => {
  return (
    <div className='Search'>
      <h2>You are inside the Search Component</h2>
      <h4>URL: localhost:3000/courses/search</h4>
    </div>
  )
}
const List = () => {
  return (
    <div className='List'>
      <h2>You are inside the List Component</h2>
      <h4>URL: localhost:3000/courses/list</h4>
    </div>
  )
}
