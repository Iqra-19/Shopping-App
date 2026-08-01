import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import "./Cart.css";

function Cart() {
  const { cart, increaseQuantity, decreaseQuantity, removeItem } = useCart();

  // Total items calculation
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  // Subtotal calculation
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  // Tax calculation (18%)
  const tax = subtotal * 0.18;

  // Final Total calculation
  const grandTotal = subtotal + tax;

  // Empty Cart View
  if (cart.length === 0) {
    return (
      <div className="cart-page-container">
        <div className="cart-empty-container">
          <div className="cart-empty-icon">
            <i className="fa-solid fa-bag-shopping"></i>
          </div>
          <h2 className="cart-empty-title">Your cart is empty</h2>
          <p className="cart-empty-desc">
            Explore our curated collections and add your favorite items to your cart.
          </p>
          <Link to="/shop" className="continue-btn">
            Explore Products <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page-container">
      {/* 1. Header with Breadcrumbs & Action Link */}
      <div className="cart-header">
        <div>
          <h1 className="cart-title">
            Your Cart <span>({totalItems} {totalItems === 1 ? 'Item' : 'Items'})</span>
          </h1>
          <div className="cart-breadcrumbs">
            <Link to="/">Home</Link>
            <span>&gt;</span>
            <span>Cart</span>
          </div>
        </div>

        <Link to="/shop" className="continue-shopping-link">
          &lt; Continue Shopping
        </Link>
      </div>

      {/* 2. Main Cart Layout (Table + Order Summary) */}
      <div className="cart-main-layout">
        {/* Left Column: Items Table & Coupon Card */}
        <div className="cart-left-section">
          <div className="cart-table-header">
            <span>Product</span>
            <span className="header-right">Price</span>
            <span className="header-center">Quantity</span>
            <span className="header-right">Total</span>
            <span></span>
          </div>

          <div className="cart-items-list">
            {cart.map((item) => {
              const itemTotal = item.price * item.quantity;

              return (
                <div key={item.id} className="cart-item-row">
                  {/* Item Image & Details */}
                  <div className="item-info-col">
                    <div className="item-thumb-wrapper">
                      <img src={item.thumbnail} alt={item.title} />
                    </div>
                    <div className="item-details">
                      <h4>{item.title}</h4>
                      <p className="item-variant">Color: Olive Green <span style={{ color: '#434D35' }}>●</span></p>
                      <span className="item-stock-badge">In Stock</span>
                    </div>
                  </div>

                  {/* Unit Price */}
                  <div className="item-price-col">
                    ${item.price}
                  </div>

                  {/* Quantity Control Pill */}
                  <div className="item-qty-col">
                    <div className="qty-control-pill">
                      <button 
                        type="button"
                        onClick={() => decreaseQuantity(item.id)}
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button 
                        type="button"
                        onClick={() => increaseQuantity(item.id)}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Item Total */}
                  <div className="item-total-col">
                    ${itemTotal.toFixed(2)}
                  </div>

                  {/* Remove Button */}
                  <div>
                    <button 
                      type="button"
                      className="item-remove-btn"
                      onClick={() => removeItem(item.id)}
                      title="Remove item"
                      aria-label="Remove item"
                    >
                      <i className="fa-regular fa-trash-can"></i>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Coupon Form Card */}
          <div className="coupon-card">
            <span className="coupon-label">
              <i className="fa-solid fa-tag"></i> Have a coupon?
            </span>
            <form className="coupon-form" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Enter coupon code" />
              <button type="submit" className="apply-coupon-btn">Apply</button>
            </form>
          </div>
        </div>

        {/* Right Column: Order Summary Card */}
        <div className="cart-summary-card">
          <h3 className="summary-title">Order Summary</h3>

          <div className="summary-rows">
            <div className="summary-row">
              <span>Subtotal ({totalItems} {totalItems === 1 ? 'item' : 'items'})</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="summary-row free-text">
              <span>Shipping</span>
              <span>Free Shipping ($0.00)</span>
            </div>

            <div className="summary-row">
              <span>Tax (18%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>
          </div>

          <div className="summary-divider"></div>

          <div className="summary-total-row">
            <span className="summary-total-label">Total</span>
            <span className="summary-total-value">${grandTotal.toFixed(2)}</span>
          </div>

          <span className="saved-tag">
            <i className="fa-solid fa-tag"></i> You saved $25.00 on this order
          </span>

          <button type="button" className="checkout-btn">
            Proceed to Checkout <i className="fa-solid fa-arrow-right"></i>
          </button>

          <div className="or-divider">OR</div>

          <button type="button" className="upi-checkout-btn">
            <i className="fa-solid fa-mobile-screen"></i> Checkout with UPI
          </button>

          {/* Trust Features inside Summary */}
          <div className="summary-trust-list">
            <div className="summary-trust-item">
              <div className="trust-mini-icon"><i className="fa-solid fa-lock"></i></div>
              <div className="trust-mini-text">
                <h5>Secure Checkout</h5>
                <p>100% protected payments</p>
              </div>
            </div>

            <div className="summary-trust-item">
              <div className="trust-mini-icon"><i className="fa-solid fa-arrows-rotate"></i></div>
              <div className="trust-mini-text">
                <h5>Easy Returns</h5>
                <p>30-day return policy</p>
              </div>
            </div>

            <div className="summary-trust-item">
              <div className="trust-mini-icon"><i className="fa-solid fa-headset"></i></div>
              <div className="trust-mini-text">
                <h5>24/7 Support</h5>
                <p>We're here to help</p>
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

export default Cart;