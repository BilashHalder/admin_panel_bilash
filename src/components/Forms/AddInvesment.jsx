import React from 'react'

export default function AddInvesment() {
    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">Please Fill Invesment Details</h4>
                <form className="forms-sample">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="input-group mb-4">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">₹</div>
                                </div>
                                <input type="number" className="form-control" id="inlineFormInputGroupUsername2" placeholder="Ammount" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <select className="form-control" id="exampleSelectGender">
                                    <option>Select Nominee</option>
                                    <option>Nominee 1</option>
                                    <option>Nominee 2</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <select className="form-control" id="exampleSelectGender">
                                    <option>Select Bank Account</option>
                                    <option>123445555</option>
                                    <option>111112222</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-md-6 text-center">
                            <button type="submit" className="btn btn-primary mr-2"> Payment </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
