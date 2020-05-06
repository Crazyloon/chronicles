import React from 'react';
import styles from "./card.module.scss";
import classNames from 'classnames';
import { HorizontalBorder } from '../border/border';


/**
 * Renders a Card component as a Link to another page
 * @param {string} imgSrc - URL to the card image
 * @param {string} heading - Heading text to render
 * @param {string} body - Body text to render
 * @param {string} link - URL to the page component
 * 
 * @example
 * return (
 *   <Card imgSrc={imgSrc} heading={headingText}
 *         body={bodyText} link={url} />
 * )
 */
const Card = ({imgSrc, heading, body, link}) => {

  const cardClasses = classNames(styles.card, 'card');

  return ( 
    <>
      <a href={link} className={cardClasses}>
          <img src={imgSrc} className="card-img-top" alt="..." />
          <HorizontalBorder primaryColor={true} gradientDirection={'rl'}/>
          <div className="card-body">
            <h5 className="card-title">{heading}</h5>
            <p className="card-text">{body}</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
      </a>
    </>
   );
}
 
export default Card;