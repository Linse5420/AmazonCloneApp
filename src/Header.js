import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

import SearchIcon from "@material-ui/icons/Search";
import AddShoppingCartOutlined from "@material-ui/icons/AddShoppingCartOutlined";
import { UseStateValue } from "./StateProvider";



const Header = () => {
    const [{basket}]=UseStateValue();
    console.log(basket);
  return (
    <nav className="header">
      <a href="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazonlogo"
        />
      </a>
      <div className="header-search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        {/*first link*/}
        <a href="/login" className="header-link" >
          <div className="header-option">
            <span className="header-option91">Hello</span>
            <span className="header-option92">Sign In</span>
          </div>
        </a>
        {/*2nd link*/}

        <a  href="/login" className="header-link">
          <div className="header-option">
            <span className="header-option91">Returns</span>
            <span className="header-option92">& Orders</span>
          </div>
        </a>
        {/*3rd link*/}
        <a href="/login" className="header-link">
          <div className="header-option">
            <span className="header-option91">Your</span>
            <span className="header-option92">Prime</span>
          </div>
        </a>
        <a href="/checkout" className="header-link">
          {/**basketIcon and number of items inside the basket */}
          <div className="header_baseket">
            <AddShoppingCartOutlined />
            <span className="header-option92_basket_count">{(basket?.length)}</span>
          </div>
        </a>
      </div>
    </nav>
  );

};


export default Header;

