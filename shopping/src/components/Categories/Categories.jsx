import './Categories.css'

function Categories() {
  return (
    <section className="categories-section">
      <h2 className="categories-title">Shop By Categories</h2>
      <div className="categories-container">
        <div className="category-card">Electronics</div>
        <div className="category-card">Jewelry</div>
        <div className="category-card">Men's Clothing</div>
        <div className="category-card">Women's Clothing</div>
      </div>
    </section>
  )
}

export default Categories