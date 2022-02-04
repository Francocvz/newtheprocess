import {
  CardsBottom,
  CardsContainer,
  CardsImg,
  CardsSchema,
  CardsSection,
  CardsTop,
} from "./CardsStyles";
import { CardsData } from "../../data/CardsData";
import Marquee from "../Marquee/Marquee";
import { useState } from "react";

const Cards = () => {
  return (
    <CardsSection>
      <CardsContainer>
        <Marquee title={"SEANCES"} />
        <CardsTop>
          <h4>LES SEANCES SONT ADAPTEES A VOS BESOINS </h4>
        </CardsTop>
        <CardsBottom>
          <div className="item item-1">
            <CardsSchema>
              <div className="img top-left">
                <CardsImg src={"./images/bike.jpg"} />
              </div>
              <div className="text-bottom">
                <p>{CardsData[0].title}</p>
                <div className="invisible">
                  <p>Ici du texte</p>
                  <p>description de la seance</p>
                  <p>utilite</p>
                  <p>a reflechir</p>
                </div>
                <h2>0{CardsData[0].id}</h2>
              </div>
            </CardsSchema>
          </div>
          <div className="item item-2">
            <CardsSchema>
              <div className="img bottom-right">
                <CardsImg src={"./images/cardioboxe.jpeg"} />
              </div>
              <div className="text-bottom">
                <p>{CardsData[1].title}</p>
                <h2>0{CardsData[1].id}</h2>
                <div className="invisible">
                  <p>Ici du texte</p>
                  <p>description de la seance</p>
                  <p>utilite</p>
                  <p>a reflechir</p>
                </div>
              </div>
            </CardsSchema>
          </div>
          <div className="item item-3">
            <CardsSchema>
              <div className="img top-right">
                <CardsImg src={"./images/mobilite.jpg"} />
              </div>

              <div className="text-bottom">
                <p>{CardsData[2].title}</p>
                <div className="invisible">
                  <p>Ici du texte</p>
                  <p>description de la seance</p>
                  <p>utilite</p>
                  <p>a reflechir</p>
                </div>
                <h2>0{CardsData[2].id}</h2>
              </div>
            </CardsSchema>
          </div>
        </CardsBottom>
      </CardsContainer>
    </CardsSection>
  );
};

export default Cards;
