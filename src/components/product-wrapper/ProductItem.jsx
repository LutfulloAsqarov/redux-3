import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { like } from "../../context/slice/wishlistSlice";
import { add } from "../../context/slice/cartSlice";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
    const dispatch = useDispatch();
    const wishlistData = useSelector((state) => state.wishlist.value);
    const cartData = useSelector((state) => state.cart.value);
    return (
        <div className="product__item">
            <Link to={`/single/${product.id}`}>
                <img src={product.images[0]} width={200} alt="" />
            </Link>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <button onClick={() => dispatch(like(product))}>
                {wishlistData.some((el) => el.id === product.id) ? (
                    <FaHeart color="crimson" />
                ) : (
                    <FaRegHeart />
                )}
            </button>
            <button onClick={() => dispatch(add(product))}>
                {cartData.some((el) => el.id === product.id) ? (
                    <span>Added</span>
                ) : (
                    <span>Add to cart</span>
                )}
            </button>
        </div>
    );
};

export default ProductItem;
