import { useEffect, useState } from 'react'

import ProductCard from '../ProductCard/ProductCard';
import './FeaturedProducts.css'

function FeaturedProducts() {
  
  const [products, setProducts] = useState([]);

  useEffect( ()=> {
    fetch("https://dummyjson.com/products?limit=194")
    .then((response) => response.json() )
    .then( (data) => {
      //console.log(data)
      //console.log(data.products)

      setProducts(data.products)
    } )
  }, [] );

  console.log("products:",products);
  console.log("Lenght:",products.length);
  return (
   <section className="featured-products">

      <h2>Featured Products</h2>

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

export default FeaturedProducts
