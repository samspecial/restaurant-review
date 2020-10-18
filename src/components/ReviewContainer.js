import React, { useState } from "react";
import RestaurantReview from "./RestaurantReview";
import { Button } from './RestaurantStyles';
import { AddNewReview } from "./AddNewReview";
import '../App.css';

const ReviewContainer = ({ reviews, setReview }) => {
  // Set the state of the Review Form
  const [reviewForm, setReviewForm] = useState(false)
  console.log(reviews)
  const showReviewForm = event => {
    event.preventDefault();
    setReviewForm(!reviewForm);
  }

  return (
    <div className="contain">

      {reviews.map((review, index) => {
        return < RestaurantReview key={index} review={review} />
      })
      }
      <Button onClick={showReviewForm} type="button">Add Review</Button>
      {reviewForm ? <AddNewReview reviews={reviews} setReview={setReview} reviewForm={reviewForm} setReviewForm={setReviewForm} /> : null}
    </div >

  )
}
export default ReviewContainer;