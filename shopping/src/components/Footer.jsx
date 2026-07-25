import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <div className="footer-logo">
            <span className="brand-badge">
              <i className="fa-solid fa-bag-shopping"></i>
            </span>
            <h2 className="logo-text">ShopEase</h2>
          </div>
          <p className="footer-description">
            Your destination for thoughtfully curated products, timeless aesthetics, and effortless online shopping.
          </p>
          <div className="footer-socials">
            <a href="#instagram" className="social-link" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
            <a href="#twitter" className="social-link" aria-label="Twitter"><i className="fa-brands fa-x-twitter"></i></a>
            <a href="#facebook" className="social-link" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#pinterest" className="social-link" aria-label="Pinterest"><i className="fa-brands fa-pinterest-p"></i></a>
          </div>
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

        <div className="footer-newsletter">
          <h3 className="footer-heading">Stay Connected</h3>
          <p className="newsletter-desc">Subscribe to receive exclusive offers and design updates.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="button" aria-label="Subscribe"><i className="fa-solid fa-arrow-right"></i></button>
          </div>
        </div>

      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        <p className="copyright">
          © 2026 ShopEase. All rights reserved. Crafted with care.
        </p>
        <div className="payment-icons">
          <i className="fa-brands fa-cc-visa" title="Visa"></i>
          <i className="fa-brands fa-cc-mastercard" title="Mastercard"></i>
          <i className="fa-brands fa-cc-paypal" title="PayPal"></i>
          <i className="fa-brands fa-cc-apple-pay" title="Apple Pay"></i>
        </div>
      </div>
    </footer>
  );
}

export default Footer;