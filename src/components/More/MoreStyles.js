import styled from "styled-components";

export const MoreSection = styled.div`
width:80%;
height:391px;
background-color:black;
position:relative;
display:flex;
color:white;
margin:6rem 150px;
justify-content:center;
align-items:center;
overflow:hidden;
border-radius:35px;
`

export const MoreImage = styled.img`
`


export const MoreTexteContainer = styled.div`
width:85%;
height:60%;
display:flex;
justify-content:center;

`

export const MoreTexte = styled.div`
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:start;
width:80%;

h2 {
    font-size:32px;
}

p{
    font-size:18px;
    line-height:28px;
}

btn {
    border:solid 1px white;
    border-radius:10px;
    height:44px;
    width:150px;
    display:flex;
    align-items:center;
    justify-content:center;
}
`
