import './Categories.css';
import { useNavigate } from 'react-router-dom';

const categoriesData = [
  { id: 'women', name: 'Women', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&q=80' },
  { id: 'men', name: 'Men', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=300&q=80' },
  { id: 'bags', name: 'Bags', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=300&q=80' },
  { id: 'footwear', name: 'Footwear', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&q=80' },
  { id: 'watches', name: 'Watches', image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=300&q=80' },
  { id: 'home', name: 'Home & Living', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&q=80' },
  { id: 'beauty', name: 'Beauty', image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=300&q=80' },
  { id: 'accessories', name: 'Accessories', image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=300&q=80' },
];

function Categories() {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName) => {
    navigate(`/shop?category=${encodeURIComponent(categoryName.toLowerCase())}`);
  };

  return (
    <section className="categories-section">
      <div className="categories-header">
        <h2 className="categories-title">Shop by Category</h2>
        <button 
          type="button" 
          className="view-all-btn"
          onClick={() => navigate('/shop')}
        >
          View All <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>

      <div className="categories-grid">
        {categoriesData.map((cat) => (
          <div 
            key={cat.id} 
            className="category-card"
            onClick={() => handleCategoryClick(cat.name)}
          >
            <div className="category-image-wrapper">
              <img src={cat.image} alt={cat.name} className="category-image" />
            </div>
            <span className="category-name">{cat.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;