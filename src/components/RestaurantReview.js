import React, { useState } from "react";
import Rating from '@material-ui/lab/Rating';

const RestaurantReview = ({ reviews }) => {

  return <div>
    {reviews.map((review, index) => {
      <div key={index}>
        <h3>{review.author_name}</h3>
        <p>{review.text}</p>
        <Rating
          name="half-rating"
          precision={0.5}
          value={review.rating}
          size="small"
          readOnly
        />

        <button type="button">Add Review</button>
      </div>
    })}

  </div>

}

export default RestaurantReview;