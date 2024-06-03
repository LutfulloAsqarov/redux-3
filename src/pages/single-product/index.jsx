import axios from "../../api";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./singleProduct.scss";

const SingleProduct = () => {
    let { id } = useParams();
    const [data, setData] = useState(null);
    useEffect(() => {
        axios
            .get(`/products/${id}`)
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="single-product">
            <div className="single-product__img">
                <img src={data?.images[0]} alt="" />
            </div>
            <div className="single-product__info">
                <h2>{data?.title}</h2>
                <p>{data?.description}</p>
                <p>${data?.price}</p>
            </div>
        </div>
    );
};

export default SingleProduct;
