import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/mainpage" className="navbar-link">Main Page</Link>
        </li>
        <li className="navbar-item">
          <Link to="/about" className="navbar-link">About</Link>
        </li>
      </ul>
      <div className="navbar-profile">
        <div className="profile-icon" onClick={toggleDropdown}>
          <img src="https://via.placeholder.com/40" alt="Profile" className="profile-img"/>
        </div>
        {dropdownOpen && (
          <div className="dropdown-menu">
            <ul>
              <li><Link to="/profile" className="dropdown-link">Profile</Link></li>
              <li><Link to="/settings" className="dropdown-link">Settings</Link></li>
              <li><Link to="/logout" className="dropdown-link">Logout</Link></li>
            </ul>
          <
  );
}

export default NavBar;
