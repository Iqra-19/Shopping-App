import { useEffect, useState } from 'react'

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
          <div className="product-card" key={product.id} >
            <div className="product-image">
              <img src={product.thumbnail} alt={product.title} />
            </div>

            <h3>{product.title}</h3>
            <p>{product.price}</p>

            <button>View Details</button>
        </div>
        ) )}


      </div>

    </section>
  )
}

export default FeaturedProducts
