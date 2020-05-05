import React from 'react';
import Card from "../card/card";
// import styles from './card-deck.module.scss'

const CardDeck = ({cards}) => {
  return ( 
    <section className='col-12 mt-4'>
      <div className='card-deck'>
      {
        cards.map((card, i) => {
          return <Card key={i} body={card.body} heading={card.heading}
                imgSrc={card.src} link={card.url}
          />
        })
      }
      </div>
    </section>
   );
}
 
export default CardDeck;