import React from "react";
import styles from './hero.module.scss';


const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1>Welcome to our world!</h1>
      <h4>Where we take you on a journey through our lives.</h4>
    </section>
  );
};

export default Hero;
