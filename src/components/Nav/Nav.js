import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import mapStoreToProps from '../../redux/mapStoreToProps';

const Nav = (props) => {
  let loginLinkData = {
    path: '/login',
    text: 'Login / Register',
  };

  if (props.store.user.admin === true) {
    loginLinkData.path = '/admin-form';
    loginLinkData.text = 'Add Item';
  } 

  return (
    <div className="nav">
        <h2 className="nav-title">Creations by Casey</h2>
      <div className="nav-right">
        {/* ternary operator, checks to see if user is admin, if not, the link to the 
        "Home" page, which is the Admin AddItemForm, won't render. */}
        {props.store.user.admin ? 
        <Link className="nav-link" to={loginLinkData.path}>{loginLinkData.text}</Link> :
         ''}
         {!props.store.user.id && (
          <>
            <Link className="nav-link" to={loginLinkData.path}>{loginLinkData.text}</Link>
          </>
        )}
        <Link className="nav-link" to="/store">
          Store
        </Link>
        {/* Show the link to the info page and the logout button if the user is logged in */}
        {props.store.user.id && (
          <>
            <LogOutButton className="nav-link" />
          </>
        )}
        {/* Always show this link since the about page is not protected */}
        <Link className="nav-link" to="/about">
          About
        </Link>
      </div>
    </div>
  ); 
};

export default connect(mapStoreToProps)(Nav);
