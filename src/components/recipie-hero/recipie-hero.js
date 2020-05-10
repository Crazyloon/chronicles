import React from 'react';
import styles from './recipie-hero.module.scss';

const RecipieHero = ({hero, time, raiting, servings, name}) => {
  return (
    <div className={styles.recipieHero}>
      <div className={styles.recipieHeroWrapper}>
        <img className={styles.recipieImg} src={hero.src} alt={hero.alt || 'recipie image'} />
        <h3>{name}</h3>
        <div>★★★★★</div>
        <div className={styles.time}>
          <span>Total: {time.prep + time.cook} minutes</span>
          <span>Prep: {time.prep} minutes</span>
          <span>Cook: {time.cook} minutes</span>
        </div>
        <div>Servings: {servings}</div>
      </div>
    </div>
  );
}
 
export default RecipieHero;