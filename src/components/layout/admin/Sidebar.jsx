import React from 'react'
import { Link } from 'react-router-dom'

export default function () {
  return (
<>

<nav class="sidebar sidebar-offcanvas" id="sidebar">
        <ul class="nav">
          <li class="nav-item nav-profile border-bottom">
            <Link to="#" class="nav-link flex-column">
              <div class="nav-profile-image">
                <img src="../assets/images/faces/face3.jpg" alt="profile" />
              </div>
              <div class="nav-profile-text d-flex ml-0 mb-3 flex-column">
                <span class="font-weight-semibold mb-1 mt-2 text-center">Admin</span>
              </div>
            </Link>
          </li>
          <li class="nav-item pt-3">
            <Link class="nav-link d-block" to="/">
              <img class="sidebar-brand-logo" src="./assets/images/logo.png" alt="" />
              <img class="sidebar-brand-logomini" src="./assets/images/logo-mini.png" alt="" />
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="">
              <i class="mdi mdi-compass-outline menu-icon"></i>
              <span class="menu-title">Dashboard</span>
            </Link>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#customer-menu" aria-expanded="false" aria-controls="ui-basic">
              <i class="mdi mdi-account-outline menu-icon"></i>
              <span class="menu-title">Manage Customer</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="customer-menu">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                  <Link class="nav-link" to="customer_add">Add New Customer</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="customers">All Customer</Link>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#transaction" aria-expanded="false" aria-controls="ui-basic">
              <i class="mdi mdi-currency-inr menu-icon"></i>
              <span class="menu-title">Transactions</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="transaction">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                  <Link class="nav-link" to="transaction_request">Request Transaction</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="tansaction_history">Transaction History</Link>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#employee" aria-expanded="false" aria-controls="ui-basic">
              <i class="fa fa-users menu-icon"></i>
              <span class="menu-title">Employee</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="employee">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                  <Link class="nav-link" to="employee_add">Add Employee</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="employees">All Employee</Link>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#associate" aria-expanded="false" aria-controls="ui-basic">
              <i class="fa fa-handshake-o menu-icon"></i>
              <span class="menu-title">Associate</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="associate">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                  <Link class="nav-link" to="associate_add">Add Associate</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="associates">All Associate </Link>
                </li>
              </ul>
            </div>
          </li>

          <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#invesment" aria-expanded="false" aria-controls="ui-basic">
              <i class="mdi mdi-cash menu-icon"></i>
              <span class="menu-title">Invesments</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="invesment">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                  <Link class="nav-link" to="invesments">All Invesments</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="pending_invesments">Pending Invesments </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="inevesment_request">Widthrw Request </Link>
                </li>
              </ul>
            </div>
          </li>

          <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#others" aria-expanded="false" aria-controls="ui-basic">
              <i class="mdi mdi-buffer menu-icon"></i>
              <span class="menu-title">Others</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="others">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                  <Link class="nav-link" to="salary">Salary</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="designation">Designation</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="change_pass">Change Password</Link>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="logout">
              <i class="fa fa-power-off menu-icon"></i>
              <span class="menu-title">Log Out</span>
            </Link>
          </li>
        </ul>
      </nav>
</>
    

  )
}
