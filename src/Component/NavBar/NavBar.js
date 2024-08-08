import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import './NavBar.css';

function NavBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [items, setItems] = useState(null);
  const [showProfilePopup, setShowProfilePopup] = useState(false);
  const [showAboutPopup, setShowAboutPopup] = useState(false);

  // Uncomment and use this if you want to load user data from local storage
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setItems(user);
    }
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleProfilePopup = () => {
    setShowProfilePopup(!showProfilePopup);
  };

  const toggleAboutPopup = () => {
    setShowAboutPopup(!showAboutPopup);
  };

  const closePopups = (e) => {
    if (!e.target.closest('.profile-popup') && !e.target.closest('.about-popup') && !e.target.closest('.profile-icon')) {
      setShowProfilePopup(false);
      setShowAboutPopup(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', closePopups);
    return () => document.removeEventListener('mousedown', closePopups);
  }, []);

  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link className="navbar-link" onClick={toggleProfilePopup}>Profile</Link>
        </li>
        <li className="navbar-item">
          <Link to="/mainpage" className="navbar-link">Main Page</Link>
        </li>
        <li className="navbar-item">
          <Link className="navbar-link" onClick={toggleAboutPopup}>About</Link>
        </li>
      </ul>
      <div className="navbar-profile">
        <div className="profile-icon" onClick={toggleDropdown}>
          <FontAwesomeIcon icon={faCog} className="settings-icon" />
        </div>
        {dropdownOpen && (
          <div className="dropdown-menu">
            <ul>
              <li><Link to="/settings" className="dropdown-link">Settings</Link></li>
              <li><Link to="/login" className="dropdown-link">Logout</Link></li>
            </ul>
          </div>
        )}
      </div>
      {showProfilePopup && (
        <div className="profile-popup-overlay">
          <div className="profile-popup show">
            <div className="profile-popup-header">
              <h2>Profile</h2>
            </div>
            <div className="profile-popup-content">
              {/* Profile image and details */}
              {/* <img src={items?.picture} alt="Profile" className="profile-popup-img" /> */}
              <h3>{items?.name}</h3>
              <p>Email: {items?.email}</p>
              {/* Add any other profile details you want */}
              <button onClick={toggleProfilePopup}>Close</button>
            </div>
          </div>
        </div>
      )}
      {showAboutPopup && (
        <div className="about-popup-overlay">
          <div className="about-popup show">
            <div className="about-popup-content">
              <h2>About Us</h2>
              <p>Welcome to Streamline Solutions, your go-to partner for efficient and affordable web streaming services. We are a passionate team of technology enthusiasts, dedicated to providing small and medium-sized organizations with the tools and support they need to reach their audiences through high-quality video streaming.</p>
              <button onClick={toggleAboutPopup}>Close</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
