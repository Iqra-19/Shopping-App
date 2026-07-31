import React from "react";

import { useNavigate } from "react-router-dom"
import { useWishlish } from "../../hooks/useWishlish";

function ProductCard( { product} ) {
  
  const navigate = useNavigate();

  const { wishlist, toggleWishlist} = useWishlish();

  // Compute original price if discountPercentage exists
  const hasDiscount = product.discountPercentage && product.discountPercentage > 0;
  const originalPrice = hasDiscount 
    ? (product.price / (1 - product.discountPercentage / 100)).toFixed(2)
    : null;

    const isWishlisted = wishlist.some(
        (item) => item.id === product.id
    );
  
  return (
    
        <div className="product-card">
            <div className="product-image">
              <button
                  className="card-wishlist-btn"
                  title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                  type="button"
                  onClick={() => toggleWishlist(product)}
              >
                  <i
                      className={
                          isWishlisted
                              ? "fa-solid fa-heart"
                              : "fa-regular fa-heart"
                      }
                  ></i>
              </button>
              <img src={product.thumbnail} alt={product.title} />
            </div>

            <div className="product-card-body">
              {product.category && (
                <span className="product-category-text">{product.category}</span>
              )}
              
              <h3>{product.title}</h3>
              
              <div className="product-price-row">
                <span className="product-price">${product.price}</span>
                {hasDiscount && (
                  <span className="product-old-price">${originalPrice}</span>
                )}
              </div>
              
              {product.rating && (
                <div className="product-rating">
                  <span className="stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </span>
                  <span className="rating-count">({product.reviews ? product.reviews.length : Math.floor(product.rating * 24)})</span>
                </div>
              )}
            </div>

            <button
              className="product-card-btn"
              onClick={ () => navigate(`/product/${product.id}`) }
              type="button"
            >
              <i className="fa-regular fa-eye"></i> View Details
            </button>
        </div>
    
  )
}

export default React.memo(ProductCard);



