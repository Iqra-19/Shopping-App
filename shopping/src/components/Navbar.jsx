import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useWishlish } from '../hooks/useWishlish';
import { useCart } from '../hooks/useCart';

function Navbar() {

  const {cart} = useCart();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    const searchText = search.trim();
    if(!searchText){ 
      navigate("/shop")
      return
    }

    navigate(`/shop?search=${encodeURIComponent(searchText)}`);
  }

  const totalItems = cart.reduce(
    (total, item) => {
      return total + item.quantity;
    }, 0
  )

  const { wishlist } = useWishlish();
  
  return (
    <header className="navbar-header">
      {/* Top Banner */}
      <div className="top-banner">
        <div className="top-banner-content">
          <i className="fa-solid fa-truck-fast top-banner-icon"></i>
          <span>Free Shipping on all orders above $50 | Use code: <strong>SHOP50</strong></span>
        </div>
      </div>

      {/* Main Navbar Bar */}
      <div className="navbar-main">
        <nav className="navbar-container">

          {/* Logo / Brand */}
          <Link to="/" className="navbar-brand">
            <h2 className="brand-title">Shoply.</h2>
          </Link>

          {/* Center Navigation Links */}
          <div className="navbar-menu">
            <NavLink to="/" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
               Home
            </NavLink>
            <NavLink to="/shop" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
              Shop <i className="fa-solid fa-chevron-down nav-dropdown-icon"></i>
            </NavLink>
            <NavLink to="/category" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
              Categories <i className="fa-solid fa-chevron-down nav-dropdown-icon"></i>
            </NavLink>
            <NavLink to="/new" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
               New Arrivals
            </NavLink>
            <NavLink to="/sale" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
               Sale
            </NavLink>
            <NavLink to="/blog" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
               Blog
            </NavLink>
          </div>

          {/* Right Section: Search Bar & Icons */}
          <div className="navbar-actions">
            <div className="search-wrapper">
              <input 
                type="text" 
                placeholder='Search products...'
                value={search}
                onChange={ (e) => setSearch(e.target.value)}
                onKeyDown={ (e) => {
                  if(e.key === 'Enter'){
                    handleSearch();
                  }
                } }
              />
              <button type="button" className="search-btn" onClick={handleSearch} aria-label="Search">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>

            <div className="action-icons">
              <NavLink to="/wishlist" className={({ isActive }) => isActive ? "action-btn active" : "action-btn"} title="Wishlist" aria-label="Wishlist">
                <i className="fa-regular fa-heart action-icon"></i> 
                {wishlist.length > 0 && (
                  <span className='badge-count'>{wishlist.length}</span>
                )}
              </NavLink>
              
              <NavLink to="/login" className={({ isActive }) => isActive ? "action-btn active" : "action-btn"} title="Account" aria-label="Account">
                <i className="fa-regular fa-user action-icon"></i> 
              </NavLink>

              <NavLink to="/cart" className={({ isActive }) => isActive ? "action-btn active" : "action-btn"} title="Cart" aria-label="Cart">
                <i className="fa-solid fa-bag-shopping action-icon"></i>
                {cart.length > 0 && (
                  <span className='badge-count'>{totalItems}</span>
                )}
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;


