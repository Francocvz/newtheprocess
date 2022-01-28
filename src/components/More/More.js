import { MoreImage, MoreSection, MoreTexte, MoreTexteContainer } from "./MoreStyles"

const More = () => {
    return (
        <MoreSection>
            <MoreImage src={'./images/header.jpg'}/>
            <MoreTexteContainer>
                <MoreTexte>
                <h2>The best personal training around</h2>
                <p>I can help you get stronger and reach your goals with customised training programs and technique coaching. I also work with any existing or new injuries.</p>
                <btn>En Savoir Plus</btn>
                </MoreTexte>
            </MoreTexteContainer>
        </MoreSection>
    )
}

export default More