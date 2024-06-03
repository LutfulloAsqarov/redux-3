import React, { useState } from "react";
import Empty from "../../components/empty/Empty";
import { useSelector } from "react-redux";
import CartWrapper from "../../components/cart-wrapper";
import "./cart.scss";

const Cart = () => {
    const [value, setValue] = useState("");
    const [coupon, setCoupon] = useState(0);
    // const [totalPrice, setTotalPrice] = useState(0);
    let cartData = useSelector((state) => state.cart.value);
    let javob = cartData?.reduce((a, b) => a + b.amount * b.price, 0);
    let price = Math.floor(javob);
    console.log(value);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (value === "laylo") {
            setCoupon((price * 30) / 100);
        }
        setValue("");
    };
    console.log(coupon);
    return (
        <div className="container">
            {cartData.length ? (
                <div className="carts">
                    <div className="carts__left">
                        <h2>Your shopping cart</h2>
                        <CartWrapper data={cartData} />
                    </div>
                    <div className="carts__right">
                        <div className="carts__right__top">
                            <p>Have coupon?</p>
                            <form
                                onSubmit={handleSubmit}
                                className="carts__right__input"
                            >
                                <input
                                    value={value}
                                    onChange={(e) => setValue(e.target.value)}
                                    type="text"
                                    placeholder="Coupon code"
                                />
                                <button>Apply</button>
                            </form>
                        </div>
                        <div className="carts__right__bottom">
                            <div className="carts__right__total-price carts__right__price ">
                                <p>Total price:</p>
                                <span>${price}</span>
                            </div>
                            <div className="carts__right__discount carts__right__price">
                                <p>Discount:</p>
                                <span>- ${coupon}</span>
                            </div>
                            <div className="carts__right__total carts__right__price">
                                <p>Total:</p>
                                <span>${price - coupon}</span>
                            </div>
                            <div className="carts__right__btns">
                                <button>Make Purchase</button>
                                <button>Back to shop</button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <Empty
                    title="Savatchangiz bo'sh"
                    url={
                        "https://assets.materialup.com/uploads/66fb8bdf-29db-40a2-996b-60f3192ea7f0/preview.png"
                    }
                />
            )}
        </div>
    );
};

export default Cart;
