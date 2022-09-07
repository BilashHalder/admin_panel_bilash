import React from 'react'
import {useNavigate} from "react-router-dom";
export default function CustomerLogin() {
  let navigate = useNavigate();
  const handleForm=(event)=>{
      event.preventDefault();
    localStorage.setItem("associate", event.target.email_phone.value);
      navigate('/customer_dashboard');
  }
  return (
    <div className="container-scroller">
    <div className="container-fluid page-body-wrapper full-page-wrapper">
      <div className="content-wrapper d-flex align-items-center auth">
        <div className="row flex-grow">
          <div className="col-lg-4 mx-auto">
            <div className="auth-form-light text-left p-3">
              <div className="brand-logo text-center mb-4">
                <img src="./assets/images/logo.png"/>
              </div>
              <h4 className="text-center">Customer Log In</h4>
              <form className="pt-3" onSubmit={handleForm}>
                
                <div className="form-group">
                  <input type="text" className="form-control form-control-lg" name="email_phone" placeholder="Email Id / phone No"/>
                </div>
                <div className="form-group">
                  <input type="password" className="form-control form-control-lg" name="pass" placeholder="Password"/>
                </div>
                <div className="mt-3">
                  <button className="btn btn-block btn-primary btn-lg font-weight-semibold auth-form-btn" >SIGN UP</button>
                </div>
                
              </form>
              <div className="text-center mt-4 font-weight-light"> Forget Password? <button className="btn btn-link">Click Here</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
