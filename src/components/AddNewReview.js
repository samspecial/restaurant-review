import React from 'react';
import { useRestaurant } from './useRestaurant';
import Rating from "@material-ui/lab/Rating";
import { Form, Input, Button } from './RestaurantStyles';

export const AddNewReview = () => {
  const [values, handleChange] = useRestaurant({});
  return (
    <Form onSubmit={addRestaurant}>
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
        name="rating"
        defaultValue={0}
        value={values.rating}
        onChange={handleChange} />
      <button type='submit'>Add Restaurant</button>
    </Form>
  )
}

