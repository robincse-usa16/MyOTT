import { Search, CircleUserRound } from "lucide-react";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-top">
        <div className="navbar-left">
          <a href="/" className="nav-logo">
            Bing<span>+</span>
          </a>

          <nav className="nav-menu">
            <a href="/">Home</a>
            <a href="/">Sports</a>
            <a href="/">Movies</a>
            <a href="/">Free</a>
          </nav>
        </div>

        <div className="navbar-actions">
          <button className="nav-icon-btn" type="button">
            <Search size={24} />
          </button>

          <button className="nav-subscribe-btn" type="button">
            Subscribe
          </button>

          <button className="nav-icon-btn" type="button">
            <CircleUserRound size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
