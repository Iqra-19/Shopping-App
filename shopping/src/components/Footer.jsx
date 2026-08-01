import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Column 1: Brand Info */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <h2 className="logo-text">Shoply.</h2>
          </Link>
          <p className="footer-description">
            Your one-stop destination for quality products, great prices and a better shopping experience.
          </p>
          <div className="footer-socials">
            <a href="#facebook" className="social-link" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#instagram" className="social-link" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
            <a href="#twitter" className="social-link" aria-label="Twitter"><i className="fa-brands fa-x-twitter"></i></a>
            <a href="#pinterest" className="social-link" aria-label="Pinterest"><i className="fa-brands fa-pinterest-p"></i></a>
          </div>
        </div>

        {/* Column 2: Shop Links */}
        <div className="footer-col">
          <h3 className="footer-heading">Shop</h3>
          <div className="footer-links">
            <Link to="/shop" className="footer-link">All Products</Link>
            <Link to="/new" className="footer-link">New Arrivals</Link>
            <Link to="/shop" className="footer-link">Best Sellers</Link>
            <Link to="/sale" className="footer-link">Sale</Link>
            <Link to="/gift" className="footer-link">Gift Cards</Link>
          </div>
        </div>

        {/* Column 3: Customer Service */}
        <div className="footer-col">
          <h3 className="footer-heading">Customer Service</h3>
          <div className="footer-links">
            <a href="#contact" className="footer-link">Contact Us</a>
            <a href="#faqs" className="footer-link">FAQs</a>
            <a href="#shipping" className="footer-link">Shipping Policy</a>
            <a href="#return" className="footer-link">Return Policy</a>
            <a href="#track" className="footer-link">Track Order</a>
          </div>
        </div>

        {/* Column 4: About Us */}
        <div className="footer-col">
          <h3 className="footer-heading">About Us</h3>
          <div className="footer-links">
            <a href="#story" className="footer-link">Our Story</a>
            <a href="#careers" className="footer-link">Careers</a>
            <Link to="/blog" className="footer-link">Blog</Link>
            <a href="#sustainability" className="footer-link">Sustainability</a>
            <a href="#affiliate" className="footer-link">Affiliate Program</a>
          </div>
        </div>

        {/* Column 5: Newsletter */}
        <div className="footer-newsletter">
          <h3 className="footer-heading">Stay in the loop</h3>
          <p className="newsletter-desc">
            Subscribe to get special offers, free giveaways and once-in-a-lifetime deals.
          </p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit" className="subscribe-btn">SUBSCRIBE</button>
          </form>
        </div>

      </div>

      <div className="footer-divider"></div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p className="copyright">
          © 2026 Shoply. All rights reserved.
        </p>
        <div className="payment-badges">
          <span className="payment-badge visa">VISA</span>
          <span className="payment-badge mc">mastercard</span>
          <span className="payment-badge paypal">PayPal</span>
          <span className="payment-badge amex">AMEX</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;