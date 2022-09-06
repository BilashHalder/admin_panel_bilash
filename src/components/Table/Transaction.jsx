import React from 'react'

export default function Transaction() {
  return (
    <div>
      <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Recent Transaction</h4>
                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th>Transaction Id</th>
                            <th>Date & Time</th>
                            <th>Ammount</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>753811ea612968aa377bd6</td>
                            <td>22/02/2022</td>
                            <td className="text-danger"> 2,000 <i className="mdi mdi-arrow-down"></i>
                            </td>
                            <td>
                              <label className="badge badge-danger">Pending</label>
                            </td>
                          </tr>
                          <tr>
                            <td>753811ea612968aa377bd6</td>
                            <td>22/02/2022</td>
                            <td className="text-danger"> 21.06 <i className="mdi mdi-arrow-down"></i>
                            </td>
                            <td>
                              <label className="badge badge-warning">In progress</label>
                            </td>
                          </tr>
                          <tr>
                            <td>753811ea612968aa377bd6</td>
                            <td>22/02/2022</td>
                            <td className="text-danger"> 35.00 <i className="mdi mdi-arrow-down"></i>
                            </td>
                            <td>
                              <label className="badge badge-info">Fixed</label>
                            </td>
                          </tr>
                          <tr>
                            <td>753811ea612968aa377bd6</td>
                            <td>22/02/2022</td>
                            <td className="text-success"> 82.00 <i className="mdi mdi-arrow-up"></i>
                            </td>
                            <td>
                              <label className="badge badge-success">Completed</label>
                            </td>
                          </tr>
                          <tr>
                            <td>753811ea612968aa377bd6</td>
                            <td>22/02/2022</td>
                            <td className="text-success"> 98.05 <i className="mdi mdi-arrow-up"></i>
                            </td>
                            <td>
                              <label className="badge badge-warning">In progress</label>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
    </div>
  )
}
