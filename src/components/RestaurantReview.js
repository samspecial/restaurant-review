import React, { useState } from "react";

const RestaurantReview = ({ placeReview }) => {

  return <div key={index}>
    <h3>{placeReview.author_name}</h3>
    <p>{placeReview.text}</p>
    <Rating
      name="half-rating"
      precision={0.5}
      defaultValue={placeReview.rating}
      size="small"
      readOnly
    />

    <button onClick={newReviewForm} type="button">Add Review</button>
  </div>

}