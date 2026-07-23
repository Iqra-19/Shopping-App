import { useSearchParams } from "react-router-dom"

import ProductGrid from "../components/ProductGrid/ProductGrid"

function Shop( {products} ) {
  
  const [searchParams] = useSearchParams();

  const search = searchParams.get('search') || '';
  //console.log("Search",search);

  const filterProducts = products.filter( (product) => 
    product.title.toLowerCase().includes(search.toLocaleLowerCase())
  );
  
  return (
    <>
      <ProductGrid 
       title="All Products"
      products={filterProducts}/>
    </>
  )
}

export default Shop