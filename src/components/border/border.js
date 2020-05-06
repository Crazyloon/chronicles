import React from 'react';
import styles from './border.module.scss';

export const HorizontalBorder = ({classList, primaryColor, gradientDirection}) => {
  const classes = classList ? classList.join(' ') + ' ' : '';

  let color;
  switch(gradientDirection){
    case 'lr': color = primaryColor ? styles.plr : styles.slr;
      break; 
    case 'rl': color = primaryColor ? styles.prl : styles.srl;
      break; 
    case 'lb': color = primaryColor ? styles.plb : styles.slb;
      break; 
    case 'rb': color = primaryColor ? styles.prb : styles.srb;
      break;

    default: color = styles.plr;
  }
  
  return (
    <div className={classes + styles.horizontalBorder + ' ' + color}></div>
    );
  }
  
export const VerticalBorder = ({classList, primaryColor, gradientDirection}) => {
  const classes = classList ? classList.join(' ') + ' ' : '';
  
  let color;
  switch(gradientDirection){
    case 'lr': color = primaryColor ? styles.plr : styles.slr;
      break; 
    case 'rl': color = primaryColor ? styles.prl : styles.srl;
      break; 
    case 'lb': color = primaryColor ? styles.plb : styles.slb;
      break; 
    case 'rb': color = primaryColor ? styles.prb : styles.srb;
      break;

    default: color = styles.plr;
  }

  return ( 
    <div className={classes + styles.verticalBorder + ' ' + color}></div>
   );
}