import React from 'react';
import styles from './Contact.module.css';
import { Mail, Send, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.info}>
          <h2>Get in <span>Touch</span></h2>
          <p>Have a question or want to hire me for your project? Drop a message.</p>
          
          <div className={styles.item}>
            <Mail className={styles.icon} />
            <div>
              <h4>Email</h4>
              <p>likun@geeko.com</p>
            </div>
          </div>
          <div className={styles.item}>
            <Phone className={styles.icon} />
            <div>
              <h4>Region</h4>
              <p>Pune, India</p>
            </div>
          </div>
        </div>

        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.inputRow}>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
          </div>
          <textarea placeholder="Tell us how we can help..." required></textarea>
          <button type="submit" className={styles.sendBtn}>
            Send Message <Send size={18} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;