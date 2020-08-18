import React from 'react';

const Restaurant = (props) => {
  return (
    <>

    Ratings: [{props.rating.stars}, {props.rating.comments}]

    </>
  )
}

export default Restaurant;