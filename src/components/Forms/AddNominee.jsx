import React from 'react'

export default function AddNominee() {
    return (
        <div class="card-body">
            <h4 class="card-title">Add New Nominee</h4>
            <form class="forms-sample">
                <div class="form-group">
                    <input type="text" class="form-control" id="exampleInputUsername1" placeholder="Nominee Name" />
                </div>
                <div class="form-group">
                    <input type="date" class="form-control" id="exampleInputEmail1" placeholder="Date of Birth" />
                </div>
                <button type="submit" class="btn btn-primary mr-2"> Save </button>
            </form>
        </div>
    )
}
