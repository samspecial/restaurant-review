import React, { useState } from "react";
import RestaurantReview from "./RestaurantReview";

const ReviewContainer = ({ toggle, review }) => {
  // const [toggle, toggleButton] = useState(false);
  const [reviewForm, toggleReviewForm] = useState(false);
  return (

    { console.log(toggle) }
    < div className = "contain" >
      {!toggle ? (review.map((placeReview, index) => {
        <RestaurantReview placeReview={placeReview} />
      })) : null
}
    </div >

  )
}
export default ReviewContainer;