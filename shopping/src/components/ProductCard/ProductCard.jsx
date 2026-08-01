import React from "react";
import { useNavigate } from "react-router-dom";
import { useWishlish } from "../../hooks/useWishlish";
import "./ProductCard.css";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const { wishlist, toggleWishlist } = useWishlish();

  const isWishlisted = wishlist.some((item) => item.id === product.id);

  // Review count calculation
  const reviewCount = product.reviews ? product.reviews.length : Math.floor((product.rating || 4.5) * 28);

  return (
    <div 
      className="product-card"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      {/* Floating Heart Wishlist Button */}
      <button
        className="card-wishlist-btn"
        title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          toggleWishlist(product);
        }}
      >
        <i className={isWishlisted ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>
      </button>

      {/* Product Image Container */}
      <div className="product-image-container">
        <img src={product.thumbnail} alt={product.title} className="product-thumb" />
      </div>

      {/* Product Details */}
      <div className="product-info">
        <h3 className="product-title" title={product.title}>{product.title}</h3>
        
        <div className="product-rating-row">
          <div className="stars">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
          <span className="rating-count">({reviewCount})</span>
        </div>

        <div className="product-price">${product.price}</div>
      </div>
    </div>
  );
}

export default React.memo(ProductCard);
