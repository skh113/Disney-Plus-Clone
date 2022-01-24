import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Nav>
      <a href="#">
        <Logo src="/images/logo.svg" />
      </a>
      <NavMenu>
        <a>
          <img src="/images/home-icon.svg" />
          <span>HOME</span>
        </a>
        <a>
          <img src="/images/search-icon.svg" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="/images/original-icon.svg" />
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" />
          <span>MOVIES</span>
        </a>
        <a>
          <img src="/images/series-icon.svg" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src="/images/account.png" />
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 36px;
`;

const Logo = styled.img`
  width: 80px;
  cursor: pointer;
`;

const NavMenu = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;

  @media (max-width: 935px) {
    display: none;
  }

  a {
    display: flex;
    align-items: center;
    padding: 0 20px;
    img {
      height: 20px;
      margin: 5px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;
      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transform: scaleX(0);
        transition: 500ms;
      }
    }
    &:hover {
      span:after {
        opacity: 80%;
        transform: scaleX(1);
        transition: 500ms;
      }
    }
  }
`;

const UserImg = styled.img`
  height: 40px;
  width: 40px;
  cursor: pointer;
`;
