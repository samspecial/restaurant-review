import React from 'react';
import logo from '../assets/Belle Affairs.png'
import styled from 'styled-components';

const Navigation = () => {
  return (
    <Nav>
      <img src={logo} alt="Best restaurant review site" />
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Login</a></li>
        <li><a href="#">Sign Up</a></li>
      </ul>
    </Nav>
  )
}
export default Navigation;

const Nav = styled.nav`
width:100%;
height:100px;
position:fixed;
background:#eee;
padding:20px 80px;
display:flex;
justify-content:space-between;
align-items:center;

img{
  width:10%;

}
ul{
  list-style-type:none;
  display:flex;
  width:70%;
  justify-content:flex-end;
 

}
  li{
    padding:10px 20px;
    color:white;
    font-weight:600;
    font-size:0.8rem;
  }
  li:last-child{
    border:1px solid #FF8B18;
  }

  li a{
    text-decoration:none;
    cursor:pointer;
    color:#FF8B18;
    padding:10px 20px;
    display:block;

  }
`;

