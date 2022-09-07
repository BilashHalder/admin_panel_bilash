import React from 'react'

export default function NomineeList() {
  return (
    <div class="table-responsive">
      <h4 class="card-title">My Nominee's </h4>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>Full Name</th>
          <th>Date of Birth</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>My Nominee 1</td>
          <td>11/11/2000</td>
        </tr>
        <tr>
          <td>My Nominee 2</td>
          <td>11/11/2000</td>
        </tr>
        <tr>
          <td>My Nominee 3</td>
          <td>11/11/2000</td>
        </tr>
      </tbody>
    </table>
  </div>
  )
}
