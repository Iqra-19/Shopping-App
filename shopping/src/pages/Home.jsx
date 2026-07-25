import Hero from '../components/Hero/Hero'
import Categories from '../components/Categories/Categories'
import ProductGrid from '../components/ProductGrid/ProductGrid'
import Wishlist from './Wishlist'

function Home( {products, wishlist,handleWishlist} ) {
    
    console.log("Wishlist at home", wishlist);
    return (
        <>
            <Hero />

            <Categories />

            <ProductGrid 
             title="Featured Products"
            products={products}
            wishlist={wishlist}
            handleWishlist={handleWishlist}/> 
        </>
    )
}

export default Home