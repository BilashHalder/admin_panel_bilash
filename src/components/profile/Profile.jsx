import React from 'react'
import AddNominee from '../Forms/AddNominee';
import NomineeList from '../Table/NomineeList';
import BankAccountsList from '../Table/BankAccountsList';
import AddBankAccount from '../Forms/AddBankAccount';
import CustomerInfo from '../card/CustomerInfo'
import CustomerDocument from '../card/CustomerDocument';
import ChangePassword from '../Forms/ChangePassword';
import ChangeImage from '../Forms/ChangeImage';



export default function Profile() {
  return (
    <div>
    <div class="row">
      <div class="col-md-6 grid-margin stretch-card">
        <CustomerInfo/>
      </div>
      <div class="col-md-6 grid-margin stretch-card">
       <CustomerDocument/>
      </div>
      <div class="col-md-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-md-6">             
             <h4 class="card-title">Bank Accounts</h4>
             <BankAccountsList/>
              </div>
              <div class="col-md-6">
              <div class="card-body">                  
                    <h4 class="card-title">Add New Bank Accounts</h4>
                    <AddBankAccount/>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-md-6">               
              <NomineeList/>
              </div>
              <div class="col-md-6">
             <AddNominee/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-md-6">               
             <ChangePassword/>
              </div>
              <div class="col-md-6">
             <div class="mt-5">
             <ChangeImage/>
             </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    </div>
  </div>
  )
}
