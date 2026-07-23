import { useNavigate } from "react-router-dom"

function ProductCard( { product} ) {
  
  const navigate = useNavigate();
  
  return (
    
        <div className="product-card" >
            <div className="product-image">
              <img src={product.thumbnail} alt={product.title} />
            </div>

            <h3>{product.title}</h3>
            <p>$ {product.price}</p>

            <button
              onClick={ () => navigate(`/product/${product.id}`) }
            >View Details</button>
        </div>
    
  )
}

export default ProductCard