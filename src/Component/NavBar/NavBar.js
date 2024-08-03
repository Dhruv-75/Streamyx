import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons'; // Use gear icon
import './NavBar.css';

function NavBar() {
  // State variables
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [items, setItems] = useState(null);
  const [showProfilePopup, setShowProfilePopup] = useState(false); // State for profile popup
  const [showAboutPopup, setShowAboutPopup] = useState(false); // State for about popup

  // Effect hook to fetch user data from local storage when the component mounts
  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem('user'));
  //   if (user) {
  //     setItems(user);
  //   }
  // }, []);

  // Function to toggle the settings dropdown menu
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Function to toggle the profile popup
  const toggleProfilePopup = () => {
    setShowProfilePopup(!showProfilePopup);
  };

  // Function to toggle the about popup
  const toggleAboutPopup = () => {
    setShowAboutPopup(!showAboutPopup);
  };

  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        {/* Profile link that toggles the profile popup */}
        <li className="navbar-item">
          <Link className="navbar-link" onClick={toggleProfilePopup}>Profile</Link>
        </li>
        {/* Main Page link */}
        <li className="navbar-item">
          <Link to="/mainpage" className="navbar-link">Main Page</Link>
        </li>
        {/* About link that toggles the about popup */}
        <li className="navbar-item">
          <Link className="navbar-link" onClick={toggleAboutPopup}>About</Link>
        </li>
      </ul>
      <div className="navbar-profile">
        {/* Settings icon that toggles the dropdown menu */}
        <div className="profile-icon" onClick={toggleDropdown}>
          <FontAwesomeIcon icon={faCog} className="settings-icon" />
        </div>
        {/* Dropdown menu for settings and logout */}
        {dropdownOpen && (
          <div className="dropdown-menu">
            <ul>
              <li><Link to="/settings" className="dropdown-link">Settings</Link></li>
              <li><Link to="/login" className="dropdown-link">Logout</Link></li>
            </ul>
          </div>
        )}
      </div>
      {/* Profile popup */}
      {showProfilePopup && (
        <div className="profile-popup-overlay">
          <div className="profile-popup">
            <div className="profile-popup-header">
              <h2>Profile</h2>
              <button className="close-button" onClick={toggleProfilePopup}>×</button>
            </div>
            <div className="profile-popup-content">
              {/* Profile image and details */}
              {/* <img src={items?.picture} alt="Profile" className="profile-popup-img" /> */}
              <h3>{items?.name}</h3>
              <p>Email: {items?.email}</p>
              {/* Add any other profile details you want */}
            </div>
          </div>
        </div>
      )}
      {/* About popup */}
      {showAboutPopup && (
        <div className="about-popup">
          <div className="about-popup-content">
            <h2>About Us</h2>
            <p>Welcome to Streamline Solutions, your go-to partner for efficient and affordable web streaming services. We are a passionate team of technology enthusiasts, dedicated to providing small and medium-sized organizations with the tools and support they need to reach their audiences through high-quality video streaming.</p>
            <button onClick={toggleAboutPopup}>Close</button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
