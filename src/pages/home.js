import React from 'react';
import Hero from '../components/hero/hero';
import CardDeck from '../components/card-deck/card-deck';
import coffee from '../images/cooking/dalgona.jpg';
import dirtyShoes from '../images/travel/dirty-shoes.jpg'
import gym from '../images/fitness/fitness_01.jpg';

const cards = [
  {
    src: coffee,
    heading: 'Cooking',
    body: `Cooking is my favorite hobby and I want to share it with 
    my friends and family (I also love to make my boyfriend fat 😆)`,
    url: '/Cooking'
  },
  {
    src: dirtyShoes,
    heading: 'Travel Diary',
    body: `Adventure is the spice of life and nothing is more spicy 
    than travelling with my boo. 😂`,
    url: '/Travel'
  },
  {
    src: gym,
    heading: 'Well Being',
    body: `We're trying to keep our bodies healthy most of the time, 
    but as you may have seen, we love to eat sweet treats. 🏋`,
    url: '/Fitness'
  }
]

const HomePage = () => {
  return ( 
    <div>
      <Hero />
      <div className='container-lg'>
        <CardDeck cards={cards} />
      </div>
    </div>
   );
}
 
export default HomePage;