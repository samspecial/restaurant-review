import styled from 'styled-components';

export const Form = styled.form`
width:50%;
height:300px;
box-shadow:0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.24),0 10px 10px rgba(0,0,0,0.23), 0 10px 10px rgba(0,0,0,0.22);
padding:1rem 0.5rem;
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:flex-start;
background-color:white !important;
margin:0 auto;

h3{
    font-weight:600;
    align-text:left;
    color:#34628C;
    margin-bottom:20px;
}

label{
    margin-bottom:0.5rem;
    font-size:0.85rem;
}
`;

export const Input = styled.input`
width:100%;
height:30px;
background:transparent;
color: #34628C;
border-radius:5px;
border: 1px solid #34628C;
padding-top:5px;
padding-left:5px;
display:block;
font-weight:400;
margin-top:0.7rem;
`;

export const Button = styled.button`
width:100px;
height:30px;
padding:5px 7px;
background-color:#34628C;
color:white;
font-size:12px;
border:none;
box-shadow: 4px 8px 8px grey, 2px 6px 6px #34628C;
border-radius:5px;
margin-top:30px;
margin-right: 15px;
opacity:0;
animation:fadeUp 0.2s ease-in-out 0.7s forwards;

:hover{
    background-color:white;
    color:#34628C;
}
@keyframes fadeUp{
    from{
        opacity:0;
        transform:translateY(20px)
    }
    to{
        opacity:1;
        transform:translateY(0)
    }
}

@media only screen and (min-width: 480px) and (max-width:768px){
        width:120px;
        font-size:16px;
        height:40px;
} 

@media only screen and (min-width:769px){
     width:150px;
     font-size:16px;
     font-weight:bold;
     height:45px;
}
`;
