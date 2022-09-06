import React from 'react'

export default function ImageWithCard(props) {
  return (
    <div>
        <div class="card">
                  <div class="card-body p-0">
                    <img class="img-fluid w-100" src={props.img} alt="" />
                  </div>
                  <div class="card-body px-3 text-dark">
                    <div class="d-flex justify-content-between">
                      <p class="text-muted font-13 mb-0">{props.heading}</p>
                      <i class="mdi mdi-heart-outline"></i>
                    </div>
                    <h5 class="font-weight-semibold">{props.subhead} </h5>
                    <div class="d-flex justify-content-between font-weight-semibold">
                      <p class="mb-0">
                        <i class="mdi mdi-star star-color pr-1"></i>{props.rating} </p>
                      <p class="mb-0">{props.price}</p>
                    </div>
                  </div>
                </div>
    </div>
  )
}
