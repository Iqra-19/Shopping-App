import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar( {cart, wishlist, setWishlist} ) {
  
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
  
  return (
    <header className="navbar-header">
      <nav className="navbar">
        <Link to="/" className="navbar-brand">
          <span className="brand-badge">
            <i className="fa-solid fa-bag-shopping"></i>
          </span>
          <h2 className="brand-title">ShopEase</h2>
        </Link>

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

        <div className="navbar-menu">
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
            <i className="fa-solid fa-house nav-icon"></i> Home
          </NavLink>
          <NavLink to="/shop" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
            <i className="fa-solid fa-store nav-icon"></i> Shop
          </NavLink>
          <NavLink to="/cart" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
            <i className="fa-solid fa-cart-shopping nav-icon"></i> Cart
              {cart.length > 0 && (
                <span className='cart-badge'> {totalItems} </span>
              )}
          </NavLink>
          <NavLink to="/wishlist" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
            <i className="fa-solid fa-heart nav-icon"></i> Wishlist
              {wishlist.length > 0 && (
                <span className='cart-badge'> {wishlist.length} </span>
              )}
          </NavLink>
          <NavLink to="/login" className={({ isActive }) => isActive ? "nav-item nav-btn-login active" : "nav-item nav-btn-login"}>
            <i className="fa-solid fa-user nav-icon"></i> Login
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

