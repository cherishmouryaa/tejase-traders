import React from "react";
import { useNavigate } from "react-router-dom";
import productsData from "../data/productsData";
import "./Products.css";

function Products() {

    const navigate = useNavigate();

    return (
        <div className="products-page">
            <button
                className="back-btn"
                onClick={() => window.history.back()}
            ></button>
            <button
                className="back-btn"
                onClick={() => window.history.back()}
            >
                ← Back
            </button>

            <h1>Our Export Products</h1>

            <div className="products-grid">
                {productsData.map((item, i) => (
                    <div
                        key={i}
                        className="product-card"
                        onClick={() => navigate(`/product/${item.id}`)}
                    >
                        <img src={item.images[0]} alt={item.title} />
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Products;