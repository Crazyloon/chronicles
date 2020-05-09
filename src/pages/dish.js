import React from 'react';
import HeroCarousel from '../components/carousel/carousel';

const Dish = ({heroes, gallery, recipie, steps, name, summary, time, tags, tools}) => {
  return ( 
    <section>
      <HeroCarousel heroes={heroes} />
    </section>
   );
}
 
export default Dish;