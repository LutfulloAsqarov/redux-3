import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import "./Header.scss";
import { IoSearchSharp } from "react-icons/io5";
// useSelector - input

const Header = () => {
    let count = useSelector((state) => state.counter.value);
    let wishlistCount = useSelector((state) => state.wishlist.value).length;
    return (
        <header id="header">
            <div className="header container">
                <div className="header__logo">
                    <Link to={"/"}>RichEcom</Link>
                </div>
                <form className="header__form" action="">
                    <input type="text" placeholder="Search" />
                    {/* <div className="header__form__select"> */}
                    <select name="" id="">
                        <option value="all-type">All type</option>
                        <option value="foods">Foods</option>
                        <option value="clothes">Clothes</option>
                        <option value="techniques">Techniques</option>
                    </select>
                    {/* </div> */}
                    <div className="header__form__search-icon">
                        <IoSearchSharp />
                    </div>
                </form>
                <div className="header__nav">
                    <NavLink to={"/sign-in"} className={"header__link"}>
                        <span>Sign in</span>
                    </NavLink>
                    <NavLink to={"/wishlist"} className={"header__link"}>
                        <span>Wishlist</span>
                        {/* {wishlistCount ? <sup>{wishlistCount}</sup> : <></>} */}
                    </NavLink>
                    <NavLink to={"/cart"} className={"header__link"}>
                        <span> My cart</span>
                    </NavLink>
                </div>
            </div>
        </header>
    );
};

export default Header;
