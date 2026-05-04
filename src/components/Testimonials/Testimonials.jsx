import React from 'react';
import styles from './Testimonials.module.css';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Alex Rivera",
      role: "Software Engineer",
      text: "Geeko helped me pass the ATS for a Top Tech firm. The premium template is worth every penny.",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&fit=crop"
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Product Manager",
      text: "The real-time editor is so easy to use. I had a professional resume ready in under 10 minutes.",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&fit=crop"
    }
  ];

  return (
    <section className={styles.testimonials}>
      <div className={styles.header}>
        <h2>Trusted by <span>Global Professionals</span></h2>
      </div>
      <div className={styles.container}>
        {reviews.map((rvw) => (
          <div key={rvw.id} className={styles.card}>
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#fdcb6e" color="#fdcb6e" />)}
            </div>
            <p>"{rvw.text}"</p>
            <div className={styles.user}>
              <img src={rvw.img} alt={rvw.name} />
              <div>
                <h4>{rvw.name}</h4>
                <p>{rvw.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;