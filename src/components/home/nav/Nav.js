import React from "react";
import "./nav.scss";
import { Link } from "react-router-dom";
import Carousel from "../carousel/Carousel";

const Nav = () => {
  return (
    <div>
      <div className="menu-container">
        <nav className="nav-area hidden shadow-md text-sm lg:block ">
          <ul>
            <li>
              <Link to="">Electronic Devices</Link>
            </li>
            <li>
              <Link to="">Electronic Accessories</Link>
            </li>
            <li>
              <Link to="">Tv & Home Application</Link>
            </li>
            <li>
              <Link to="">Health & Beauty</Link>
            </li>
            <li>
              <Link to="">Babies & Toys</Link>
            </li>
            <li>
              <Link to="">Groceries & Pets</Link>
            </li>
            <li>
              <Link to="">Home & Lifestyle</Link>
            </li>
            <li>
              <Link to="">Women's Fashion</Link>
            </li>
            <li>
              <Link to="">Men's Fashion</Link>
            </li>
            <li>
              <Link to="">Watches & Accessories</Link>
            </li>
            <li>
              <Link to="">Sports & Outdoor</Link>
            </li>
            <li>
              <Link to="">Automotive & Motorbike</Link>
            </li>
          </ul>
        </nav>

        <div className="carousel-area">
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default Nav;
