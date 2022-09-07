import React from 'react'
import { Link } from 'react-router-dom'

export default function () {
  return (
    <nav class="sidebar sidebar-offcanvas" id="sidebar">
        <ul class="nav">
          <li class="nav-item nav-profile border-bottom">
            <Link to="#" class="nav-link flex-column">
              <div class="nav-profile-image">
                <img src="./assets/images/faces/face3.jpg" alt="profile" />
              </div>
              <div class="nav-profile-text d-flex ml-0 mb-3 flex-column">
                <span class="font-weight-semibold mb-1 mt-2 text-center">User Name</span>
                <span class="text-secondary icon-sm text-center">₹ 3499.00</span>
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
            <Link class="nav-link" to="/dashboard">
              <i class="mdi mdi-compass-outline menu-icon"></i>
              <span class="menu-title">Dashboard</span>
            </Link>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#emp-menu" aria-expanded="false" aria-controls="ui-basic">
              <i class="mdi mdi-account-outline menu-icon"></i>
              <span class="menu-title">Manage Customer</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="emp-menu">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                  <Link class="nav-link" to="/withdrwn">Add New Customer</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/deposit">All Customer</Link>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#ui-basic2" aria-expanded="false" aria-controls="ui-basic">
              <i class="mdi mdi-currency-inr menu-icon"></i>
              <span class="menu-title">My Transactions</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="ui-basic2">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                  <Link class="nav-link" to="/withdrwn">Withdrwn History</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/deposit">Deposit History</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/all_transaction">All Transaction</Link>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/invesments">
              <i class="mdi mdi-cash menu-icon"></i>
              <span class="menu-title">Invesments</span>
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/profile">
              <i class="mdi mdi-format-list-bulleted menu-icon"></i>
              <span class="menu-title">Profile</span>
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/logout">
              <i class="mdi mdi-chart-bar menu-icon"></i>
              <span class="menu-title">Log Out</span>
            </Link>
          </li>
        </ul>
      </nav>
  )
}
