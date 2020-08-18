import React, { useState } from 'react';

const AddRestaurant = (props) => {
  const initialState = {
    restuarantName: '',
    address: '',
    lat: '',
    long: '',
    ratings: [
      {
        stars: null,
        comment: ''
      }
    ]
  }

  const [restaurants, setRestaurants] = useState(initialState);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setRestaurants({ ...restaurants, [name]: value })
  }
  const addRestaurant = (event) => {
    event.preventDefault()
    console.log(restaurants)
    props.setRestaurant(restaurants)
    setRestaurants(initialState)
  }
  return (
    <form onSubmit={addRestaurant}>
      <label htmlFor='restuarantName'>Restaurant Name:
    <input id='restuarantName'
          type='text'
          name='restuarantName'
          onChange={handleChange}
          value={restaurants.restuarantName}
        />
      </label>
      <label htmlFor='address'>Address:
    <input id='address'
          type='text'
          name='address'
          onChange={handleChange}
          value={restaurants.address}
        />
      </label>
      <label htmlFor='lat'>Lat:
    <input id='lat'
          type='number'
          name='lat'
          onChange={handleChange}
          value={restaurants.lat}
        />
      </label>
      <label htmlFor='long'>Long:
    <input id='long'
          type='number'
          name='long'
          onChange={handleChange}
          value={restaurants.long}
        />
      </label>
      <button type='submit'>Add Restaurant</button>
    </form>
  )

}

export default AddRestaurant;