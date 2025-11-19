import { motion } from 'framer-motion';

const Portfolio = () => {
  const portfolioItems = [
    { id: 1, src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop", title: "Urban Shadows", category: "Street" },
    { id: 2, src: "https://images.unsplash.com/photo-1554048612-387768052bf7?q=80&w=2000&auto=format&fit=crop", title: "Morning Light", category: "Portrait" },
    { id: 3, src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2000&auto=format&fit=crop", title: "Portrait Study", category: "Portrait" },
    { id: 4, src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2000&auto=format&fit=crop", title: "Nature's Texture", category: "Nature" },
    { id: 5, src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2000&auto=format&fit=crop", title: "Camera Lens", category: "Product" },
    { id: 6, src: "https://images.unsplash.com/photo-1552168324-d612d77725e3?q=80&w=2000&auto=format&fit=crop", title: "City Life", category: "Street" },
  ];

  return (
    <motion.div
      className="portfolio-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <motion.h1 
          className="page-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Portfolio
        </motion.h1>
        
        <div className="portfolio-grid">
          {portfolioItems.map((item, index) => (
            <motion.div 
              key={item.id}
              className="portfolio-item"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: [0.4, 0, 0.2, 1]
              }}
            >
              <img src={item.src} alt={item.title} />
              <div className="portfolio-overlay">
                <h3>{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
