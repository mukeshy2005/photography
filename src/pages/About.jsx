import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className="about-content">
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <img 
              src="https://plus.unsplash.com/premium_photo-1763034282940-97ab0a6a24e2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Photographer" 
            />
          </motion.div>
          
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h1>The Art of Seeing</h1>
            <p className="lead">
              "Photography is the story I fail to put into words."
            </p>
            <p>
              For over a decade, I've been exploring the intersection of light, emotion, and narrative. My work is driven by a deep fascination with the fleeting moments that define our human experience—the quiet pauses, the unguarded expressions, the interplay of shadow and illumination.
            </p>
            <p>
              Based in New York, my practice spans editorial portraiture, fine art photography, and creative direction. Each project is an opportunity to collaborate, to discover, and to create images that resonate beyond the frame.
            </p>
            <p>
              When I'm not behind the camera, you'll find me wandering through galleries, experimenting with film development, or seeking inspiration in the city's ever-changing landscape.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
