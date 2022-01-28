import styled from 'styled-components';


export const CardsSection = styled.div`
    height:100vh;
	width:100%;
	color:white;
	display:flex;
	justify-content:center;
	align-items:center;
	margin-top:3rem;
	
	
		

`;

export const CardsContainer = styled.div`
height:90%;
width:80%;
display:flex;
flex-direction:column;


`


export const CardsTop = styled.div`
height:20%;
width:100%;
background-color:black;
font-size:1.5rem;
color:orange;

h2 {
	font-size:3rem;
	font-weight:900;
	color:white;
}

h2 span {
	-webkit-text-fill-color: black;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
  
}

`

export const CardsBottom = styled.div`
height:100%;
width:100%;
display:flex;
justify-content:space-between;
margin-top:1rem;


`
export const CardsSchema = styled.div`
width:30%;
height:100%;

display:flex;
flex-direction:column;
justify-content:space-between;
filter:grayscale(100%);
	&:hover {
		filter:grayscale(0%);
	}
	

.img{
	position:relative;
	display:flex;
	flex-direction:column;
	width:auto%;
	height:69%;
	

	
	

	
	
	
	}
	.bottom-right {
		background-color:white;
		&:hover {
			&:before, &:after, &>:first-child:before, &>:first-child:after {
				position:absolute;
				width:50px;
				height: 50px;
				border-color:orange; /* or whatever colour */
				border-style:solid; /* or whatever style */
				content: ' ';
				
		}
		
		&:before  {top:-4px;right:-4px;border-width: 4px 4px 0px 0px}
		&:after {top:0;right:0;border-width: 0px 0px 0 0}
		&>:first-child:before {bottom:-4px;right:-4px;border-width: 0 4px 4px 0}
		&>:first-child:after {bottom:0;left:0;border-width: 0 0 0}
		}

		
		}
	.top-left {
		&:hover {
			&:before, &:after, &>:first-child:before, &>:first-child:after {
				position:absolute;
				width:50px;
				height: 50px;
				border-color:orange; /* or whatever colour */
				border-style:solid; /* or whatever style */
				content: ' ';
				
		}
		
		&:before  {top:-4px;left:-4px;border-width: 4px 0 0 4px}
		&:after {bottom:-4px;right:-4px;border-width: 0px 0px 0px 0px}
		&>:first-child:before {bottom:0;right:0;border-width: 0 4px 4px 0}
		&>:first-child:after {bottom:0;left:0;border-width: 0 0 0}
		}

		
		}

		.top-right {
			&:hover {
				&:before, &:after, &>:first-child:before, &>:first-child:after {
					position:absolute;
					width:50px;
					height: 50px;
					border-color:orange; /* or whatever colour */
					border-style:solid; /* or whatever style */
					content: ' ';
					
			}
			
			&:before  {top:0px;left:0px;border-width: 0px 0 0 0px}
			&:after {top:-4px;right:-4px;border-width: 4px 4px 0px 0px}
			&>:first-child:before {bottom:0;right:0;border-width: 0 0px 0px 0}
			&>:first-child:after {bottom:0;left:0;border-width: 0 0 0}
		}
	}
	
		
	


.text-bottom {
	display:flex;
	flex-direction:column;
	justify-content:space-between;
	width:auto;
	height:25%;
	font-weight:900;
	line-height:1;
	h2{
		height:20%;
	
		font-weight:900;
	}
	p {
		font-weight:900;
		display:flex;
	}
}

.text-top {
	display:flex;
	flex-direction:column;
	position:relative;
	width:auto;
	height:auto;
}

.text-bottom h2,.text-top h2{
	font-size:5rem;
-webkit-text-fill-color: black;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
  overflow:hidden;
  height:auto;
}
p{
	font-size:2rem;
	color: #fff;
   
}

`
export const CardsImg =styled.img`
height:100%;
width:100%;
object-fit:cover ;


}
`


