import Hero from '../components/Hero/Hero'
import Categories from '../components/Categories/Categories'
import ProductGrid from '../components/ProductGrid/ProductGrid'

function Home( {products} ) {
    return (
        <>
            <Hero />
            <Categories />
            <ProductGrid 
              title="Best Sellers"
              products={products.slice(0, 6)}
              showControls={true}
            /> 
        </>
    )
}

export default Home