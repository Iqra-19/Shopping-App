import ProductCard from '../ProductCard/ProductCard';
import './ProductGrid.css';
import { useNavigate } from 'react-router-dom';

function ProductGrid({ title, products = [], showControls = false }) {
  const navigate = useNavigate();

  return (
    <section className="featured-products">
      <div className="product-grid-header">
        {title && <h2 className="product-grid-title">{title}</h2>}
        
        {showControls && (
          <button 
            type="button" 
            className="view-all-btn"
            onClick={() => navigate('/shop')}
          >
            View All <i className="fa-solid fa-arrow-right"></i>
          </button>
        )}
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard 
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductGrid;
