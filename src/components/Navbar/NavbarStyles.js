import styled from "styled-components";
import { Container } from "../../globalStyles";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
background=transparent;
margin-bottom: -100px;
height:100px;
display:flex;
justify-content:center;
align-items:center;
font-size:1.2rem;
z-index:99;
width:100%;
position:absolute;



`

export const NavbarContainer = styled(Container)`
	display: flex;
	justify-content: start;
	align-items:center;
	height: 100px;
	
`;

export const NavLogo = styled(Link)`
	color: #fff;
	height:100%;
	width:500px;
	justify-self: flex-start;
	cursor: pointer;
	text-decoration: none;
	font-size: 1.2rem;
	display: flex;
	align-items: center;
	z-index: 99;
	img{
		height:50%;
		width:auto;
		fill:white;
		margin-right:0.8rem;
		
	}
	
`;

export const NavIcon = styled.img`
	margin-right: 0.2rem;
	width: 3rem;
`;

export const MobileIcon = styled.div`
	display: none;
	z-index: 99;
	@media screen and (max-width: 960px) {
		display: block;
		position: absolute;
		top: 5px;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`;

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	width: 100%;


	@media screen and (max-width: 960px) {
		flex-direction: column;
		width: 100%;
		height: 100vh;
		position: fixed;
		padding-top: 30%;
		top: 0;
		left: 0;
		opacity: ${({ show }) => (show ? 1 : 0)};
		visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
		transform: translateY(${({ show }) => (show ? '0' : '-10px')});
		transition: opacity 0.5s ease;
		background-color: #41d0e1;
	}
	> li:first-child {
		margin-left: auto;
	}
`;

export const NavItem = styled.li`
	height: 40px;
	cursor: pointer;
	
	@media screen and (max-width: 960px) {
		width: 100%;
		&:hover {
			border: none;
		}
	}
	
`;

export const NavLinks = styled.div`
	color: #fff;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0.5rem 1rem;
	height: 100%;
	position:relative;
	border-radius:10px;
	color:rgba(255,255,255,0.7);
	&:hover{
		color:white;
	}
	&:after {    
		background: none repeat scroll 0 0 transparent;
		bottom: 0;
		content: "";
		display: block;
		height: 2px;
		left: 50%;
		position: absolute;
		background: orange;
		color:orange;
		transition: width 0.3s ease 0s, left 0.3s ease 0s;
		width: 0;
		
	  }
	  &:hover:after { 
		width: 100%; 
		left: 0; 
		color:orange;
	  }
	@media screen and (max-width: 960px) {
		text-align: center;
		padding: 2rem;
		width: 100%;
		display: table;
		&:hover {
			border-bottom: none;
			color: #4b59f7;
			transition: all 0.3s ease;
		}
	}
`;

export const NavBtnLink = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	padding: 8px 16px;
	height: 50px;
	width:150px;
	color:white;
	border-radius:10px;
	border: solid 1px white;
	
`;


