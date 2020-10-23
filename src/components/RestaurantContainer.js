import React, { useState } from 'react';
import axios from 'axios';
import Restaurant from './Restaurant';
import styled from 'styled-components';


const RestaurantContainer = ({ feeds, filterRating }) => {

  return (
    <div className="contain">
      {feeds.map((feed) =>
        feed.rating <= filterRating ? (
          <Restaurant key={feed.place_id} feed={feed} fiterRating={filterRating} />
        ) : (<span key={feed.place_id}></span>))

      }
    </div>
  )
}

export default RestaurantContainer;
