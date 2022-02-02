import React from "react";
import { useSelector } from "react-redux";
import hero from "../images/title.png";
import Button from "./Button";
import { isLogined } from "../utils/selectorFns";
import { Link, useLocation } from "react-router-dom";
import { logout } from "../slices/userSlice";
import { useDispatch } from "react-redux";
import "./Header.scss";

const Header = () => {
  const { pathname: location } = useLocation();

  const isAuthorized = useSelector(isLogined);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };
  return isAuthorized ? (
    <>
      <header>
        <div className='hero'>
          <img src={hero} alt='' />
        </div>
        <nav className='nav'>
          <div className='links'>
            <Link
              to='/'
              className={`nav-link${location === "/" ? " active" : ""}`}
            >
              All articles
            </Link>
            <Link
              to='/my_articles'
              className={`nav-link${
                location === "/my_articles" ? " active" : ""
              }`}
            >
              My articles
            </Link>
            <Link
              to='add_article'
              className={`nav-link${
                location === "/add_article" ? " active" : ""
              }`}
            >
              Add article
            </Link>
            <Link
              to='profile'
              className={`nav-link${location === "/profile" ? " active" : ""}`}
            >
              Profile
            </Link>
          </div>
          <Button theme='black' onClick={logoutHandler}>
            Logout
          </Button>
        </nav>
      </header>
    </>
  ) : (
    <>
      <header>
        <div className='hero'>
          <img src={hero} alt='' />
        </div>
        <nav className='nav'>
          <Link to='/login'>
            <Button theme='white'>Login</Button>
          </Link>
          <Link to='/signup'>
            <Button theme='black'>Sign in</Button>
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
