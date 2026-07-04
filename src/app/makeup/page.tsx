'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './makeup.module.css';

export default function MakeupLandingPage() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' as const } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <motion.img 
          src="/hero-bg.jpg" 
          alt="Premium Lipstick" 
          className={styles.heroImage}
          style={{ y: y1 }}
        />
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <motion.h1 
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Luminous Allure
          </motion.h1>
          <motion.p 
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Discover richly pigmented lipsticks with a smooth, long-lasting formula that keeps your lips soft, vibrant, and beautiful all day.
          </motion.p>
          <motion.button 
            className={styles.ctaButton}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Explore Collection
          </motion.button>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeUpVariant} className={styles.featuresTitle}>
            The Ultimate Formula
          </motion.h2>
          
          <div className={styles.featuresGrid}>
            <motion.div variants={fadeUpVariant} className={styles.featureCard}>
              <div className={styles.featureIcon}>✨</div>
              <h3 className={styles.featureCardTitle}>Richly Pigmented</h3>
              <p className={styles.featureCardText}>One swipe provides full opacity, delivering a bold and striking color that commands attention.</p>
            </motion.div>
            
            <motion.div variants={fadeUpVariant} className={styles.featureCard}>
              <div className={styles.featureIcon}>💧</div>
              <h3 className={styles.featureCardTitle}>Silky Smooth</h3>
              <p className={styles.featureCardText}>Glides on effortlessly. Infused with hydrating oils to keep your lips feeling soft and moisturized.</p>
            </motion.div>
            
            <motion.div variants={fadeUpVariant} className={styles.featureCard}>
              <div className={styles.featureIcon}>🕒</div>
              <h3 className={styles.featureCardTitle}>All-Day Wear</h3>
              <p className={styles.featureCardText}>A long-lasting formula designed to withstand the day without fading or feathering.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Signature Shades Section */}
      <section className={styles.shadesSection}>
        <div className={styles.shadesContainer}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={styles.shadesTitle}
          >
            Signature Shades
          </motion.h2>
          
          <motion.div 
            className={styles.shadesGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className={styles.shadeCircle} data-name="Crimson Velvet" style={{ background: '#8b0000' }}></motion.div>
            <motion.div variants={fadeUpVariant} className={styles.shadeCircle} data-name="Rose Whisper" style={{ background: '#d48d8b' }}></motion.div>
            <motion.div variants={fadeUpVariant} className={styles.shadeCircle} data-name="Midnight Plum" style={{ background: '#45162a' }}></motion.div>
            <motion.div variants={fadeUpVariant} className={styles.shadeCircle} data-name="Coral Sunset" style={{ background: '#ff7f50' }}></motion.div>
            <motion.div variants={fadeUpVariant} className={styles.shadeCircle} data-name="Nude Cashmere" style={{ background: '#d2b48c' }}></motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
