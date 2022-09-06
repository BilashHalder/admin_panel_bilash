import React from 'react'

export default function AddBankAccount() {
  return (
    <form class="forms-sample">
    <div class="form-group">
      <input type="text" class="form-control" id="exampleInputUsername1" placeholder="Account No" />
    </div>
    <div class="form-group">
      <input type="email" class="form-control" id="exampleInputEmail1" placeholder="IFSC CODE" />
    </div>
    <button type="submit" class="btn btn-primary mr-2"> Save </button>
  </form>
  )
}
