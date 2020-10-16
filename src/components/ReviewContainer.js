import React, { useState } from "react";
import RestaurantReview from "./RestaurantReview";

const ReviewContainer = ({ reviews }) => {
  
  return (
    <div className="contain">

      {reviews.map((review, index) => {
        return < RestaurantReview key={index} review={review} />
      })
      }
       <button type="button">Add Review</button>
    </div >

  )
}
export default ReviewContainer;