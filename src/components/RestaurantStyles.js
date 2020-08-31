import styled from 'styled-components';

export const Form = styled.form`
width:400px;
height:300px;
box-shadow:0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.24),0 10px 10px rgba(0,0,0,0.23), 0 10px 10px rgba(0,0,0,0.22);
padding:1rem;
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:flex-start;
background-color:white !important;
margin:0 auto;
`;

export const Input = styled.input`
width:100%;
height:40px;
background:transparent;
color: #3F3D56;
border-radius:5px;
border: 1px solid #3F3D56;
padding-top:15px;
padding-left:5px;
display:block;
font-weight:bold;
`;

export const Button = styled.button`
width:100px;
height:30px;
padding:5px 7px;
background-color:#3F3D56;
color:white;
font-size:12px;
border:none;
box-shadow: 4px 8px 8px grey, 2px 6px 6px #3F3D56;
border-radius:5px;
margin-top:30px;
margin-right: 15px;
opacity:0;
animation:fadeUp 0.5s ease-in-out 0.7s forwards;

:hover{
    background-color:white;
    color:#3F3D56;
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
     width:130px;
     font-size:16px;
     font-weight:bold;
     height:45px;
}
`;
