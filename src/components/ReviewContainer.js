import React, { useState } from "react";
import RestaurantReview from "./RestaurantReview";
import { Button } from './RestaurantStyles';

const ReviewContainer = ({ reviews }) => {

  return (
    <div className="contain">

      {reviews.map((review, index) => {
        return < RestaurantReview key={index} review={review} />
      })
      }
      <Button type="button">Add Review</Button>
    </div >

  )
}
export default ReviewContainer;