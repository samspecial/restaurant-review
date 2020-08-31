import React from 'react';
import Rating from '@material-ui/lab/Rating';
import expand from './assets/expand.svg';
const Restaurant = (props) => {
  return (

    <div>
      {props.feeds.map((feed, index) =>
        feed.rating <= props.filterRating ? (
          <div key={index}>
            <img src={feed.icon} />
            <div>
              <h2>{feed.name}</h2>
              <p>{feed.vicinity.substring(0, 40)}</p>
              <small>{feed.open_now}</small>
              <Rating
                name="half-rating"
                precision={0.5}
                defaultValue={feed.rating}
                key={index}
                size="small"
                readOnly
              />
              <img src={expand} onClick={(event) => console.log("I have been clicked")} />
            </div>
          </div>
        ) : (<span key={index}></span>))

      }

    </div>
  )
}

export default Restaurant;