import React from 'react'

export default function Invesments() {
  return (
    <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Invesment History</h4>
                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th>Invesment Id</th>
                            <th>Ammount</th>
                            <th>Return</th>
                            <th>Nominee</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="py-1">198204934</td>
                            <td> ₹ 5000.00</td>
                            <td> 5 %</td>
                            <td>Nominee 1</td>
                            <td>May 15, 2015</td>
                            <td class='text-success'>Active</td>
                            <td>
                            <button type="button" class="btn btn-info btn-icon-text"> Print <i class="mdi mdi-printer btn-icon-append"></i> </button>
                           </td>
                          </tr>
                          <tr>
                            <td className="py-1">198204934</td>
                            <td> ₹ 5000.00</td>
                            <td> 5 %</td>
                            <td>Nominee 1</td>
                            <td>May 15, 2015</td>
                            <td class='text-danger'>Dispatched</td>
                            <td><button type="button" class="btn btn-info btn-icon-text"> Print <i class="mdi mdi-printer btn-icon-append"></i> </button> </td>
                          </tr>
                          <tr>
                            <td className="py-1">198204934</td>
                            <td> ₹ 5000.00</td>
                            <td> 5 %</td>
                            <td>Nominee 1</td>
                            <td>May 15, 2015</td>
                            <td class='text-info'>Processing</td>
                            <td><button type="button" class="btn btn-info btn-icon-text"> Print <i class="mdi mdi-printer btn-icon-append"></i> </button> </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
  )
}
