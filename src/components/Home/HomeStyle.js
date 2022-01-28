import styled from "styled-components";

export const HomeSection = styled.div `
width:100vw;
height:100vh;
background: url(./images/home.jpg)  no-repeat center center ;
-webkit-background-size: cover;
-moz-background-size: cover;
-o-background-size: cover;
background-size: cover;
display:flex;
justify-content:start;
align-items:center;



`

export const HomeTitle = styled.div`
width:50%;
height:50%;
margin-left:10rem;

*{
    margin-bottom:1.8rem;
    overflow:hidden;
}

.black {
    -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
}

h1 {
    font-size:4rem;
    font-weight:900;
    line-height:1;
    color:white;

}
p{
    width:60%;
    color:rgba(255,255,255,0.7);
}

.btn {
    width:120px;
    height:50px;
    font-size:22px;
    display:flex;
    justify-content:center;
    align-items:center;
    border:solid 1px orange;
    color:orange;
}
`