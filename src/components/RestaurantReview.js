import React, { useState } from "react";
import Rating from '@material-ui/lab/Rating';
import styled from "styled-components";

const RestaurantReview = ({ review }) => {
  return <Div>
    <h2>{review.author_name}</h2>
    <p>{review.text.length >= 70 ? review.text.substring(0, 70) : review.text}</p>
    <Rating
      name="half-rating"
      precision={0.5}
      value={review.rating}
      size="small"
      readOnly
    />
  </Div>

}

export default RestaurantReview;

const Div = styled.div`
// width:50%;
// height:auto;
// background:#f7f7f7;
// padding:0.5rem;

h2{
  font-weight: 700;
  font-size:1rem;
  margin:5px 0;
  color:#222;
}
p{
  font-size: 0.8rem;
  font-weight:500;
  margin:4px 0;
}
`;