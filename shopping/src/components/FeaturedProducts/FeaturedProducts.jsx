import React from 'react'
import './FeaturedProducts.css'

function FeaturedProducts() {
  return (
   <section className="featured-products">

      <h2>Featured Products</h2>

      <div className="product-grid">

        <div className="product-card">
          <div className="product-image">
            <p>Product Image</p>
          </div>

          <h3>Product Title</h3>
          <p>$99.99</p>

          <button>View Details</button>
        </div>

        <div className="product-card">
          <div className="product-image">
            <p>Product Image</p>
          </div>

          <h3>Product Title</h3>
          <p>$99.99</p>

          <button>View Details</button>
        </div>

        <div className="product-card">
          <div className="product-image">
            <p>Product Image</p>
          </div>

          <h3>Product Title</h3>
          <p>$99.99</p>

          <button>View Details</button>
        </div>

        <div className="product-card">
          <div className="product-image">
            <p>Product Image</p>
          </div>

          <h3>Product Title</h3>
          <p>$99.99</p>

          <button>View Details</button>
        </div>

      </div>

    </section>
  )
}

export default FeaturedProducts
