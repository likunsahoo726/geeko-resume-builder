import React from 'react';
import styles from './Templates.module.css';
import { Crown, Zap, ShieldCheck, Trophy } from 'lucide-react';

const Templates = () => {
  const templateList = [
    { 
      id: 1, 
      name: "Google Standard", 
      tag: "FREE", 
      isPro: false, 
      score: 94,
      img: "https://images.pexels.com/photos/5989933/pexels-photo-5989933.jpeg",
      highlight: "Best for Tech Roles"
    },
    { 
      id: 2, 
      name: "Amazon Executive", 
      tag: "PRO", 
      isPro: true, 
      score: 99,
      img: "https://images.pexels.com/photos/5989926/pexels-photo-5989926.jpeg",
      highlight: "99% ATS Pass Rate"
    },
    { 
      id: 3, 
      name: "Goldman Sachs Clean", 
      tag: "PRO", 
      isPro: true, 
      score: 97,
      img: "https://images.pexels.com/photos/5989931/pexels-photo-5989931.jpeg",
      highlight: "Financial Sector Top Pick"
    },
  ];

  return (
    <section id="templates" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.topBadge}><Trophy size={14} /> INDUSTRY LEADERS</div>
          <h2>ATS-Optimized <span>Masterpieces</span></h2>
          <p>Verified designs that have helped 50,000+ candidates land interviews at FAANG companies.</p>
        </div>

        <div className={styles.grid}>
          {templateList.map((temp) => (
            <div key={temp.id} className={styles.card}>
              <div className={styles.imageBox}>
                <img src={temp.img} alt={temp.name} />
                <div className={styles.overlay}>
                  <button className={styles.useBtn}>Use This Layout</button>
                </div>
                <div className={styles.scoreBadge}>
                   <Zap size={14} fill="#6c5ce7" /> {temp.score}% Match
                </div>
              </div>
              
              <div className={styles.content}>
                <div className={styles.mainInfo}>
                  <h4>{temp.name}</h4>
                  <span className={temp.isPro ? styles.proTag : styles.freeTag}>{temp.tag}</span>
                </div>
                <div className={styles.highlights}>
                  <ShieldCheck size={14} color="#10b981" /> <span>{temp.highlight}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Templates;