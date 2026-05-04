import React from 'react';
import styles from './Pricing.module.css';
import { Check, Zap, Crown } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "0",
      features: ["1 Basic Template", "Standard PDF Download", "Community Support"],
      isPro: false
    },
    {
      name: "Professional",
      price: "49",
      features: ["All Premium Templates", "No Watermark", "ATS Optimization Score", "Priority Support"],
      isPro: true,
      popular: true
    },
    {
      name: "Ultimate",
      price: "99",
      features: ["Everything in Pro", "AI Resume Rewriter", "LinkedIn Profile Review", "Custom Domain"],
      isPro: true
    }
  ];

  return (
    <section id="pricing" className={styles.pricingSection}>
      <div className={styles.header}>
        <h2>Investment in <span>Your Career</span></h2>
        <p>Choose a plan that fits your professional goals.</p>
      </div>

      <div className={styles.grid}>
        {plans.map((plan, index) => (
          <div key={index} className={`${styles.card} ${plan.popular ? styles.popular : ''}`}>
            {plan.popular && <div className={styles.badge}>Best Value</div>}
            <h3>{plan.name}</h3>
            <div className={styles.price}>
              <span>₹</span>{plan.price}
            </div>
            <ul className={styles.features}>
              {plan.features.map((feature, i) => (
                <li key={i}><Check size={16} color="#6c5ce7" /> {feature}</li>
              ))}
            </ul>
            <button className={plan.popular ? styles.proBtn : styles.freeBtn}>
              {plan.price === "0" ? "Start Free" : "Upgrade Now"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;