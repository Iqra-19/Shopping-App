import { useParams } from "react-router-dom"

import ProductGrid from "../components/ProductGrid/ProductGrid";
import './ProductDetails.css'

function ProductDetails( {products} ) {
  
    const { id } = useParams();
    const product = products.find(
        (item) => item.id === Number(id)        // Number(id) --> string to Number 
    );

    //console.log(product);

    if(!product){
        return <h4>Loading...</h4>
    }

    const releteProducts = products.filter((item) => 
        item.category === product.category &&
        item.id !== product.id)
        .slice(0,4)

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
                    ⭐ {product.rating} ({product.reviews.length} Reviews)
                </p>

                <h2 className="price">
                    ${product.price}
                </h2>

                <p className="discount">
                    {product.discountPercentage}% OFF
                </p>

                <p>
                    <strong>Brand:</strong> {product.brand}
                </p>

                <p>
                    <strong>Category:</strong> {product.category}
                </p>

                <p className="stock">
                    <strong>Availability:</strong> {product.availabilityStatus}
                </p>

                <p className="description">
                    {product.description}
                </p>

                <div className="product-action">
                    <button className="cart-btn">
                        Add to Cart
                    </button>
                    <button className="wishlist-btn">
                        ❤️ Add to wishlist
                    </button>
                </div>
            </div>
        </section>

        
        <ProductGrid 
            title="Related Products"
            products={releteProducts}/>
    </>
  )
}

export default ProductDetails