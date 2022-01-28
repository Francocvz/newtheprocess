import { Button, ButtonSection, FormulaireSection, Input, InputLeft, InputRight, InputSection } from "./FormulaireStyles"

const Formulaire = () => {
    return (
        <FormulaireSection>
            <InputSection>
            <InputLeft>
            <Input>
                <label htmlFor="name">Nom :
                </label>
                <input type="text"  id='name'name='name'/>
            </Input>
            <Input>
                <label htmlFor="prenom">Prenom :
                </label>
                <input type="text"  id='prenom'name='prenom'/>
            </Input>
            <Input>
            <label htmlFor="mail">Email</label>
            <input type="mail" />
            </Input>
            </InputLeft>
            <InputRight>
            <label htmlFor="message">Message:</label>
            <textarea name="Message" id="message" cols="30" rows="10"></textarea>
            </InputRight>
        </InputSection>
        <ButtonSection>
            <Button>
                <span>Send Message</span>
            </Button>
        </ButtonSection>
        </FormulaireSection>
    )
}

export default Formulaire