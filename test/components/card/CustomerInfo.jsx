import React from 'react'

export default function CustomerInfo() {
  return (
    <div class="card">
               <div class="card-body">
                    <h4 class="card-title">My Information</h4>
                      <div class="form-group">
                        <label for="exampleInputUsername1">Full Name</label>
                        <input type="text" class="form-control" id="exampleInputUsername1" placeholder="Full Name" value="Demo User"disabled/>
                      </div>
                      <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email" value="usermail@email.com" disabled/>
                      </div>
                      <div class="form-group">
                        <label for="exampleInputEmail1">Phone Number</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Phone No" value="882828282829" disabled/>
                      </div>
                 </div>
        </div>
  )
}
