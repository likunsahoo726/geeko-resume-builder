import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { Menu, X, Crown } from 'lucide-react';

// Destructure onLoginClick from props here
const Navbar = ({ onLoginClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="#home">GEEKO<span>.</span></a>
        </div>

        <ul className={`${styles.navLinks} ${isMobileMenuOpen ? styles.active : ''}`}>
          <li><a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
          <li><a href="#builder" onClick={() => setIsMobileMenuOpen(false)}>Editor</a></li>
          <li><a href="#templates" onClick={() => setIsMobileMenuOpen(false)}>Templates</a></li>
          <li><a href="#pricing" onClick={() => setIsMobileMenuOpen(false)}>Pricing</a></li>
          <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a></li>
        </ul>

        <div className={styles.navActions}>
          {/* Added onClick here to trigger the modal */}
          <button className={styles.loginBtn} onClick={onLoginClick}>
            Sign In
          </button>
          
          <button className={styles.premiumBtn}>
            <Crown size={16} /> Upgrade
          </button>
          
          <div className={styles.mobileToggle} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;