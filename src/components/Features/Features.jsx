import React from 'react';
import styles from './Features.module.css';
import { Zap, ShieldCheck, Target, Award } from 'lucide-react';

const Features = () => {
  const data = [
    { icon: <Zap />, title: "Instant Generation", desc: "Build your resume in less than 5 minutes." },
    { icon: <Target />, title: "ATS-Friendly", desc: "Our templates are designed to pass through recruitment software." },
    { icon: <ShieldCheck />, title: "Data Security", desc: "Your personal information is encrypted and safe." },
    { icon: <Award />, title: "Professional Grade", desc: "Created by experts to meet global hiring standards." }
  ];

  return (
    <section className={styles.features}>
      <div className={styles.container}>
        {data.map((item, index) => (
          <div key={index} className={styles.featureCard}>
            <div className={styles.icon}>{item.icon}</div>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;