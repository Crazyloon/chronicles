import React from 'react';
import Card from "../card/card";
import styles from './card-deck.module.scss'

const CardDeck = ({cards}) => {
  return ( 
    <section className='col-md-12'>
      <div className='card-deck mt-3'>
      {
        cards.map(card => {
          return <Card body={card.body} heading={card.heading}
                imgSrc={card.src} link={card.url}
          />
        })
      }
      </div>
    </section>
   );
}
 
export default CardDeck;