import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { uservaluereturn } from '../../App';
import './NavBar.css';

function NavBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);


  const [items, setItems] = useState([]);

useEffect(() => {
  const items = JSON.parse(localStorage.getItem('user'));
  if (items) {
   setItems(items);
  }
}, []);

// console.log("in navbar",items.given_name.split("")[0])
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const [showAboutPopup, setShowAboutPopup] = useState(false);

const toggleAboutPopup = () => {
  setShowAboutPopup(!showAboutPopup);
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
          <Link  className="navbar-link" onClick={toggleAboutPopup}>About</Link>
        </li>
      </ul>
      <div className="navbar-profile">
        <div className="profile-icon" onClick={toggleDropdown}>
          <img src={items?.picture} alt={"img"} className="profile-img"/>
        </div>
        {dropdownOpen && (
          <div className="dropdown-menu">
            <ul>
              <li><Link to="/profile" className="dropdown-link">Profile</Link></li>
              <li><Link to="/settings" className="dropdown-link">Settings</Link></li>
              <li><Link to="/login" className="dropdown-link">Logout</Link></li>
            </ul>
            </div>
        )}
      </div>
      
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
