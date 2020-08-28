import React, { useState } from 'react';
import { useRestaurant } from './useRestaurant';
import Rating from "@material-ui/lab/Rating";
import uuid from 'react-uuid';

const AddRestaurant = ({ feeds, setFeeds, location }) => {

  //Setting state for new restaurants
  const [values, handleChange] = useRestaurant({ restaurantName: '', vicinity: '' });
  const [restaurantStatus, getStatus] = useState(false)
  const [star, setRating] = useState(0);

  const changeRating = (event, newValue) => {
    setRating(newValue);
  }

  // Create New Restaurant
  let place_id = uuid();

  const newRestaurant = {
    place_id: place_id,
    name: values.restaurantName,
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
    vicinity: values.vicinity,
    rating: star,
    geometry: {
      location: {
        lat: location.lat, //lat from the state
        lng: location.lng //lng from the state
      },
    },
  };

  const addRestaurant = (event) => {
    event.preventDefault()
    const { name, rating, vicinity } = newRestaurant;
    if (name && vicinity && rating) {

      let cloneFeeds = JSON.parse(JSON.stringify(feeds));
      cloneFeeds.push(newRestaurant);
      setFeeds(cloneFeeds)
      getStatus(true)
      alert(`${name} added Successful. check restaurant section `)
    } else {
      alert(`${name}, ${vicinity} and ${rating} can't be left blank.`)
    }
  }

  return (
    <form onSubmit={addRestaurant}>
      <label htmlFor='restaurantName'>Restaurant Name:
    <input id='restaurantName'
          type='text'
          name='restaurantName'
          onChange={handleChange}
          value={values.restaurantName}
        />
      </label>
      <label htmlFor='vicinity'>Address:
    <input id='vicinity'
          type='text'
          name='vicinity'
          onChange={handleChange}
          value={values.vicinity}
        /></label>
      <Rating
        precision={1}
        name="simple-controlled"
        value={star}
        onChange={changeRating} />
      <button type='submit'>Add Restaurant</button>
    </form>
  )

}

export default AddRestaurant;