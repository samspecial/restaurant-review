import React, { useState } from 'react';
import Rating from '@material-ui/lab/Rating';
import expand from './assets/expand.svg';
import axios from 'axios';
import styled from "styled-components";


const Restaurant = ({ feeds, filterRating }) => {
  const [toggle, toggleButton] = useState(false);
  const [review, setReview] = useState([])

  const handleDropDown = (place_id) => {
    console.log(place_id)
    toggleButton(!toggle)
    getPlaceDetails(place_id);
  }

  const getPlaceDetails = ((place_id) => {
    axios.get(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&fields=name,rating,reviews,formatted_phone_number&key=AIzaSyAMDtC9Z6uMrTV_NsWjjdeskdGE5W-hITY`)
      .then(
      (response) => {
        let placesResult = response.data.result.reviews;
        console.log(placesResult)
        setReview(placesResult)
      })


  })
  return (

    <div>
      {feeds.map((feed, index) =>
        feed.rating <= filterRating ? (
          <Aside key={index}>
            <Image src={feed.icon} />
            <div>
              <h2>{feed.name}</h2>
              <p>{feed.vicinity.length >= 30 ? feed.vicinity.substring(0, 30) : feed.vicinity}</p>
              <small>{feed.open_now}</small>
              <Rating
                name="half-rating"
                precision={0.5}
                defaultValue={feed.rating}
                key={index}
                size="small"
                readOnly
              />
              <Icon src={expand} onClick={() => handleDropDown(feed.place_id)} />
              {toggle ? (review.map((placeReview, index) => {
                return <div key={index}>
                  <h3>{placeReview.author_name}</h3>
                  <h3>{placeReview.author_url}</h3>
                  <p>{placeReview.text}</p>
                  <small>{placeReview.rating}</small>
                </div>
              })) : null}
            </div>
          </Aside>
        ) : (<span key={index}></span>))

      }

    </div>
  )
}

export default Restaurant;

const Aside = styled.aside`
width:100%;
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
`
const Image = styled.img`
width:20%;
`

const Icon = styled.img`
width:10%;
`