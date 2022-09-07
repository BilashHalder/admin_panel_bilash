import React from 'react'

export default function Progress() {
  return (
    <div className="row mx-sm-0">
    <div className="col-md-12 mb-5 pt-2 border px-0">
      <div className="card rounded shadow-none">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-6 col-lg-5 d-lg-flex">
              <div className="user-avatar mb-auto">
                <img src="../../../assets/images/faces/face1.jpg" alt="profile image" className="profile-img img-lg rounded-circle"/>
                <span className="edit-avatar-icon"><i className="mdi mdi-camera"></i></span>
              </div>
              <div className="wrapper ps-lg-4">
                <div className="wrapper d-flex align-items-center">
                  <h4 className="mb-0 font-weight-semibold">Danny Santiago</h4>
                  <div className="badge badge-secondary text-dark mt-2 ms-2">Pro</div>
                </div>
                <div className="wrapper d-flex align-items-center font-weight-semibold text-muted">
                  <i className="mdi mdi-map-marker-outline me-2"></i>
                  <p className="mb-0 text-muted">San Francisco, California</p>
                </div>
                <div className="wrapper d-flex align-items-start pt-3">
                  <div className="badge badge-secondary text-dark me-2">
                    <i className="mdi mdi-check-circle-outline icon-sm"></i>
                  </div>
                  <div className="badge badge-secondary text-dark me-2">
                    <i className="mdi mdi-email-outline icon-sm"></i>
                  </div>
                  <div className="badge badge-secondary text-dark me-2">
                    <i className="mdi mdi-format-list-bulleted icon-sm"></i>
                  </div>
                  <div className="wrapper ps-2 d-none d-sm-block">
                    <h6 className="mt-n1 mb-0 font-weight-semibold">23455</h6>
                    <p className="text-muted">Viewers</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-5">
              <div className="d-flex align-items-center w-100">
                <p className="mb-0 me-3 font-weight-semibold">Progress</p>
                <div className="progress progress-md w-100">
                  <div className="progress-bar bg-success" role="progressbar" style={{width: "67%"}} aria-valuenow="67" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p className="mb-0 ms-3 font-weight-semibold">67%</p>
              </div>
              <p className="text-muted mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="col-sm-6 col-lg-2">
              <div className="wrapper d-flex">
                <button type="button" className="btn btn-sm btn-primary me-2">ASK</button>
                <button type="button" className="btn btn-sm btn-info">HIRE</button>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper border-top">
          <div className="card-body">
            <div className="row">
              <div className="col d-flex">
                <div className="d-inline-flex align-items-center justify-content-center border rounded-circle px-2 py-2 my-auto text-muted">
                  <i className="mdi mdi-traffic-light icon-sm my-0 "></i>
                </div>
                <div className="wrapper ps-3">
                  <p className="mb-0 font-weight-semibold text-muted">TOTAL TRAFFIC</p>
                  <h4 className="font-weight-semibold mb-0">350,897</h4>
                </div>
              </div>
              <div className="col d-flex">
                <div className="d-inline-flex align-items-center justify-content-center border rounded-circle px-2 py-2 my-auto text-muted">
                  <i className="mdi mdi-account-plus icon-sm my-0 "></i>
                </div>
                <div className="wrapper ps-3">
                  <p className="mb-0 font-weight-semibold text-muted">NEW USERS</p>
                  <h4 className="font-weight-semibold mb-0">2,356</h4>
                </div>
              </div>
              <div className="col d-flex">
                <div className="d-inline-flex align-items-center justify-content-center border rounded-circle px-2 py-2 my-auto text-muted">
                  <i className="mdi mdi-server-security icon-sm my-0 "></i>
                </div>
                <div className="wrapper ps-3">
                  <p className="mb-0 font-weight-semibold text-muted">SALES</p>
                  <h4 className="font-weight-semibold mb-0">927</h4>
                </div>
              </div>
              <div className="col d-flex">
                <div className="d-inline-flex align-items-center justify-content-center border rounded-circle px-2 py-2 my-auto text-muted">
                  <i className="mdi mdi-chart-arc icon-sm my-0 "></i>
                </div>
                <div className="wrapper ps-3">
                  <p className="mb-0 font-weight-semibold text-muted">PERFORMANCE</p>
                  <h4 className="font-weight-semibold mb-0 text-primary">49.65%</h4>
                </div>
              </div>
              <div className="col d-flex align-items-center">
                <div className="image-grouped ml-auto">
                  <img src="../../../assets/images/faces/face20.jpg" data-bs-toggle="tooltip" data-placement="top" title="" alt="profile image" data-original-title="Mary Sharp"/>
                  <img src="../../../assets/images/faces/face17.jpg" data-bs-toggle="tooltip" data-placement="top" title="" alt="profile image" data-original-title="Cory Medina"/>
                  <img src="../../../assets/images/faces/face14.jpg" data-bs-toggle="tooltip" data-placement="top" title="" alt="profile image" data-original-title="Clyde Hammond"/>
                  <div className="text-avatar" data-bs-toggle="tooltip" data-placement="top" title="" data-original-title="4 More Peoples"><span className="d-block pt-2">+4</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-12 mb-5 pt-2 border px-0">
      <div className="card rounded shadow-none">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-6 col-lg-5 d-lg-flex">
              <div className="user-avatar mb-auto">
                <img src="../../../assets/images/faces/face2.jpg" alt="profile image" className="profile-img img-lg rounded-circle"/>
                <span className="edit-avatar-icon"><i className="mdi mdi-camera"></i></span>
              </div>
              <div className="wrapper ps-lg-4">
                <div className="wrapper d-flex align-items-center">
                  <h4 className="mb-0 font-weight-semibold">Lelia Bowers</h4>
                </div>
                <div className="wrapper d-flex align-items-center font-weight-semibold text-muted">
                  <i className="mdi mdi-map-marker-outline me-2"></i>
                  <p className="mb-0 text-muted">Central African Republic</p>
                </div>
                <div className="wrapper d-flex align-items-start pt-3">
                  <div className="badge badge-secondary text-dark me-2">
                    <i className="mdi mdi-check-circle-outline icon-sm"></i>
                  </div>
                  <div className="badge badge-secondary text-dark me-2">
                    <i className="mdi mdi-email-outline icon-sm"></i>
                  </div>
                  <div className="badge badge-secondary text-dark me-2">
                    <i className="mdi mdi-format-list-bulleted icon-sm"></i>
                  </div>
                  <div className="wrapper ps-2 d-none d-sm-block">
                    <h6 className="mt-n1 mb-0 font-weight-semibold">23525</h6>
                    <p className="text-muted">Viewers</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-5">
              <div className="d-flex align-items-center w-100">
                <p className="mb-0 me-3 font-weight-semibold">Progress</p>
                <div className="progress progress-md w-100">
                  <div className="progress-bar bg-success" role="progressbar" style={{width: "45%"}} aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p className="mb-0 ms-3 font-weight-semibold">45%</p>
              </div>
              <p className="text-muted mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="col-sm-6 col-lg-2">
              <div className="wrapper d-flex">
                <button type="button" className="btn btn-sm btn-primary me-2">ASK</button>
                <button type="button" className="btn btn-sm btn-info">HIRE</button>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper border-top">
          <div className="card-body">
            <div className="row">
              <div className="col d-flex">
                <div className="d-inline-flex align-items-center justify-content-center border rounded-circle px-2 py-2 my-auto text-muted">
                  <i className="mdi mdi-traffic-light icon-sm my-0 "></i>
                </div>
                <div className="wrapper ps-3">
                  <p className="mb-0 font-weight-semibold text-muted">TOTAL TRAFFIC</p>
                  <h4 className="font-weight-semibold mb-0">443,235</h4>
                </div>
              </div>
              <div className="col d-flex">
                <div className="d-inline-flex align-items-center justify-content-center border rounded-circle px-2 py-2 my-auto text-muted">
                  <i className="mdi mdi-account-plus icon-sm my-0 "></i>
                </div>
                <div className="wrapper ps-3">
                  <p className="mb-0 font-weight-semibold text-muted">NEW USERS</p>
                  <h4 className="font-weight-semibold mb-0">3,433</h4>
                </div>
              </div>
              <div className="col d-flex">
                <div className="d-inline-flex align-items-center justify-content-center border rounded-circle px-2 py-2 my-auto text-muted">
                  <i className="mdi mdi-server-security icon-sm my-0 "></i>
                </div>
                <div className="wrapper ps-3">
                  <p className="mb-0 font-weight-semibold text-muted">SALES</p>
                  <h4 className="font-weight-semibold mb-0">345</h4>
                </div>
              </div>
              <div className="col d-flex">
                <div className="d-inline-flex align-items-center justify-content-center border rounded-circle px-2 py-2 my-auto text-muted">
                  <i className="mdi mdi-chart-arc icon-sm my-0 "></i>
                </div>
                <div className="wrapper ps-3">
                  <p className="mb-0 font-weight-semibold text-muted">PERFORMANCE</p>
                  <h4 className="font-weight-semibold mb-0 text-primary">34.43%</h4>
                </div>
              </div>
              <div className="col d-flex align-items-center">
                <div className="image-grouped ml-auto">
                  <img src="../../../assets/images/faces/face11.jpg" data-bs-toggle="tooltip" data-placement="top" title="" alt="profile image" data-original-title="Mary Sharp"/>
                  <img src="../../../assets/images/faces/face12.jpg" data-bs-toggle="tooltip" data-placement="top" title="" alt="profile image" data-original-title="Cory Medina"/>
                  <img src="../../../assets/images/faces/face23.jpg" data-bs-toggle="tooltip" data-placement="top" title="" alt="profile image" data-original-title="Clyde Hammond"/>
                  <div className="text-avatar" data-bs-toggle="tooltip" data-placement="top" title="" data-original-title="4 More Peoples"><span className="d-block pt-2">+4</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-12 mb-5 pt-2 border px-0">
      <div className="card rounded shadow-none">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-6 col-lg-5 d-lg-flex">
              <div className="user-avatar mb-auto">
                <img src="../../../assets/images/faces/face3.jpg" alt="profile image" className="profile-img img-lg rounded-circle"/>
                <span className="edit-avatar-icon"><i className="mdi mdi-camera"></i></span>
              </div>
              <div className="wrapper ps-lg-4">
                <div className="wrapper d-flex align-items-center">
                  <h4 className="mb-0 font-weight-semibold">Tommy Jenkins</h4>
                </div>
                <div className="wrapper d-flex align-items-center font-weight-semibold text-muted">
                  <i className="mdi mdi-map-marker-outline me-2"></i>
                  <p className="mb-0 text-muted">Bouvet Island</p>
                </div>
                <div className="wrapper d-flex align-items-start pt-3">
                  <div className="badge badge-secondary text-dark me-2">
                    <i className="mdi mdi-check-circle-outline icon-sm"></i>
                  </div>
                  <div className="badge badge-secondary text-dark me-2">
                    <i className="mdi mdi-email-outline icon-sm"></i>
                  </div>
                  <div className="badge badge-secondary text-dark me-2">
                    <i className="mdi mdi-format-list-bulleted icon-sm"></i>
                  </div>
                  <div className="wrapper ps-2 d-none d-sm-block">
                    <h6 className="mt-n1 mb-0 font-weight-semibold">34526</h6>
                    <p className="text-muted">Viewers</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-5">
              <div className="d-flex align-items-center w-100">
                <p className="mb-0 me-3 font-weight-semibold">Progress</p>
                <div className="progress progress-md w-100">
                  <div className="progress-bar bg-success" role="progressbar" style={{width: "77%"}} aria-valuenow="77" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p className="mb-0 ms-3 font-weight-semibold">77%</p>
              </div>
              <p className="text-muted mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="col-sm-6 col-lg-2">
              <div className="wrapper d-flex">
                <button type="button" className="btn btn-sm btn-primary me-2">ASK</button>
                <button type="button" className="btn btn-sm btn-info">HIRE</button>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper border-top">
          <div className="card-body">
            <div className="row">
              <div className="col d-flex">
                <div className="d-inline-flex align-items-center justify-content-center border rounded-circle px-2 py-2 my-auto text-muted">
                  <i className="mdi mdi-traffic-light icon-sm my-0 "></i>
                </div>
                <div className="wrapper ps-3">
                  <p className="mb-0 font-weight-semibold text-muted">TOTAL TRAFFIC</p>
                  <h4 className="font-weight-semibold mb-0">563,645</h4>
                </div>
              </div>
              <div className="col d-flex">
                <div className="d-inline-flex align-items-center justify-content-center border rounded-circle px-2 py-2 my-auto text-muted">
                  <i className="mdi mdi-account-plus icon-sm my-0 "></i>
                </div>
                <div className="wrapper ps-3">
                  <p className="mb-0 font-weight-semibold text-muted">NEW USERS</p>
                  <h4 className="font-weight-semibold mb-0">2,543</h4>
                </div>
              </div>
              <div className="col d-flex">
                <div className="d-inline-flex align-items-center justify-content-center border rounded-circle px-2 py-2 my-auto text-muted">
                  <i className="mdi mdi-server-security icon-sm my-0 "></i>
                </div>
                <div className="wrapper ps-3">
                  <p className="mb-0 font-weight-semibold text-muted">SALES</p>
                  <h4 className="font-weight-semibold mb-0">765</h4>
                </div>
              </div>
              <div className="col d-flex">
                <div className="d-inline-flex align-items-center justify-content-center border rounded-circle px-2 py-2 my-auto text-muted">
                  <i className="mdi mdi-chart-arc icon-sm my-0 "></i>
                </div>
                <div className="wrapper ps-3">
                  <p className="mb-0 font-weight-semibold text-muted">PERFORMANCE</p>
                  <h4 className="font-weight-semibold mb-0 text-primary">23.56%</h4>
                </div>
              </div>
              <div className="col d-flex align-items-center">
                <div className="image-grouped ml-auto">
                  <img src="../../../assets/images/faces/face8.jpg" data-bs-toggle="tooltip" data-placement="top" title="" alt="profile image" data-original-title="Mary Sharp"/>
                  <img src="../../../assets/images/faces/face7.jpg" data-bs-toggle="tooltip" data-placement="top" title="" alt="profile image" data-original-title="Cory Medina"/>
                  <img src="../../../assets/images/faces/face9.jpg" data-bs-toggle="tooltip" data-placement="top" title="" alt="profile image" data-original-title="Clyde Hammond"/>
                  <div className="text-avatar" data-bs-toggle="tooltip" data-placement="top" title="" data-original-title="4 More Peoples"><span className="d-block pt-2">+4</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-12 mb-5 pt-2 border px-0">
      <div className="card rounded shadow-none">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-6 col-lg-5 d-lg-flex">
              <div className="user-avatar mb-auto">
                <img src="../../../assets/images/faces/face6.jpg" alt="profile image" className="profile-img img-lg rounded-circle"/>
                <span className="edit-avatar-icon"><i className="mdi mdi-camera"></i></span>
              </div>
              <div className="wrapper ps-lg-4">
                <div className="wrapper d-flex align-items-center">
                  <h4 className="mb-0 font-weight-semibold">Ramiz Dedaković</h4>
                </div>
                <div className="wrapper d-flex align-items-center font-weight-semibold text-muted">
                  <i className="mdi mdi-map-marker-outline me-2"></i>
                  <p className="mb-0 text-muted">Saint Kitts and Nevis</p>
                </div>
                <div className="wrapper d-flex align-items-start pt-3">
                  <div className="badge badge-secondary text-dark me-2">
                    <i className="mdi mdi-check-circle-outline icon-sm"></i>
                  </div>
                  <div className="badge badge-secondary text-dark me-2">
                    <i className="mdi mdi-email-outline icon-sm"></i>
                  </div>
                  <div className="badge badge-secondary text-dark me-2">
                    <i className="mdi mdi-format-list-bulleted icon-sm"></i>
                  </div>
                  <div className="wrapper ps-2 d-none d-sm-block">
                    <h6 className="mt-n1 mb-0 font-weight-semibold">69434</h6>
                    <p className="text-muted">Viewers</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-5">
              <div className="d-flex align-items-center w-100">
                <p className="mb-0 me-3 font-weight-semibold">Progress</p>
                <div className="progress progress-md w-100">
                  <div className="progress-bar bg-success" role="progressbar" style={{width: "55%"}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p className="mb-0 ms-3 font-weight-semibold">55%</p>
              </div>
              <p className="text-muted mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="col-sm-6 col-lg-2">
              <div className="wrapper d-flex">
                <button type="button" className="btn btn-sm btn-primary me-2">ASK</button>
                <button type="button" className="btn btn-sm btn-info">HIRE</button>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper border-top">
          <div className="card-body">
            <div className="row">
              <div className="col d-flex">
                <div className="d-inline-flex align-items-center justify-content-center border rounded-circle px-2 py-2 my-auto text-muted">
                  <i className="mdi mdi-traffic-light icon-sm my-0 "></i>
                </div>
                <div className="wrapper ps-3">
                  <p className="mb-0 font-weight-semibold text-muted">TOTAL TRAFFIC</p>
                  <h4 className="font-weight-semibold mb-0">343,525</h4>
                </div>
              </div>
              <div className="col d-flex">
                <div className="d-inline-flex align-items-center justify-content-center border rounded-circle px-2 py-2 my-auto text-muted">
                  <i className="mdi mdi-account-plus icon-sm my-0 "></i>
                </div>
                <div className="wrapper ps-3">
                  <p className="mb-0 font-weight-semibold text-muted">NEW USERS</p>
                  <h4 className="font-weight-semibold mb-0">5,324</h4>
                </div>
              </div>
              <div className="col d-flex">
                <div className="d-inline-flex align-items-center justify-content-center border rounded-circle px-2 py-2 my-auto text-muted">
                  <i className="mdi mdi-server-security icon-sm my-0 "></i>
                </div>
                <div className="wrapper ps-3">
                  <p className="mb-0 font-weight-semibold text-muted">SALES</p>
                  <h4 className="font-weight-semibold mb-0">235</h4>
                </div>
              </div>
              <div className="col d-flex">
                <div className="d-inline-flex align-items-center justify-content-center border rounded-circle px-2 py-2 my-auto text-muted">
                  <i className="mdi mdi-chart-arc icon-sm my-0 "></i>
                </div>
                <div className="wrapper ps-3">
                  <p className="mb-0 font-weight-semibold text-muted">PERFORMANCE</p>
                  <h4 className="font-weight-semibold mb-0 text-primary">45.23%</h4>
                </div>
              </div>
              <div className="col d-flex align-items-center">
                <div className="image-grouped ml-auto">
                  <img src="../../../assets/images/faces/face13.jpg" data-bs-toggle="tooltip" data-placement="top" title="" alt="profile image" data-original-title="Mary Sharp"/>
                  <img src="../../../assets/images/faces/face14.jpg" data-bs-toggle="tooltip" data-placement="top" title="" alt="profile image" data-original-title="Cory Medina"/>
                  <img src="../../../assets/images/faces/face4.jpg" data-bs-toggle="tooltip" data-placement="top" title="" alt="profile image" data-original-title="Clyde Hammond"/>
                  <div className="text-avatar" data-bs-toggle="tooltip" data-placement="top" title="" data-original-title="4 More Peoples"><span className="d-block pt-2">+2</span></div>
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
