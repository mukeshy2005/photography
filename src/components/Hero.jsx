import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="hero">
      <motion.div style={{ y }} className="hero-bg">
        <img 
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop" 
          alt="Background" 
          className="bg-image"
        />
      </motion.div>
      
      <motion.div style={{ opacity }} className="container hero-content">
        <div className="hero-title-wrapper" style={{ overflow: 'hidden' }}>
          <motion.h1
            className="hero-title"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            Capturing
          </motion.h1>
        </div>
        <div className="hero-title-wrapper" style={{ overflow: 'hidden' }}>
          <motion.h1
            className="hero-title"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          >
            The Unseen
          </motion.h1>
        </div>
        
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Fine Art Photography & Direction
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Hero;
