import { useSearchParams } from "react-router-dom"

import ProductGrid from "../components/ProductGrid/ProductGrid"

function Shop( {products, wishlist, handleWishlist} ) {
  
  const [searchParams] = useSearchParams();

  const search = searchParams.get('search') || '';
  //console.log("Search",search);

  const filterProducts = products.filter( (product) => 
    product.title.toLowerCase().includes(search.toLocaleLowerCase())
  );

  console.log("Wishlist at shop", wishlist);
  
  return (
    <>
      <ProductGrid 
       title="All Products"
      products={filterProducts}
      wishlist={wishlist}
      handleWishlist={handleWishlist}
      />
    </>
  )
}

export default Shop