import './Categories.css'

function Categories() {
  return (
    <section className="categories-section">
      <div className="categories-header">
        <span className="categories-subhead">SHOP BY CATEGORY</span>
        <h2 className="categories-title">Shop By Categories</h2>
      </div>
      
      <div className="categories-container">
        <div className="category-card">
          <div className="category-icon-wrapper">
            <i className="fa-solid fa-laptop category-icon"></i>
          </div>
          <span className="category-name">Electronics</span>
        </div>
        <div className="category-card">
          <div className="category-icon-wrapper">
            <i className="fa-solid fa-gem category-icon"></i>
          </div>
          <span className="category-name">Jewelry</span>
        </div>
        <div className="category-card">
          <div className="category-icon-wrapper">
            <i className="fa-solid fa-shirt category-icon"></i>
          </div>
          <span className="category-name">Men's Clothing</span>
        </div>
        <div className="category-card">
          <div className="category-icon-wrapper">
            <i className="fa-solid fa-person-dress category-icon"></i>
          </div>
          <span className="category-name">Women's Clothing</span>
        </div>
      </div>
    </section>
  )
}

export default Categories
