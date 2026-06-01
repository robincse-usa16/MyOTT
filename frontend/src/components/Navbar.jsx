import { Search, User } from "lucide-react";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">Bingme</div>

      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/">Movies</a>
        <a href="/">Series</a>
        <a href="/">Sports</a>
        <a href="/">Live TV</a>
      </div>

      <div className="nav-actions">
        <Search size={22} />
        <button className="subscribe-btn">Subscribe</button>
        <User size={22} />
      </div>
    </nav>
  );
};

export default Navbar;
