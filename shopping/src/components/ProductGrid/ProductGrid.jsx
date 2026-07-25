
import ProductCard from '../ProductCard/ProductCard';
import './ProductGrid.css'

function ProductGrid( {title, products, wishlist, handleWishlist} ) {
  
  console.log("wishlist at grid", wishlist);
  return (
   <section className="featured-products">

     {title && <h2>{title}</h2>}
     
      <div className="product-grid">
        {products.map( (product) => (
          <ProductCard 
              key={product.id}
              product={product}
              wishlist={wishlist}
              handleWishlist={handleWishlist}
          />
        ) )}


      </div>

    </section>
  )
}

export default ProductGrid
