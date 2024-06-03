import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    decreaseAmount,
    increaseAmount,
    remove,
} from "../../context/slice/cartSlice";
import { like } from "../../context/slice/wishlistSlice";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import "./CartWrapper.scss";
import { Link } from "react-router-dom";

const CartWrapper = ({ data }) => {
    let dispatch = useDispatch();
    const wishlistData = useSelector((state) => state.wishlist.value);

    let cartItems = data?.map((el) => (
        <div key={el.id} className="carts__item">
            <div className="carts__info">
                <Link to={`/single/${el.id}`}>
                    <div className="carts__img">
                        <img
                            src={el.images[0]}
                            alt={el.title}
                            width={80}
                            height={80}
                        />
                    </div>
                </Link>
                <div>
                    <h3>{el.title}</h3>
                    <p>{el.category}</p>
                </div>
            </div>
            <div className="carts__amount">
                <div className="carts__amount__btns">
                    <button
                        disabled={el.amount === 1}
                        onClick={() => dispatch(decreaseAmount(el))}
                    >
                        -
                    </button>
                    <span>{el.amount}</span>

                    <button
                        disabled={el.amount >= el.stock}
                        onClick={() => dispatch(increaseAmount(el))}
                    >
                        +
                    </button>
                </div>
                <div className="carts__amount__price">
                    <h3>${el.price * el.amount}</h3>
                    <p>${el.price} / per item</p>
                </div>
            </div>
            <div className="carts__btns">
                <button onClick={() => dispatch(like(el))}>
                    {wishlistData.some((data) => data.id === el.id) ? (
                        <FaHeart color="crimson" />
                    ) : (
                        <FaRegHeart />
                    )}
                </button>
                <button onClick={() => dispatch(remove(el))}>remove</button>
            </div>
        </div>
    ));
    return <div className="carts__items">{cartItems}</div>;
};

export default CartWrapper;
