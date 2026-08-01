import './Hero.css';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero-wrapper">
      {/* Hero Main Banner Card */}
      <div className="hero-card">
        <div className="hero-content">
          <span className="hero-badge">
            <i className="fa-solid fa-leaf"></i> NEW COLLECTION
          </span>
          <h1 className="hero-title">Elevate Your Everyday Style</h1>
          <p className="hero-description">
            Discover timeless pieces crafted for comfort, quality and elegance.
          </p>

          <button className="hero-cta-btn" onClick={() => navigate("/shop")}>
            SHOP NOW <i className="fa-solid fa-arrow-right"></i>
          </button>

          <div className="hero-pagination">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>

        <div className="hero-media">
          <img 
            src="/hero_lifestyle.png" 
            alt="Elevate Your Everyday Style" 
            className="hero-image"
          />
        </div>
      </div>

      {/* Feature Highlights Bar */}
      <div className="features-bar">
        <div className="feature-item">
          <div className="feature-icon-wrapper">
            <i className="fa-solid fa-truck-fast"></i>
          </div>
          <div className="feature-text">
            <h4>Free Shipping</h4>
            <p>On orders over $50</p>
          </div>
        </div>

        <div className="feature-divider"></div>

        <div className="feature-item">
          <div className="feature-icon-wrapper">
            <i className="fa-solid fa-arrows-rotate"></i>
          </div>
          <div className="feature-text">
            <h4>Easy Returns</h4>
            <p>30 days return policy</p>
          </div>
        </div>

        <div className="feature-divider"></div>

        <div className="feature-item">
          <div className="feature-icon-wrapper">
            <i className="fa-solid fa-shield-halved"></i>
          </div>
          <div className="feature-text">
            <h4>Secure Payment</h4>
            <p>100% secure checkout</p>
          </div>
        </div>

        <div className="feature-divider"></div>

        <div className="feature-item">
          <div className="feature-icon-wrapper">
            <i className="fa-solid fa-headset"></i>
          </div>
          <div className="feature-text">
            <h4>24/7 Support</h4>
            <p>We're here to help</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;