import Hero from '../components/Hero/Hero'
import Categories from '../components/Categories/Categories'
import ProductGrid from '../components/ProductGrid/ProductGrid'

function Home( {products} ) {
    return (
        <>
            <Hero />

            <Categories />

            <h2>Featured Products</h2>
            <ProductGrid products={products}/> 
        </>
    )
}

export default Home