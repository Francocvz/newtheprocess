import styled from 'styled-components';

export const AboutSection = styled.div`
;
    display:flex;
    flex-direction:column;
    height:100vh;
    width:100vw;
    overflow:hidden;
    margin-top:4rem;
    justify-content:center;
    align-items:center;
    
	@media screen and (max-width: 768px) {
		padding: 70px 0;
		margin-top: 10rem;
	}
`;


export const AboutContainer = styled.div `
height:90%;
width:80%;
`


export const AboutTop = styled.div`
width:100%;
height:20%;

display:flex;
flex-direction:column;
justify-content:center;

h3{
    color:orange;
    font-size:1.5rem;
}
h2{
    font-weight:900;
    font-size:3rem;
    color:white;
}
h2 span {
	-webkit-text-fill-color: black;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
  
}
`

export const AboutBottom = styled.div`
width:100%;
height:75%;
display:flex;
flex-direction:row;
justify-content:space-between;
position:relative;

`

export const AboutImgContainer = styled.div`
height:100%;
width:100%;
    &:before, &:after, &>:first-child:before, &>:first-child:after {
        position:absolute;
        width:50px;
        height: 50px;
        border-color:orange; /* or whatever colour */
        border-style:solid; /* or whatever style */
        content: ' ';
        
}

&:before  {top:-4px;left:-4px;border-width: 4px 0px 0px 4px}
&:after {bottom:-4px;right:-4px;border-width: 0 4px 4px  0}
&>:first-child:before {bottom:-4px;right:-4px;border-width: 0 4px 4px 0}
&>:first-child:after {bottom:0;left:0;border-width: 0 0 0}
`
export const AboutImg =styled.img`
background-color:white;
display:flex;
height:100%;
width:90%;



`

export const AboutText=styled.div`
color:white;
display:flex;
;
flex-direction:column;
justify-content:center;
align-items:center;
height:100%;
width:100%;


h5,h3,p,btn {
    width:75%;
    
   
}
h5 {
    font-size:22px;
    
}
h3{
    font-size:44px;
    padding:20px 0;
    
}
p{
    font-size:18px;
    line-height:1.5
}

btn{
    margin-top:20px;
    border: solid 1px white;
    border-radius:6px;
    height:40px;
    width:120px;
    display:flex;
    justify-content:center;
    align-items:center;
    
}
`