import './Hero.css';
function Hero() {
  return (
    <section className="hero-section">

      <div className="hero-content">
        <span className="hero-badge">
          <i className="fa-solid fa-sparkles"></i> NEW ESSENTIALS COLLECTION
        </span>
        <h1>Welcome to ShopEase</h1>
        <p>Discover thoughtfully curated, high-quality products crafted for modern living.</p>
        
        <div className="hero-actions">
          <button>Shop Collection</button>
        </div>

        <div className="hero-trust-badges">
          <div className="trust-badge">
            <i className="fa-solid fa-truck-fast"></i>
            <span>Free Shipping</span>
          </div>
          <div className="trust-badge">
            <i className="fa-solid fa-shield-halved"></i>
            <span>Secure Payment</span>
          </div>
          <div className="trust-badge">
            <i className="fa-solid fa-rotate-left"></i>
            <span>Easy Returns</span>
          </div>
        </div>
      </div>

      <div className="hero-image">
        <div className="hero-showcase-card">
          <div className="showcase-icon">
            <i className="fa-solid fa-couch"></i>
          </div>
          <span className="showcase-title">Featured Lifestyle</span>
          <span className="showcase-tag"><i className="fa-solid fa-star"></i> Top Rated</span>
        </div>
      </div>
    </section>
  )
}

export default Hero