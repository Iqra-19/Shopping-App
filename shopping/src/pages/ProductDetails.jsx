import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useWishlish } from "../hooks/useWishlish";
import { useCart } from "../hooks/useCart";
import ProductGrid from "../components/ProductGrid/ProductGrid";
import './ProductDetails.css';

function ProductDetails({ products = [] }) {
  const { wishlist, toggleWishlist } = useWishlish();
  const { cart, addToCart } = useCart();
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  // Local interactive UI states
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('details');
  const [selectedColor, setSelectedColor] = useState('Olive Green');

  if (!product) {
    return (
      <div className="product-details-loading">
        <i className="fa-solid fa-spinner fa-spin"></i> Loading product details...
      </div>
    );
  }

  // Thumbnails array (fallback to product thumbnail)
  const images = product.images && product.images.length > 0
    ? product.images
    : [product.thumbnail, product.thumbnail, product.thumbnail, product.thumbnail];

  const mainImage = images[selectedImgIndex] || product.thumbnail;

  const releteProducts = products
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, 4);

  const isInCart = cart.some((item) => item.id === product.id);
  const isWishlisted = wishlist.some((item) => item.id === product.id);

  const reviewCount = product.reviews ? product.reviews.length : Math.floor((product.rating || 4.5) * 28);
  const hasDiscount = product.discountPercentage && product.discountPercentage > 0;
  const originalPrice = hasDiscount
    ? (product.price / (1 - product.discountPercentage / 100)).toFixed(2)
    : null;

  return (
    <div className="product-details-page">
      {/* 1. Breadcrumbs Header */}
      <div className="product-breadcrumbs">
        <Link to="/">Home</Link>
        <span>&gt;</span>
        <Link to="/shop">Shop</Link>
        <span>&gt;</span>
        <Link to={`/shop?category=${product.category}`}>{product.category || 'Category'}</Link>
        <span>&gt;</span>
        <span className="current">{product.title}</span>
      </div>

      {/* 2. Main Top Showcase Container (Thumbnails + Main Image + Info + Trust Box) */}
      <section className="product-main-showcase">

        {/* Left Thumbnails Strip */}
        <div className="thumbnails-strip">
          {images.slice(0, 5).map((imgUrl, idx) => (
            <button
              key={idx}
              type="button"
              className={`thumb-btn ${selectedImgIndex === idx ? 'active' : ''}`}
              onClick={() => setSelectedImgIndex(idx)}
            >
              <img src={imgUrl} alt={`Thumbnail ${idx + 1}`} />
            </button>
          ))}
          <div className="thumb-scroll-down">
            <i className="fa-solid fa-chevron-down"></i>
          </div>
        </div>

        {/* Center Large Main Image Display */}
        <div className="main-image-display">
          <button
            className="showcase-wishlist-btn"
            title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
            type="button"
            onClick={() => toggleWishlist(product)}
          >
            <i className={isWishlisted ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>
          </button>
          <img src={mainImage} alt={product.title} className="showcase-main-img" />
        </div>

        {/* Center-Right Product Info */}
        <div className="product-details-info">
          <h1 className="details-title">{product.title}</h1>

          {/* Rating stars */}
          <div className="details-rating-row">
            <div className="stars">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <span className="rating-text">({reviewCount} customer reviews)</span>
          </div>

          {/* Price & Discount */}
          <div className="details-price-container">
            <span className="details-current-price">${product.price}</span>
            {hasDiscount && (
              <>
                <span className="details-old-price">${originalPrice}</span>
                <span className="details-discount-badge">{Math.round(product.discountPercentage)}% OFF</span>
              </>
            )}
          </div>
          <span className="tax-inclusive-text">Inclusive of all taxes</span>

          {/* Short Description */}
          <p className="details-description">
            {product.description || 'Elegant, timeless and versatile design crafted with high-quality materials and gold-tone hardware.'}
          </p>

          {/* Color Selection */}

          {/* <div className="details-color-selection">
            <span className="color-label">Color: <strong>{selectedColor}</strong></span>
            <div className="color-swatches-row">
              <span
                className={`swatch-circle ${selectedColor === 'Olive Green' ? 'active' : ''}`}
                style={{ backgroundColor: '#434D35' }}
                onClick={() => setSelectedColor('Olive Green')}
                title="Olive Green"
              ></span>
              <span
                className={`swatch-circle ${selectedColor === 'Beige' ? 'active' : ''}`}
                style={{ backgroundColor: '#E8E2D6' }}
                onClick={() => setSelectedColor('Beige')}
                title="Beige"
              ></span>
              <span
                className={`swatch-circle ${selectedColor === 'Brown' ? 'active' : ''}`}
                style={{ backgroundColor: '#6B4C35' }}
                onClick={() => setSelectedColor('Brown')}
                title="Brown"
              ></span>
              <span
                className={`swatch-circle ${selectedColor === 'Black' ? 'active' : ''}`}
                style={{ backgroundColor: '#222222' }}
                onClick={() => setSelectedColor('Black')}
                title="Black"
              ></span>
            </div>
          </div> */}

          {/* Stock Status */}
          <div className="stock-status-row">
            <span className="stock-indicator">🟢 In Stock</span>
            <span className="stock-divider">|</span>
            <span className="ready-ship-text">Ready to ship</span>
          </div>

          {/* Quantity Selector */}
          <div className="quantity-selector-row">
            <span className="qty-label">Quantity:</span>
            <div className="qty-picker">
              <button type="button" onClick={() => setQuantity((q) => Math.max(1, q - 1))}>-</button>
              <span>{quantity}</span>
              <button type="button" onClick={() => setQuantity((q) => q + 1)}>+</button>
            </div>
          </div>

          {/* Main Action Buttons */}
          <div className="details-actions-row">
            <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
              <i className="fa-solid fa-bag-shopping"></i>
              {isInCart ? " Added to Cart" : " Add to Cart"}
            </button>
            <button className="buy-now-btn" onClick={() => addToCart(product)}>
              Buy Now
            </button>
          </div>
        </div>

        {/* Far-Right Trust Badges Box */}
        <div className="details-trust-box">
          <div className="trust-card-item">
            <div className="trust-icon"><i className="fa-solid fa-truck-fast"></i></div>
            <div className="trust-info">
              <h4>Free Shipping</h4>
              <p>On orders above $50</p>
            </div>
          </div>

          <div className="trust-card-item">
            <div className="trust-icon"><i className="fa-solid fa-arrows-rotate"></i></div>
            <div className="trust-info">
              <h4>Easy Returns</h4>
              <p>30 days return policy</p>
            </div>
          </div>

          <div className="trust-card-item">
            <div className="trust-icon"><i className="fa-solid fa-shield-halved"></i></div>
            <div className="trust-info">
              <h4>Secure Payment</h4>
              <p>100% secure checkout</p>
            </div>
          </div>

          <div className="trust-card-item">
            <div className="trust-icon"><i className="fa-solid fa-headset"></i></div>
            <div className="trust-info">
              <h4>24/7 Support</h4>
              <p>We're here to help</p>
            </div>
          </div>
        </div>

      </section>

      {/* 3. Middle Section: Specifications & Details Tabs */}
      <section className="product-specs-tabs-section">
        {/* Tab Headers */}
        <div className="specs-tabs-header">
          <button
            type="button"
            className={`tab-btn ${activeTab === 'details' ? 'active' : ''}`}
            onClick={() => setActiveTab('details')}
          >
            <i className="fa-regular fa-file-lines"></i> Product Details
          </button>
          <button
            type="button"
            className={`tab-btn ${activeTab === 'specs' ? 'active' : ''}`}
            onClick={() => setActiveTab('specs')}
          >
            <i className="fa-solid fa-list-check"></i> Specifications
          </button>
          <button
            type="button"
            className={`tab-btn ${activeTab === 'shipping' ? 'active' : ''}`}
            onClick={() => setActiveTab('shipping')}
          >
            <i className="fa-solid fa-truck-ramp-box"></i> Shipping &amp; Returns
          </button>
          <button
            type="button"
            className={`tab-btn ${activeTab === 'reviews' ? 'active' : ''}`}
            onClick={() => setActiveTab('reviews')}
          >
            <i className="fa-regular fa-star"></i> Reviews ({reviewCount})
          </button>
        </div>

        {/* Tab Content Panel */}
        <div className="specs-tab-content">
          {activeTab === 'details' && (
            <div className="details-tab-grid">
              <div className="tab-left-col">
                <p>
                  The {product.title} combines style and functionality. It features a spacious interior with multiple compartments to keep your essentials organized.
                </p>
                <ul className="details-bullet-list">
                  <li>Premium vegan leather craftsmanship</li>
                  <li>Gold-tone hardware accents</li>
                  <li>Detachable and adjustable shoulder strap</li>
                  <li>Magnetic snap closure for quick access</li>
                  <li>Inner zip pocket and slip compartments</li>
                  <li>Brand: {product.brand || 'Shoply.'}</li>
                </ul>
              </div>

              <div className="tab-right-col">
                <table className="specs-table">
                  <tbody>
                    <tr>
                      <td className="spec-key">Material</td>
                      <td className="spec-val">Vegan Leather</td>
                    </tr>
                    <tr>
                      <td className="spec-key">Lining</td>
                      <td className="spec-val">Polyester</td>
                    </tr>
                    <tr>
                      <td className="spec-key">Closure</td>
                      <td className="spec-val">Magnetic Snap</td>
                    </tr>
                    <tr>
                      <td className="spec-key">Strap</td>
                      <td className="spec-val">Detachable &amp; Adjustable</td>
                    </tr>
                    <tr>
                      <td className="spec-key">Category</td>
                      <td className="spec-val">{product.category}</td>
                    </tr>
                    <tr>
                      <td className="spec-key">Weight</td>
                      <td className="spec-val">620g</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'specs' && (
            <div className="specs-tab-grid">
              <table className="specs-table full-table">
                <tbody>
                  <tr>
                    <td className="spec-key">Brand</td>
                    <td className="spec-val">{product.brand || 'Shoply.'}</td>
                  </tr>
                  <tr>
                    <td className="spec-key">Category</td>
                    <td className="spec-val">{product.category}</td>
                  </tr>
                  <tr>
                    <td className="spec-key">Rating</td>
                    <td className="spec-val">{product.rating} / 5.0</td>
                  </tr>
                  <tr>
                    <td className="spec-key">SKU</td>
                    <td className="spec-val">SHP-{product.id}-2024</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'shipping' && (
            <div className="shipping-tab-info">
              <h4>Shipping Policy</h4>
              <p>Free standard shipping on all orders over $50. Orders are processed within 1-2 business days.</p>
              <h4>Return &amp; Exchange</h4>
              <p>We accept returns within 30 days of delivery. Items must be unused and in original packaging.</p>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="reviews-tab-info">
              <h4>Customer Reviews ({reviewCount})</h4>
              <p>Average Rating: <strong>{product.rating} ★★★★★</strong></p>
            </div>
          )}
        </div>
      </section>

      {/* 4. Bottom Section: "You may also like" Carousel Grid */}
      <ProductGrid
        title="You may also like"
        products={releteProducts}
        showControls={true}
      />
    </div>
  );
}

export default ProductDetails;
