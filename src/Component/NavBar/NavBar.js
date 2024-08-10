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
  const [showTrainerPopup, setShowTrainerPopup] = useState(false);
  const [showDieticianPopup, setShowDieticianPopup ] = useState(false);
  const [showContactPopup, setShowContactPopup ] = useState(false);

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

  const toggleTrainerPopup = () => { // New toggle function for Trainer Details
    setShowTrainerPopup(!showTrainerPopup);
  };

  const toggleDieticianPopup = () => { // New toggle function for Dietician Details
    setShowDieticianPopup(!showDieticianPopup);
  };

  const toggleContactPopup = () => { // New toggle function for Dietician Details
    setShowContactPopup(!showContactPopup);
  };

  const closePopups = (e) => {
    if (!e.target.closest('.profile-popup') && !e.target.closest('.about-popup') && !e.target.closest('.trainer-popup') && !e.target.closest('.trainer-popup') && !e.target.closest('.trainer-popup')) {
      setShowProfilePopup(false);
      setShowAboutPopup(false);
      setDropdownOpen(false); // Close dropdown when clicking outside
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
          <Link className="navbar-link" onClick={toggleDieticianPopup}>Dietician</Link>
        </li>
        <li className="navbar-item"> {/* New Nav Item for Trainer Details */}
          <Link className="navbar-link" onClick={toggleTrainerPopup}>Fitness Trainer</Link>
        </li>
        <li className="navbar-item">
          <Link className="navbar-link" onClick={toggleAboutPopup}>About US</Link>
        </li>
        <li className="navbar-item">
          <Link className="navbar-link" onClick={toggleContactPopup}>Contact US</Link>
        </li>
      </ul>
      <div className="navbar-profile">
        <div className="profile-icon" onClick={toggleDropdown}>
          <FontAwesomeIcon
            icon={faCog}
            className={`settings-icon ${dropdownOpen ? 'rotating' : ''}`}
          />
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
              <h3>{items?.name}</h3>
              <p>Email: {items?.email}</p>
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
      {showTrainerPopup && (
      <div className="trainer-popup-overlay">
        <div className="trainer-popup show">
          <div className="trainer-popup-header">
            <h2>Fitness Trainer</h2>
          </div>
        <div className="trainer-popup-content">
              <p>Our trainers are industry experts with years of experience in fitness and nutrition. They are dedicated to helping you achieve your health and wellness goals through personalized programs and support.</p>
              <ul>
                <li><b>John Doe</b> - Certified Personal Trainer</li>
                <li><b>Jane Smith</b> - Nutrition Specialist</li>
                <li><b>Mike Johnson</b> - Yoga Instructor</li>
              </ul>
          <button onClick={toggleTrainerPopup}>Close</button>
          </div>
        </div>
      </div>
    )}
    {showDieticianPopup && (
    <div className="dietician-popup-overlay">
      <div className="dietician-popup show">
        <div className="dietician-popup-header">
          <h2>Dietician</h2>
        </div>
        <div className="dietician-popup-content">
          <p>Our dieticians are experts in nutrition and dietary planning. They are committed to helping you develop a healthy relationship with food, creating customized meal plans that align with your health goals and lifestyle.</p>
          <ul>
            <li><b>Emily White</b> - Registered Dietician</li>
            <li><b>Sarah Brown</b> - Clinical Nutritionist</li>
            <li><b>Tom Green</b> - Sports Nutrition Specialist</li>
          </ul>
          <button onClick={toggleDieticianPopup}>Close</button>
        </div>
      </div>
    </div>
    )}
    {showContactPopup && (
        <div className="contact-popup-overlay">
          <div className="contact-popup show">
            <div className="contact-popup-content">
            <h2><b>Contact US</b></h2>
            <ul>
              <li>Amanpreet Singh</li>
              <li>Dharmindar Singh</li>
              <li>Johnson Solanki</li>
              <li>Dinesh Surneni</li>
              <li>Dhruv Mistry</li>
            </ul>
            <button onClick={toggleContactPopup}>Close</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
