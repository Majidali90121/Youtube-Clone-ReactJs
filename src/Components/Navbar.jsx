import { useState } from 'react';
import './Navbar.css';

const Navbar = ({ setSidebarOpen, onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (!query.trim()) return alert("Please enter a search term");
    onSearch(query.trim());  // Pass the search term to the parent component
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <button 
          className="menu-button" 
          onClick={() => setSidebarOpen(prev => !prev)}
        >
          ☰
        </button>
        <div className="logo">YouTube</div>
      </div>
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Search" 
          value={query}
          onChange={(e) => setQuery(e.target.value)} 
        />
        <button className="search-button" onClick={handleSearch}>🔍</button>
      </div>
      <div className="navbar-right">
        <button className="icon-button">📹</button>
        <button className="icon-button">🔔</button>
        <button className="icon-button">👤</button>
      </div>
    </div>
  );
};

export default Navbar;
