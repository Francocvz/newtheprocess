import React from 'react'
import { HeaderSection,HeaderContainer,HeaderImage,HeaderText} from './HeaderStyles'


const  Header =()=> {
    return (
        <HeaderSection>
            <HeaderContainer>
                <HeaderText>
                    <h1>Nous vous aiderons personnellement à atteindre vos objectifs d'entraînement</h1>
                    <p>Our gym in Brisbane offers daily structured small group personal training sessions tailored to your level!</p>
                </HeaderText>
                <HeaderImage src={`./images/header.jpg`}/>
            </HeaderContainer>
        </HeaderSection>
    )
}

export default Header
