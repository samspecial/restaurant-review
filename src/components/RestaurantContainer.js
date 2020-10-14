import React, { useState } from 'react';
import axios from 'axios';
import Restaurant from './Restaurant';
import styled from 'styled-components';


const RestaurantContainer = ({ feeds, filterRating }) => {
  const [review, setReview] = useState([]);

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

    <div className="contain">
      {feeds.map((feed, index) =>
        feed.rating <= filterRating ? (
          <Restaurant key={index} feed={feed} review={review} fiterRating={filterRating} getPlaceDetails={getPlaceDetails} />
        ) : (<span key={index}></span>))

      }
    </div>
  )
}

export default RestaurantContainer;
