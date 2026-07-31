import { Link } from "react-router-dom"
import { useWishlish } from "../hooks/useWishlish";

function Wishlist() {

  const {wishlist, toggleWishlist} = useWishlish();

  if(wishlist.length <= 0){
    return (
      <>
        <h2> Your wishlist is empty. </h2>
        <p>Looks like you haven't saved any products yet.</p>
      </>
    )
  }

  return (
    <>
      <div className="wishlist-page">
        {wishlist.map( (product) => (
          <div key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <h2> {product.title} </h2>
              <p> Price: {product.price} </p>
              
              <Link to={`/product/${product.id}`}> View details </Link>
              <button onClick={() => toggleWishlist(product)}>
                  Remove
              </button>
          </div>
        ) )

        }
      </div>
    </>
  )
}

export default Wishlist  