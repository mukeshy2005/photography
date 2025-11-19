import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const ParallaxGallery = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const images = [
    "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2000&auto=format&fit=crop"
  ];

  return (
    <section ref={containerRef} className="parallax-gallery">
      <div className="container">
        <div className="gallery-row">
          <motion.div style={{ y: y1 }} className="gallery-item">
            <img src={images[0]} alt="Gallery 1" />
          </motion.div>
          <motion.div style={{ y: y2 }} className="gallery-item" style={{ marginTop: '100px' }}>
            <img src={images[1]} alt="Gallery 2" />
          </motion.div>
          <motion.div style={{ y: y3 }} className="gallery-item">
            <img src={images[2]} alt="Gallery 3" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxGallery;
