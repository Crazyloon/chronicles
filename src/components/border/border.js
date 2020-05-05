import React from 'react';
import styles from './border.module.scss';

export const HorizontalBorder = ({classList}) => {
  const classes = classList ? classList.join(' ') + ' ' : '';

  return (
    <div className={classes + styles.horizontalBorder}></div>
    );
  }
  
export const VerticalBorder = ({classList}) => {
  const classes = classList ? classList.join(' ') + ' ' : '';
  
  return ( 
    <div className={classes + styles.verticalBorder}></div>
   );
}