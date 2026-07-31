import Hero from '../components/Hero/Hero'
import Categories from '../components/Categories/Categories'
import ProductGrid from '../components/ProductGrid/ProductGrid'
import Wishlist from './Wishlist'

function Home( {products} ) {
    
    return (
        <>
            <Hero />

            <Categories />

            <ProductGrid 
             title="Featured Products"
            products={products}
            /> 
        </>
    )
}

export default Home