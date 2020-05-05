import React from 'react';
import styles from './footer.module.scss';

const Footer = () => {
  return ( 
    <div className={styles.footer}>
      <div>
        &copy; {new Date().getFullYear()} 
      </div>
    </div>
   );
}
 
export default Footer;