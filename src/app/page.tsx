'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './page.module.css';

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 150]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' as const } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <motion.img 
          src="/hero-model.jpg" 
          alt="Glamora Model" 
          className={styles.heroImage}
          style={{ y: y1 }}
        />
        
        <div className={styles.heroContent}>
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={stagger}
          >
            <motion.div variants={fadeUp} className={styles.badge}>
              New Collection
            </motion.div>
            <motion.h1 variants={fadeUp} className={styles.title}>
              <span>Redefine</span>
              <span className="gradient-text">Your Beauty</span>
            </motion.h1>
            <motion.p variants={fadeUp} className={styles.subtitle}>
              Experience the pinnacle of luxury cosmetics. Elevate your everyday look with richly pigmented, soft glam essentials designed for the modern woman.
            </motion.p>
            <motion.button 
              variants={fadeUp} 
              className={styles.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Shop The Collection
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className={styles.featuredSection}>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <div className={styles.sectionHeader}>
            <motion.h2 variants={fadeUp} className={styles.sectionTitle}>Signature Essentials</motion.h2>
            <motion.p variants={fadeUp} className={styles.sectionSubtitle}>Curated for an effortlessly elegant finish.</motion.p>
          </div>

          <div className={styles.productGrid}>
            {[
              { cat: "Lips", name: "Luminous Velvet", price: "$42.00", img: "/products-flatlay.jpg" },
              { cat: "Face", name: "Flawless Silk Foundation", price: "$68.00", img: "/products-flatlay.jpg" },
              { cat: "Eyes", name: "Midnight Rose Palette", price: "$55.00", img: "/products-flatlay.jpg" }
            ].map((product, i) => (
              <motion.div key={i} variants={fadeUp} className={styles.productCard}>
                <div className={styles.productCategory}>{product.cat}</div>
                <img src={product.img} alt={product.name} className={styles.productImage} />
                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.productPrice}>{product.price}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Reviews */}
      <section className={styles.reviewSection}>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <div className={styles.sectionHeader}>
            <motion.h2 variants={fadeUp} className={styles.sectionTitle}>Loved by Icons</motion.h2>
          </div>

          <div className={styles.reviewGrid}>
            {[
              { quote: "The Velvet lipstick is an absolute dream. It feels like silk and stays perfect all day.", author: "Sophia R." },
              { quote: "Glamora foundation gave me that flawless, editorial magazine look instantly.", author: "Elena M." },
              { quote: "Finally, a luxury brand that understands soft glam. The pigmentation is unmatched.", author: "Isabella K." }
            ].map((review, i) => (
              <motion.div key={i} variants={fadeUp} className={styles.reviewCard}>
                <div className={styles.reviewStars}>★★★★★</div>
                <p className={styles.reviewText}>"{review.quote}"</p>
                <p className={styles.reviewAuthor}>— {review.author}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <h2 className={styles.footerLogo}>Glamora</h2>
        <div className={styles.footerLinks}>
          <a href="#" className={styles.footerLink}>Shop</a>
          <a href="#" className={styles.footerLink}>About</a>
          <a href="#" className={styles.footerLink}>Contact</a>
          <a href="#" className={styles.footerLink}>Instagram</a>
        </div>
        <p style={{ color: '#666', fontSize: '0.8rem' }}>© 2026 Glamora Beauty. All rights reserved.</p>
      </footer>
    </div>
  );
}
