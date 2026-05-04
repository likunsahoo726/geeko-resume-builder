import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <h3>GEEKO<span>.</span></h3>
          <p>Precision-built for Pune's techies.</p>
        </div>
        <div className={styles.links}>
          <a href="#builder">Builder</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>© 2026 Geeko Builder.</p>
        
      </div>
    </footer>
  );
};

export default Footer;