import { Link } from "react-router-dom";
import { useWishlish } from "../hooks/useWishlish";
import { useCart } from "../hooks/useCart";
import "./Wishlist.css";

function Wishlist() {
  const { wishlist, toggleWishlist } = useWishlish();
  const { addToCart } = useCart();

  // Total value calculation
  const totalValue = wishlist.reduce((sum, item) => sum + item.price, 0);

  const handleAddAllToCart = () => {
    wishlist.forEach((item) => addToCart(item));
  };

  // Empty Wishlist View
  if (wishlist.length <= 0) {
    return (
      <div className="wishlist-page-container">
        <div className="wishlist-empty-container">
          <div className="wishlist-empty-icon">
            <i className="fa-regular fa-heart"></i>
          </div>
          <h2 className="wishlist-empty-title">Your wishlist is empty</h2>
          <p className="wishlist-empty-desc">
            Looks like you haven't saved any products yet. Explore our shop to save items you love!
          </p>
          <Link to="/shop" className="continue-btn">
            Explore Products <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="wishlist-page-container">
      {/* 1. Header with Share Button */}
      <div className="wishlist-header">
        <div>
          <h1 className="wishlist-title">
            My Wishlist <span>({wishlist.length} {wishlist.length === 1 ? 'Item' : 'Items'})</span>
          </h1>
          <p className="wishlist-subtitle">
            Items you love, all in one place. Add to cart and make them yours!
          </p>
        </div>

        <button type="button" className="share-wishlist-btn">
          Share Wishlist <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </button>
      </div>

      {/* 2. Main Wishlist Layout (Grid + Summary Card) */}
      <div className="wishlist-main-layout">
        {/* Left Section: Wishlist Cards Grid */}
        <div className="wishlist-grid">
          {wishlist.map((product) => (
            <div key={product.id} className="wishlist-card">
              {/* Solid Filled Heart Toggle Button */}
              <button
                className="wishlist-heart-btn"
                title="Remove from wishlist"
                type="button"
                onClick={() => toggleWishlist(product)}
              >
                <i className="fa-solid fa-heart"></i>
              </button>

              {/* Product Thumbnail */}
              <div className="wishlist-thumb-wrapper">
                <img src={product.thumbnail} alt={product.title} />
              </div>

              {/* Product Details */}
              <div className="wishlist-card-info">
                <h4>{product.title}</h4>
                <div className="wishlist-card-price">${product.price}</div>
                <span className="wishlist-stock-tag">In Stock</span>
              </div>

              {/* Bottom Action Row */}
              <div className="wishlist-card-actions">
                <button
                  type="button"
                  className="wishlist-add-cart-btn"
                  onClick={() => addToCart(product)}
                >
                  <i className="fa-solid fa-bag-shopping"></i> Add to Cart
                </button>

                <button
                  type="button"
                  className="wishlist-delete-btn"
                  onClick={() => toggleWishlist(product)}
                  title="Remove from wishlist"
                  aria-label="Remove item"
                >
                  <i className="fa-regular fa-trash-can"></i>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Section: Wishlist Summary Card */}
        <div className="wishlist-summary-card">
          <h3 className="wishlist-summary-title">Wishlist Summary</h3>

          <div className="summary-count-badge">
            <i className="fa-regular fa-heart"></i> {wishlist.length} {wishlist.length === 1 ? 'Item' : 'Items'}
          </div>

          <div className="summary-total-val-row">
            <span>Total Value</span>
            <span>${totalValue.toFixed(2)}</span>
          </div>

          <button 
            type="button" 
            className="add-all-cart-btn"
            onClick={handleAddAllToCart}
          >
            <i className="fa-solid fa-bag-shopping"></i> Add All to Cart
          </button>

          <button 
            type="button" 
            className="move-all-btn"
            onClick={handleAddAllToCart}
          >
            <i className="fa-solid fa-box-archive"></i> Move All to Bag
          </button>

          {/* Feature Alerts inside Summary */}
          <div className="wishlist-features-list">
            <div className="wishlist-feature-item">
              <div className="wf-icon"><i className="fa-solid fa-bell"></i></div>
              <div className="wf-text">
                <h5>Price Drop Alert</h5>
                <p>Get notified when prices drop</p>
              </div>
            </div>

            <div className="wishlist-feature-item">
              <div className="wf-icon"><i className="fa-solid fa-clock"></i></div>
              <div className="wf-text">
                <h5>Back in Stock Alert</h5>
                <p>We'll notify you when items are back</p>
              </div>
            </div>

            <div className="wishlist-feature-item">
              <div className="wf-icon"><i className="fa-solid fa-arrows-rotate"></i></div>
              <div className="wf-text">
                <h5>Easy Returns</h5>
                <p>30-day return policy</p>
              </div>
            </div>

            <div className="wishlist-feature-item">
              <div className="wf-icon"><i className="fa-solid fa-shield-halved"></i></div>
              <div className="wf-text">
                <h5>Secure Checkout</h5>
                <p>100% secure payments</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Bottom Trust Bar */}
      <div className="features-bar">
        <div className="feature-item">
          <div className="feature-icon-wrapper"><i className="fa-solid fa-truck-fast"></i></div>
          <div className="feature-text">
            <h4>Free Shipping</h4>
            <p>On orders above $50</p>
          </div>
        </div>
        <div className="feature-divider"></div>
        <div className="feature-item">
          <div className="feature-icon-wrapper"><i className="fa-solid fa-arrows-rotate"></i></div>
          <div className="feature-text">
            <h4>Easy Returns</h4>
            <p>30 days return policy</p>
          </div>
        </div>
        <div className="feature-divider"></div>
        <div className="feature-item">
          <div className="feature-icon-wrapper"><i className="fa-solid fa-shield-halved"></i></div>
          <div className="feature-text">
            <h4>Secure Payment</h4>
            <p>100% secure checkout</p>
          </div>
        </div>
        <div className="feature-divider"></div>
        <div className="feature-item">
          <div className="feature-icon-wrapper"><i className="fa-solid fa-headset"></i></div>
          <div className="feature-text">
            <h4>24/7 Support</h4>
            <p>We're here to help</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wishlist;