import React, { useState } from "react";
import Rating from '@material-ui/lab/Rating';

const RestaurantReview = ({ review }) => {

  // return <div>
  //   {reviews.map((review, index) => {
  return <div>
    <h3>{review.author_name}</h3>
    <p>{review.text}</p>
    <Rating
      name="half-rating"
      precision={0.5}
      value={review.rating}
      size="small"
      readOnly
    />


  </div>

}

export default RestaurantReview;