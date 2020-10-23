import React, { useState } from 'react';
import { useRestaurant } from './useRestaurant';
import Rating from "@material-ui/lab/Rating";
import { Form, Input, Button } from './RestaurantStyles';
import '../App.css';

export const AddNewReview = ({ reviews, setReview, reviewForm, setReviewForm }) => {
  const [values, handleChange] = useRestaurant({
    author: "",
    text: "",
    rating: ""
  });

  const [star, setRating] = useState(0);

  const changeRating = (event, newValue) => {
    setRating(newValue);
  }
  // Create a new Review Object based on user input
  const newReview = {
    author_name: values.author,
    text: values.text,
    rating: star,
  }
  // Close Review Form after sunmission
  const closeReviewForm = () => {
    setReviewForm(!reviewForm);
  }

  const addReview = event => {
    event.preventDefault();
    const { author_name, text, rating } = newReview;
    if (!author_name || !text || !rating) return alert("Empty fields not allowed");
    let cloneReviews = JSON.parse(JSON.stringify(reviews));
    cloneReviews.push(newReview);
    setReview(cloneReviews);
    alert("Review successfully added.");
    closeReviewForm();
  }

  return (
    <Form review className={reviewForm ? "form-review" : "hide"} onSubmit={addReview}>
      <h3>Your Review Counts!!!</h3>
      <label htmlFor='author'>Author:
    <Input id='author'
          type='text'
          name='author'
          onChange={handleChange}
          value={values.author}
        />
      </label>
      <label htmlFor='text'>Comment:
    <Input id='text'
          type='text'
          name='text'
          onChange={handleChange}
          value={values.text}
        /></label>
      <Rating
        name="simple-controlled"
        precision={1}
        value={star}
        onChange={changeRating} />
      <Button onClose={closeReviewForm} type='submit'>Submit Review</Button>
    </Form>
  )
}

