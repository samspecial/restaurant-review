import React, { useState } from 'react';

import styled from 'styled-components';

const SearchRestaurant = (props) => {


  const handleChange = (event) => {
    setValue(event.target.value)
  }

  //Getting User's Position
  return (

    <React.Fragment>

    </React.Fragment>
  )
}
export default SearchRestaurant;

const Form = styled.form`
  width:50%;
div{
 width:100%;
 display:inline-block;
 background:white;
 position:relative;
 border-radius:5px;
 margin-top:1rem;
} 
input{
  display:inline-block;
  border:1px solid #fff;
  outline:0;
  font-size:1rem;
  color:#555;
  background-color:transparent;
  margin:0;
  padding:0.5rem;
  width:100%;
  height:46px;
  border-radius:5px;
}
button{
  display:inline-block;
    position:absolute;
    top:0;
    right:0;
    width:120px;
    height:40px;
    background-color:#FE8B18;
    font-size:0.7rem;
    text-align: center;
    margin:3px 3px 3px 0;
    padding:0;
    outline:0;
    border:0;
    color:white;
    cursor:pointer;
    border-radius:5px;
}
`;