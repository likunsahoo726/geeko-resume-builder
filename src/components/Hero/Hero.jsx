import React from 'react';
import styles from './Hero.module.css';
// 1. Image ko yahan import karein
import heroImage from '../../assets/hero.png'; 

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.badge}>Build Your Future</span>
          <h1 className={styles.title}>
            Professional Resume Builder <br /> 
            <span>In Just Minutes</span>
          </h1>
          <p className={styles.desc}>
            Effortlessly create a job-winning resume with our easy-to-use 
            builder and professional templates.
          </p>
          <div className={styles.heroBtns}>
            <button className={styles.mainBtn}>Get Started</button>
            <button className={styles.secBtn}>View Samples</button>
          </div>
        </div>
        <div className={styles.imageBox}>
          {/* 2. src mein imported variable use karein */}
          <img 
            src={heroImage} 
            alt="Hero Preview" 
            className={styles.img}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;