import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import TokenContesxt from '../Store/TokenContext';
import "./Logout.css"

const LogoutButton = () => {
    const authctx=useContext(TokenContesxt)
    const history=useNavigate()
  const handleLogout = () => {
    // add code to handle logout logic
    authctx.logout()
    history("/")
    console.log('User has been logged out');
  };

  return (
    <button className="logout-button" onClick={handleLogout}>
      Logout
      <span className="logout-button-message">
        (Click here to logout)
      </span>
    </button>
  );
};

export default LogoutButton;
