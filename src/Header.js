import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import {auth} from "./firebase";


function Header() {
  const [{ basket,user}, dispatch] = useStateValue();

  const handleAuth = () => {
    if(user)
    {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header-logo"
          src="http://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
        />
      </Link>
      <div className="header-search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div className="header__option" onClick={handleAuth}>
            <span className="header__optionLineOne">Hello {user === null? 'Guest': user.email}</span>
            <span className="header__optionLineTwo">{user === null? 'Sign In':'Sign Out'}</span>
          </div>
        </Link>

        <Link to="/orders">
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">&#38; Orders</span>
        </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingCartIcon />
            <span className="header__optionLineTwo header_basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default Header;
