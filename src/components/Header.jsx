import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import hero from "../images/title.png";
import Button from "./Button";
import { isLogined } from "../utils/selectorFns";
import { Link, useLocation } from "react-router-dom";
import { logout } from "../slices/userSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const { pathname: location } = useLocation();

  const isAuthorized = useSelector(isLogined);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    console.log("logout handler");

    dispatch(logout());
  };
  return isAuthorized ? (
    <>
      <StyledHeader>
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
      </StyledHeader>
    </>
  ) : (
    <>
      <StyledHeader>
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
      </StyledHeader>
    </>
  );
};

export default Header;
const StyledHeader = styled.header`
  margin-top: 2.4rem;
  height: 7rem;
  display: flex;
  justify-content: space-between;
  align-items: start;
  border-bottom: 1px solid var(--clr-gray-lighter);
  .hero {
    margin-top: 0.8rem;
    width: 26.8rem;
    height: 3.2rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .nav {
    display: flex;
    .links {
      display: flex;
      margin-right: 6.4rem;
      align-items: center;
      .nav-link {
        text-decoration: none;
        cursor: pointer;
        font-size: 1.5rem;
        &:not(:last-child) {
          margin-right: 4rem;
        }
        &,
        &:active,
        &:hover,
        &:visited {
          color: var(--clr-black);
          /* font-size: 3rem; */
        }
        &.active {
          text-decoration: underline;
          text-underline-offset: 8px;
        }
      }
    }
    button:last-child {
      border-color: var(--clr-black);
      margin-left: 2.4rem;
    }
  }
`;
