import { useParams } from "react-router-dom"

import ProductGrid from "../components/ProductGrid/ProductGrid";
import './ProductDetails.css'

function ProductDetails( {products, cart, setCart, wishlist, setWishlist, handleWishlist} ) {
  
    const { id } = useParams();
    const product = products.find(
        (item) => item.id === Number(id)        // Number(id) --> string to Number 
    );

    if(!product){
        return <div className="product-details-loading"><i className="fa-solid fa-spinner fa-spin"></i> Loading product details...</div>
    }

    const releteProducts = products.filter((item) => 
        item.category === product.category &&
        item.id !== product.id)
        .slice(0,3)
    
    const handleAddToCart = () => {
        const existingProduct = cart.find( (item) => item.id === product.id );

        if(existingProduct){
            setCart(
                cart.map( (item) => 
                    item.id === product.id 
                        ? {
                            ...item,
                            quantity : item.quantity + 1
                        }
                        : item
                )
            )
        }
        else{
            setCart([
                ...cart,
                {
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    thumbnail: product.thumbnail,
                    quantity: 1,
                }
            ])
        }
    }
    //console.log("cart",cart);

    const isInCart = cart.some(
        (item) => item.id === product.id
    );

    const isWishlisted = wishlist.some(
        (item) => item.id === product.id
    );

  return (
    
    <>
        <h1 className="page-title">Product Details</h1>
        <section className="product-details">

            <div className="product-image">
                <img src={product.thumbnail} alt={product.title}  className="main-image" />
            </div>
            
            <div className="product-info">
                <h1>{product.title}</h1>

                <p className="rating">
                    <i className="fa-solid fa-star"></i> {product.rating} ({product.reviews ? product.reviews.length : 0} Reviews)
                </p>

                <h2 className="price">
                    ${product.price}
                </h2>

                {product.discountPercentage && (
                  <p className="discount">
                      <i className="fa-solid fa-tag"></i> {product.discountPercentage}% OFF
                  </p>
                )}

                <div className="product-meta">
                  <p>
                      <strong>Brand:</strong> {product.brand || 'ShopEase'}
                  </p>

                  <p>
                      <strong>Category:</strong> {product.category}
                  </p>

                  <p className="stock">
                      <strong>Availability:</strong> {product.availabilityStatus || 'In Stock'}
                  </p>
                </div>

                <p className="description">
                    {product.description}
                </p>

                <div className="product-action">
                    <button className="cart-btn" onClick={handleAddToCart}>
                        <i className="fa-solid fa-bag-shopping"></i>

                        {isInCart ? " Added to Cart" : " Add to Cart"}
                    </button>
                    
                    <button
                        className="wishlist-btn"
                        onClick={() => handleWishlist(product)}
                    >
                        <i
                            className={
                                isWishlisted
                                    ? "fa-solid fa-heart"
                                    : "fa-regular fa-heart"
                            }
                        ></i>

                        {isWishlisted
                            ? " Remove from Wishlist"
                            : " Add to Wishlist"}
                    </button>
                </div>

                <div className="product-trust-features">
                    <div className="feature-item">
                        <i className="fa-solid fa-truck-fast"></i>
                        <div>
                            <strong>Free Express Shipping</strong>
                            <span>On orders over $50</span>
                        </div>
                    </div>
                    <div className="feature-item">
                        <i className="fa-solid fa-shield-halved"></i>
                        <div>
                            <strong>2-Year Warranty</strong>
                            <span>Guaranteed authentic</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        
        <ProductGrid 
            title="Related Products"
            products={releteProducts}
            wishlist={wishlist}
            handleWishlist={handleWishlist}/>
    </>
  )
}

export default ProductDetails
