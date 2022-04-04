import React from "react";

import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";

import "./header.scss";

const TopLinkBar = () => {
  return (
    <>
      {/* container */}
      <div className="text-xs hidden sm:hidden md:text-center lg:text-right lg:block bg-gray-200 py-1 lg:px-36">
        <a className="top-link underline text-red-600" href="">
          SAVE MORE ON APP
        </a>
        <a className="top-link" href="">
          SELL ON DARAZ
        </a>
        <a className="top-link" href="">
          CUSTOMER
        </a>
        <a className="top-link" href="">
          TRACK MY ORDER
        </a>
        <a className="top-link" href="">
          SIGNUP / LOGIN
        </a>
        <a className="top-link" href="">
          DARAZ AFFILIATE PROGRAM
        </a>
        <a className="top-link" href="">
          ভাষা
        </a>
      </div>
    </>
  );
};

const Header = () => {
  return (
    <>
      <TopLinkBar />
      <header className="main-header sticky top-0">
        <div className="logo">
          <img src="./images/logo.png" alt="" />
        </div>
        <div className="search-area">
          <form action="">
            <input
              className="bg-gray-200"
              type="search"
              placeholder="Search for Products"
            />
            <button>
              <BsSearch />
            </button>
          </form>
        </div>
        <div className="icon">
          <AiOutlineShoppingCart className="text-3xl" />
        </div>
      </header>
    </>
  );
};

export default Header;
