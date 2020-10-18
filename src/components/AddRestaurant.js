import React, { useState } from 'react';
import { useRestaurant } from './useRestaurant';
import Rating from "@material-ui/lab/Rating";
import { Form, Input, Button } from './RestaurantStyles';
import uuid from 'react-uuid';

const AddRestaurant = ({ feeds, location, setFeeds, onClose }) => {

  //Setting state for new restaurants
  const [values, handleChange] = useRestaurant({
    restaurantName: '',
    vicinity: '',
  });
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
    if (!name || !vicinity || !rating) return alert("Empty fields not allowed");

    let cloneFeeds = JSON.parse(JSON.stringify(feeds));
    cloneFeeds.push(newRestaurant);
    setFeeds(cloneFeeds);
    alert(`${name} added Successful. check restaurant section`);
    onClose();
  }

  return (
    <Form onSubmit={addRestaurant}>
      <label htmlFor='restaurantName'>Restaurant Name:
    <Input id='restaurantName'
          type='text'
          name='restaurantName'
          onChange={handleChange}
          value={values.restaurantName}
        />
      </label>
      <label htmlFor='vicinity'>Address:
    <Input id='vicinity'
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
      <Button type='submit'>Add Restaurant</Button>
    </Form>
  )

}

export default AddRestaurant;