import React from 'react';
import Hero from '../components/hero/hero';

import CardDeck from '../components/card-deck/card-deck';
import coffee from '../images/dalgona.jpg';
import dirtyShoes from '../images/dirty-shoes.jpg'
import gym from '../images/fitness_01.jpg';

const cards = [
  {
    src: coffee,
    heading: 'Cooking',
    body: `Cooking is my favorite hobby and I want to share it with 
    my friends and family (I also love to make my boyfriend fat 😆)`,
    url: ''
  },
  {
    src: dirtyShoes,
    heading: 'Travel Diary',
    body: `Adventure is the spice of life and nothing is more spicy 
    than travelling with my boo. 😂`,
    url: ''
  },
  {
    src: gym,
    heading: 'Well Being',
    body: `We're trying to keep our bodies healthy most of the time, 
    but as you may have seen, we love to eat sweet treats. 🏋`,
    url: ''
  }
]

const HomePage = () => {
  return ( 
    <div>
      <Hero />
      <CardDeck cards={cards} />
    </div>
   );
}
 
export default HomePage;