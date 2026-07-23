import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  
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
  
  return (
    <header className="navbar-header">
      <nav className="navbar">
        <Link to="/" className="navbar-brand">
          <span className="brand-badge">🛍️</span>
          <h2 className="brand-title">ShopEase</h2>
        </Link>

        <input 
            type="text" 
            placeholder='Search product...'
            value={search}
            onChange={ (e) => setSearch(e.target.value)}
            onKeyDown={ (e) => {
              if(e.key === 'Enter'){
                handleSearch();
              }
            } }
        />

        <div className="navbar-menu">
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
            Home
          </NavLink>
          <NavLink to="/shop" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
            Shop
          </NavLink>
          <NavLink to="/cart" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
            Cart
          </NavLink>
          <NavLink to="/wishlist" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
            Wishlist
          </NavLink>
          <NavLink to="/login" className={({ isActive }) => isActive ? "nav-item nav-btn-login active" : "nav-item nav-btn-login"}>
            Login
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;