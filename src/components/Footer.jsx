const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h2>LUMINA</h2>
            <p>
              A visual storytelling studio dedicated to capturing the essence of moments through the lens of artistry and emotion.
            </p>
          </div>
          <div className="footer-links">
            <div className="link-group">
              <h4>Explore</h4>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/portfolio">Portfolio</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
            <div className="link-group">
              <h4>Connect</h4>
              <ul>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Behance</a></li>
                <li><a href="#">Pinterest</a></li>
                <li><a href="#">Email</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Lumina Photography. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
