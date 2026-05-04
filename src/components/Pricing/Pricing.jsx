import React from 'react';
import styles from './Pricing.module.css';
import { Check, Zap, Crown } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "0",
      features: ["Standard Template", "Basic Editor", "Watermark PDF"],
      btnText: "Current Plan",
      pro: false
    },
    {
      name: "Pro Studio",
      price: "49",
      features: ["Premium Templates", "Photo Integration", "No Watermark", "AI Strength Meter"],
      btnText: "Upgrade to Pro",
      pro: true
    },
    {
      name: "Elite Career",
      price: "99",
      features: ["Everything in Pro", "Priority Support", "ATS Keyword Optimization", "Custom Branding"],
      btnText: "Go Elite",
      pro: true
    }
  ];

  return (
    <section id="pricing" className={styles.pricingSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Simple <span>Pricing</span></h2>
          <p>Invest in your career for the price of a cup of chai.</p>
        </div>
        <div className={styles.grid}>
          {plans.map((plan, idx) => (
            <div key={idx} className={`${styles.card} ${plan.pro ? styles.proCard : ''}`}>
              {plan.pro && <div className={styles.popular}>POPULAR</div>}
              <h3>{plan.name}</h3>
              <div className={styles.price}>₹{plan.price}<span>/lifetime</span></div>
              <ul className={styles.featureList}>
                {plan.features.map((f, i) => (
                  <li key={i}><Check size={16} color="#10b981"/> {f}</li>
                ))}
              </ul>
              <button className={plan.pro ? styles.proBtn : styles.basicBtn}>
                {plan.btnText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;