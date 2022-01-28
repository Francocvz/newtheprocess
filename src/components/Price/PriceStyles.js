import styled from "styled-components";

export const PriceSection = styled.div`
margin-top:3rem;
width:100vw;
height:100vh;
display:flex;
justify-content:center;
align-items:center;
`

export const PriceContainer = styled.div`
width:80%;
height:80%;

`

export const PriceTop = styled.div`
height:30%;
background-color:white;

`

export const PriceBottom = styled.div`
height:70%;
display:flex;
justify-content:space-between;
display:flex;
align-items:center;

`
export const PriceCards = styled.div`
height:90%;
width:30%;
color:white;
border:solid 1px rgba(255,255,255,0.5);
display:flex;
flex-direction:column;
justify-content:start;
align-items:center;

.case1 {
    .un {
        background-color:orange;
    }
}
.case2{
    .un , .deux {
        background-color:orange;
    }
}
.case3 {
    .un , .deux, .trois {
        background-color:orange;
    }
}
`

export const Number = styled.div`
height:15%;
width:75px;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:end;
margin-bottom:1.5rem;

.container {
    display:flex;
}
div .un , .deux , .trois{
    height:20px;
    width:20px;
    border:solid 1px white;
    background-color:rgba(255,255,255,0.2)

    


}
`

export const CardsPrice = styled.div`
height:10%;
width:auto;
font-size:1.7rem;
font-weight:700;
margin-bottom:2rem;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
h5{
    font-size:1.7rem;

}
p{
    font-size:0.9rem;
    color:orange;
}

`

export const Duration = styled.div`
height:10%;
width:auto;

`

export const Type = styled.div `
height:10%;
width:auto;

`