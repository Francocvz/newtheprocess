import {cardsOne , cardsTwo, cardsThree,cardsFour} from '../../data/CardsData'
import { CardsBottom, CardsContainer, CardsImg, CardsSchema, CardsSection ,  CardsSectionLeft, CardsSectionRight, CardsTop } from './CardsStyles'
import {CardsData} from '../../data/CardsData'

const Cards =() =>{
    return (
        <CardsSection>
            <CardsContainer>
            <CardsTop>
                <h5>CHOISIS TA SEANCE</h5>
                <h2>ENTRAINEMENTS <span>PERSONNALISE</span></h2>
            </CardsTop>
            <CardsBottom>
            
						<CardsSchema >
                            
                            <div className="img top-left">
                            <CardsImg src={"./images/bike.jpg"}/>
                            </div>
                            <div className="text-bottom">
                                <h2>0{CardsData[0].id}</h2>
							<p>{CardsData[0].title}</p>
                            </div>
                            
						
                         </CardsSchema>
						<CardsSchema >
                        <div className="text-top"><h2>0{CardsData[1].id}</h2>
                            <p>{CardsData[1].title}</p></div>
							<div className="img bottom-right">
                            <CardsImg src={"./images/cardioboxe.jpeg"}/>
                            </div>
                            
                            
						
                         </CardsSchema>
						<CardsSchema >
                        
                            <div className="img top-right">
                            <CardsImg src={"./images/mobilite.jpg"}/>
                            </div>
                            
                            <div className="text-bottom"><h2>0{CardsData[2].id}</h2>
							<p>{CardsData[2].title}</p></div>
						
                         </CardsSchema>
                         
            </CardsBottom>
            </CardsContainer>
            
        </CardsSection>
    )
}

export default Cards;