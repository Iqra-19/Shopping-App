import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <div className="footer-logo">
            <span className="brand-badge">✨</span>
            <h2 className="logo-text">ShopEase</h2>
          </div>
          <p className="footer-description">
            Your one-stop destination for modern online shopping.
          </p>
        </div>

        <div className="footer-links-section">
          <h3 className="footer-heading">Quick Links</h3>
          <div className="footer-links">
            <Link to="/" className="footer-link">Home</Link>
            <Link to="/shop" className="footer-link">Shop</Link>
            <Link to="/wishlist" className="footer-link">Wishlist</Link>
            <Link to="/cart" className="footer-link">Cart</Link>
          </div>
        </div>

      </div>

      <div className="footer-divider"></div>

      <p className="copyright">
        © 2026 ShopEase. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;