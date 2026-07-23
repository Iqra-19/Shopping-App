
import ProductCard from '../ProductCard/ProductCard';
import './ProductGrid.css'

function ProductGrid( {title, products} ) {
  

  return (
   <section className="featured-products">

     {title && <h2>{title}</h2>}
     
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
