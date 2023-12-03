import "./Nav.css";
import { FiHeart } from "react-icons/fi";
import products from "../db/data";
import { useState } from "react";

import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";


function Nav({handleInputChange , quary}) {
  return (
    <nav>
      <div className="nav-container">
        <input
        value={quary}
          onChange={handleInputChange}
          type="text"
          className="search-input"
          placeholder="Enter your search Shoes"
        />
      </div>
      <div className=" profile-container ">
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
}
export default Nav;
