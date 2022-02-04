import {
  PriceBottom,
  PriceContainer,
  PriceCards,
  PriceSection,
  PriceTop,
  Number,
  Duration,
  Type,
  CardsPrice,
  TextContainer,
} from "./PriceStyles";

import Marquee from "../Marquee/Marquee";

const Price = () => {
  return (
    <PriceSection>
      <PriceContainer>
        <Marquee title={"TARIFS"} />
        <PriceTop>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
        </PriceTop>
        <PriceBottom>
          <div className="item">
            <PriceCards>
              <div className="cards-top">
                <Number className="case1">
                  <h4>SEANCE Individuel</h4>
                </Number>
                <CardsPrice>
                  <h5>€40</h5>
                  <p> Par seance</p>
                </CardsPrice>
              </div>
              <div className="textContainer">
                <Type>
                  <div className="check">
                    <img src="./images/check2.svg" alt="" />
                  </div>
                  Coaching Indiv
                </Type>
                <Type>
                  <div className="check">
                    <img src="./images/check2.svg" alt="" />
                  </div>
                  Coaching Indiv
                </Type>
                <Type>
                  <div className="check">
                    <img src="./images/check2.svg" alt="" />
                  </div>
                  Coaching Indiv
                </Type>
                <Type>
                  <div className="check">
                    <img src="./images/check2.svg" alt="" />
                  </div>
                  Coaching Indiv
                </Type>
              </div>
              <btn className="btn btn-three">CONTACT</btn>
            </PriceCards>
          </div>
          <div className="item">
            <PriceCards>
              <div className="cards-top">
                <Number className="case1">
                  <h4>Seance small groupe</h4>
                </Number>
                <CardsPrice>
                  <h5>€25</h5>
                  <p> Par personne</p>
                </CardsPrice>
              </div>
              <div className="textContainer">
                <Type>
                  <div className="check">
                    <img src="./images/check2.svg" alt="" />
                  </div>
                  Coaching Indiv
                </Type>
                <Type>
                  <div className="check">
                    <img src="./images/check2.svg" alt="" />
                  </div>
                  Coaching Indiv
                </Type>
                <Type>
                  <div className="check">
                    <img src="./images/check2.svg" alt="" />
                  </div>
                  Coaching Indiv
                </Type>
                <Type>
                  <div className="check">
                    <img src="./images/check2.svg" alt="" />
                  </div>
                  Coaching Indiv
                </Type>
              </div>
              <btn className="btn btn-three">CONTACT</btn>
            </PriceCards>
          </div>
          <div className="item">
            <PriceCards>
              <div className="cards-top">
                <Number className="case1">
                  <h4>programme perso</h4>
                </Number>
                <CardsPrice>
                  <h5>€40</h5>
                  <p> Par mois</p>
                </CardsPrice>
              </div>
              <div className="textContainer">
                <Type>
                  <div className="check">
                    <img src="./images/check2.svg" alt="" />
                  </div>
                  Coaching Indiv
                </Type>
                <Type>
                  <div className="check">
                    <img src="./images/check2.svg" alt="" />
                  </div>
                  Coaching Indiv
                </Type>
                <Type>
                  <div className="check">
                    <img src="./images/check2.svg" alt="" />
                  </div>
                  Coaching Indiv
                </Type>
                <Type>
                  <div className="check">
                    <img src="./images/check2.svg" alt="" />
                  </div>
                  Coaching Indiv
                </Type>
              </div>
              <btn className="btn btn-three">CONTACT</btn>
            </PriceCards>
          </div>
        </PriceBottom>
      </PriceContainer>
    </PriceSection>
  );
};

export default Price;
