import React from 'react'

export default function Alerts() {
  return (
    <div class="col-12 grid-margin">
                <div class="card">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-4 col-sm-6 d-flex justify-content-center border-right">
                        <div class="wrapper text-center">
                          <h4 class="card-title">Alerts Popups</h4>
                          <p class="card-description">A basic message</p>
                          <button class="btn btn-outline-primary" onclick="showSwal('basic')">Click here!</button>
                        </div>
                      </div>
                      <div class="col-md-4 col-sm-6 d-flex justify-content-center border-right">
                        <div class="wrapper text-center">
                          <h4 class="card-title">Alerts Popups</h4>
                          <p class="card-description">A title with a text under</p>
                          <button class="btn btn-outline-primary" onclick="showSwal('title-and-text')">Click here!</button>
                        </div>
                      </div>
                      <div class="col-md-4 col-sm-6 d-flex justify-content-center">
                        <div class="wrapper text-center">
                          <h4 class="card-title">Alerts Popups</h4>
                          <p class="card-description">A success message!</p>
                          <button class="btn btn-outline-primary" onclick="showSwal('success-message')">Click here!</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  )
}
