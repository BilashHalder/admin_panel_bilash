import React from 'react'

export default function ChangePassword() {
  return (

    <div class="card">
    <div class="card-body">
      <h4 class="card-title">Change Password</h4>
      <form class="form-sample">
        <div class="row">
        <div class="col-md-12">
            <div class="form-group row">
              <div class="col-sm-12">
                <input type="password" class="form-control" placeholder='Old password'/>
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group row">
              <div class="col-sm-12">
                <input type="password" class="form-control"  placeholder='New password'/>
              </div>
            </div>
          </div>
        </div>
        <button type="submit" class="btn btn-primary mr-2"> Save Password </button>
      </form>
    </div>
  </div>

  )
}
