import React from 'react';
import styles from './About.module.css';
import { CheckCircle, Users, Headset } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        {/* Left Side: Content */}
        <div className={styles.content}>
          <div className={styles.badge}>Why Choose Geeko?</div>
          <h2>Why 10,000+ Professionals <br/>Trust <span>Our Builder</span></h2>
          <p>
            In today's competitive job market, a generic resume isn't enough. 
            Geeko uses advanced algorithms to ensure your resume stands out 
            to both Human Resources and AI-driven screening tools.
          </p>
          
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <div className={styles.iconBox}><Users /></div>
              <div>
                <h4>95%</h4>
                <p>Success Rate</p>
              </div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.iconBox}><Headset /></div>
              <div>
                <h4>24/7</h4>
                <p>Expert Support</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Professional Image */}
        <div className={styles.imageSide}>
          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" 
            alt="Professional Growth" 
          />
          <div className={styles.floatingCard}>
            <CheckCircle size={20} color="#6c5ce7" />
            <span>ATS Verified Templates</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;