import React from 'react';
import { useRestaurant } from './useRestaurant';

export const AddNewReview = () => {
  const [values, handleChange] = useRestaurant({});
  return (
    <form>
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
          name="rating"
          defaultValue={0}
          value={values.rating}
          onChange={handleChange} />
        <button type='submit'>Add Restaurant</button>
      </form>
    </form>
  )
}

// const Div = styled.div`
// width:50%;
// height:auto;
// background:#f7f7f7;
// padding:0.5rem;

// h2{
//   font - weight: 700;
//   font-size:1rem;
//   margin:5px 0;
//   color:#222;
// }
// p{
//   font-size: 0.8rem;
//   font-weight:500;
//   margin:4px 0;
// }
// `;
// const Image = styled.img`
// width:20%;
// `;

// const Icon = styled.img`
// width:10%;
// `;