import React, { useState } from 'react';
import styles from './AuthModal.module.css';
import { X, Mail, Lock, User } from 'lucide-react';

const AuthModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}><X size={20} /></button>
        
        <div className={styles.header}>
          <h2>{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
          <p>{isLogin ? 'Login to manage your resumes' : 'Join Geeko to build ATS-ready resumes'}</p>
        </div>

        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          {!isLogin && (
            <div className={styles.inputGroup}>
              <User size={18} />
              <input type="text" placeholder="Full Name" required />
            </div>
          )}
          <div className={styles.inputGroup}>
            <Mail size={18} />
            <input type="email" placeholder="Email Address" required />
          </div>
          <div className={styles.inputGroup}>
            <Lock size={18} />
            <input type="password" placeholder="Password" required />
          </div>
          
          <button type="submit" className={styles.submitBtn}>
            {isLogin ? 'Sign In' : 'Get Started'}
          </button>
        </form>

        <p className={styles.switch}>
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? ' Sign Up' : ' Login'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthModal;