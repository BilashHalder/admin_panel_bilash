import React from 'react'
import Link from 'next/link'

export default function () {
  return (
<>

<nav class="sidebar sidebar-offcanvas" id="sidebar">
        <ul class="nav">
          <li class="nav-item nav-profile border-bothrefm">
            <a href="#" class="nav-link flex-column">
              <div class="nav-profile-image">
                <img src="../assets/images/faces/face3.jpg" alt="profile" />
              </div>
              <div class="nav-profile-text d-flex ml-0 mb-3 flex-column">
                <span class="font-weight-semibold mb-1 mt-2 text-center">Admin</span>
              </div>
            </a>
          </li>
          <li class="nav-item pt-3">
            <Link class="nav-link d-block" href="/">
              <>
              <img class="sidebar-brand-logo" src="./assets/images/logo.png" alt="" />
              <img class="sidebar-brand-logomini" src="./assets/images/logo-mini.png" alt="" />
              </>
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" href="">
             <>
             <i class="mdi mdi-compass-outline menu-icon"></i>
              <span class="menu-title">Dashboard</span>
             </>
            </Link>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-hrefggle="collapse" href="#cushrefmer-menu" aria-expanded="false" aria-controls="ui-basic">
              <i class="mdi mdi-account-outline menu-icon"></i>
              <span class="menu-title">Manage Cushrefmer</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="cushrefmer-menu">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                  <Link class="nav-link" href="cushrefmer_add">Add New Cushrefmer</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" href="cushrefmers">All Cushrefmer</Link>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-hrefggle="collapse" href="#transaction" aria-expanded="false" aria-controls="ui-basic">
              <i class="mdi mdi-currency-inr menu-icon"></i>
              <span class="menu-title">Transactions</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="transaction">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                  <Link class="nav-link" href="transaction_request">Request Transaction</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" href="tansaction_hishrefry">Transaction Hishrefry</Link>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-hrefggle="collapse" href="#employee" aria-expanded="false" aria-controls="ui-basic">
              <i class="fa fa-users menu-icon"></i>
              <span class="menu-title">Employee</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="employee">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                  <Link class="nav-link" href="employee_add">Add Employee</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" href="employees">All Employee</Link>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-hrefggle="collapse" href="#associate" aria-expanded="false" aria-controls="ui-basic">
              <i class="fa fa-handshake-o menu-icon"></i>
              <span class="menu-title">Associate</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="associate">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                  <Link class="nav-link" href="associate_add">Add Associate</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" href="associates">All Associate </Link>
                </li>
              </ul>
            </div>
          </li>

          <li class="nav-item">
            <a class="nav-link" data-hrefggle="collapse" href="#invesment" aria-expanded="false" aria-controls="ui-basic">
              <i class="mdi mdi-cash menu-icon"></i>
              <span class="menu-title">Invesments</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="invesment">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                  <Link class="nav-link" href="invesments">All Invesments</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" href="pending_invesments">Pending Invesments </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" href="inevesment_request">Widthrw Request </Link>
                </li>
              </ul>
            </div>
          </li>

          <li class="nav-item">
            <a class="nav-link" data-hrefggle="collapse" href="#others" aria-expanded="false" aria-controls="ui-basic">
              <i class="mdi mdi-buffer menu-icon"></i>
              <span class="menu-title">Others</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="others">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                  <Link class="nav-link" href="salary">Salary</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" href="designation">Designation</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" href="change_pass">Change Password</Link>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <Link class="nav-link" href="logout">
              <>
              <i class="fa fa-power-off menu-icon"></i>
              <span class="menu-title">Log Out</span>
              </>
            </Link>
          </li>
        </ul>
      </nav>
</>
    

  )
}
