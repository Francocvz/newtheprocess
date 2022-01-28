import { PriceBottom,PriceContainer, PriceCards, PriceSection, PriceTop, Number, Duration, Type, CardsPrice } from "./PriceStyles";

const Price = () => {
    return(
        <PriceSection>
        <PriceContainer>
        <PriceTop>
                <h3>CHOISIS TON OFFRE</h3>
                <h2>PRIX DE NOS FORMULES </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nemo nihil architecto tempore aspernatur aliquid quis, corrupti asperiores similique, ab ut delectus odit fugiat sint!</p>
            </PriceTop>
            <PriceBottom>
                <PriceCards>
                <Number className='case1'>
                    <h4>Individuel</h4>
                        <div className="container">
                        <div className='un'> </div>
                        <div className='deux'></div>
                        <div className='trois'></div>
                        </div>
                    </Number>
                    <CardsPrice>
                        <h5>$60</h5>
                        <p> par seance coucou</p>
                    </CardsPrice>
                    <Duration>60 minutes </Duration>
                    <Type>Coach Personnel dedie</Type>
                    <Type>Suivi personnalise et adapte</Type>
                    <Type>En salle ou a domicile</Type>
                </PriceCards>
                <PriceCards>
                <Number className='case2'>
                <h4>Small Groupe</h4>
                        <div className='un'></div>
                        <div className='deux'></div>
                        <div className='trois'></div>
                    </Number>
                    <CardsPrice>$60
                    <p>par seance</p>
                    </CardsPrice>
                    <Duration>60 minutes</Duration>
                    <Type>Coaching Indiv</Type>
                    <Type>Coaching Indiv</Type>
                    <Type>Coaching Indiv</Type>
                </PriceCards>
                <PriceCards>
                    <Number className='case3'>
                    <h4>Programme Perso</h4>
                        <div className='un'></div>
                        <div className='deux'></div>
                        <div className='trois'></div>
                    </Number>
                    <CardsPrice>$60
                        <p>par seance</p>
                    </CardsPrice>
                    <Duration>60 minutes</Duration>
                    <Type>Coaching Indiv</Type>
                    <Type>Coaching Indiv</Type>
                    <Type>Coaching Indiv</Type>
                </PriceCards>
            </PriceBottom>
        </PriceContainer>
        </PriceSection>
            
    )
}

export default Price;