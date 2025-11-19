import Hero from '../components/Hero';
import ParallaxGallery from '../components/ParallaxGallery';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <div style={{ height: '10vh' }}></div>
      <div className="container">
        <motion.h2 
          style={{ 
            fontSize: '4vw', 
            textAlign: 'center', 
            margin: '100px 0',
            maxWidth: '800px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          We believe that photography is not just about capturing a moment, but about creating a feeling.
        </motion.h2>
      </div>
      <ParallaxGallery />
      <div style={{ height: '20vh' }}></div>
    </motion.div>
  );
};

export default Home;
