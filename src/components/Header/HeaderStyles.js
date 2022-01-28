import styled from 'styled-components';
import { Section } from '../../globalStyles';
import { motion } from 'framer-motion';

export const HeaderSection =styled(Section)`
    
	z-index: 11;
	align-items: center;
	height: 100vh;
	position: relative;
	display: flex;
    overflow:hidden;
    
	
`
export const HeaderContainer = styled.div`

height:87vh;
width:calc(100vw * 0.91);
display:flex;
position:absolute;
left:9%;
top:100px;
overflow:hidden;

@media screen and (max-width:62em) {
    width: 100%;
    left:0;
}
@media screen and (max-width: 43em) {
    width: 100%;
    left:0;
}
`;

export const HeaderText = styled.div`
width:45em;
position:absolute;
top:20%;
z-index:100;

 h1{
    font-size:4rem;
    margin-bottom:2rem;
    line-height:1;
    overflow:hidden;
}

p{
    width:18em;
    font-size:22px;
}
@media screen and (max-width:62em) {
    max-width:100%;
    height: auto;
}
@media screen and (max-width: 43em) {
    max-width:100%;
    height: auto;
}
`;

export const HeaderImage =styled.img`
width:62em;
height:100%;
position:absolute;
right:0;

@media screen and (max-width:62em) {
    max-width:100%;
    height: auto;
}
@media screen and (max-width: 43em) {
    max-width:100%;
    height: auto;
    
}
`;
