import React from 'react';
import logo from '../assets/Belle Affairs.png'
import styled from 'styled-components';

const Navigation = () => {
  return (
    <Nav>
      <img src={logo} alt="Best restaurant review site" />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Login</li>
        <li>Sign Up</li>
      </ul>
    </Nav>
  )
}
export default Navigation;

const Nav = styled.nav`
width:100%;
height:100px;
// position:sticky;
background:transparent;
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
    border:1px solid white;
  }

`;

// const ListItem = styled.ul`
// list-style-type:none;
// display:flex;
// width:70%;
// justify-content:flex-end;

// li{
//   padding:0 20px;
// }

// `;
