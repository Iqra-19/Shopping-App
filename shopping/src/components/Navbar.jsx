import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <header className="navbar-header">
      <nav className="navbar">
        <Link to="/" className="navbar-brand">
          <span className="brand-badge">🛍️</span>
          <h2 className="brand-title">My Shopping</h2>
        </Link>

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