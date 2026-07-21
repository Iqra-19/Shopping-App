
function ProductCard( { product} ) {
  return (
    
        <div className="product-card" key={product.id} >
            <div className="product-image">
              <img src={product.thumbnail} alt={product.title} />
            </div>

            <h3>{product.title}</h3>
            <p>{product.price}</p>

            <button>View Details</button>
        </div>
    
  )
}

export default ProductCard