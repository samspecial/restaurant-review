import React, { useState } from 'react';

import Rating from '@material-ui/lab/Rating';
import expand from '../assets/expand.svg';
import axios from 'axios';
import styled from "styled-components";
import '../App.css';
import ReviewContainer from './ReviewContainer';

const Restaurant = ({ feed, reviews, getPlaceDetails }) => {
  const [toggle, toggleButton] = useState(false);

  const handleDropDown = (place_id) => {
    toggleButton(!toggle)
    console.log(toggle)
    console.log(reviews)
    getPlaceDetails(place_id);
  }

  // Review Form Event Handler
  const newReviewForm = (e) => {
    e.preventDefault();
  }
  return (

    <Div>
      <Image src={feed.icon} />
      <div>
        <h2>{feed.name}</h2>
        <p>{feed.vicinity.length >= 30 ? feed.vicinity.substring(0, 30) : feed.vicinity}</p>
        <small>{feed.open_now}</small>
        <Rating
          name="half-rating"
          precision={0.5}
          value={feed.rating}
          size="small"
          readOnly
        />
        <Icon src={expand} onClick={() => handleDropDown(feed.place_id)} />
        {toggle ? <ReviewContainer reviews={reviews} reviews={reviews} /> : null}
      </div>
    </Div>
  )
}

export default Restaurant;

const Div = styled.div`
width:50%;
height:auto;
background:#f7f7f7;
padding:0.5rem;

h2{
  font - weight: 700;
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
const Image = styled.img`
width:20%;
`;

const Icon = styled.img`
width:10%;
`;