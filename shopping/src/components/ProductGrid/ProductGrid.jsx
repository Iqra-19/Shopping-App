
import ProductCard from '../ProductCard/ProductCard';
import './ProductGrid.css'

function ProductGrid( {products} ) {
  

  return (
   <section className="featured-products">


      <div className="product-grid">
        {products.map( (product) => (
          <ProductCard 
            key={product.id}
            product={product}
          />
        ) )}


      </div>

    </section>
  )
}

export default ProductGrid
