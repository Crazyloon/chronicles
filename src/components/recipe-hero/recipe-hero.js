import React from 'react';
import styles from './recipe-hero.module.scss';

const recipeHero = ({hero, time, raiting, servings, name}) => {
  return (
    <div className={styles.recipeHero}>
      <div className={styles.recipeHeroWrapper}>
        <img className={styles.recipeImg} src={hero.src} alt={hero.alt || 'recipe image'} />
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
 
export default recipeHero;