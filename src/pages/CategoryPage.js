import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import productsData from "../data/productsData";
import "./CategoryPage.css";

function CategoryPage() {

    const navigate = useNavigate();
    const { type } = useParams();

    let filtered = [];

    if (type === "fruits") {
        filtered = productsData.filter(p => p.id === "pomegranates" || p.id === "lemons");
    } else if (type === "vegetables") {
        filtered = productsData.filter(p => p.id === "onions" || p.id === "garlic");
    } else if (type === "spices") {
        filtered = productsData.filter(p => p.id === "greenchilli" || p.id === "pepper");
    } else if (type === "meat") {
        filtered = productsData.filter(p => p.id === "chicken");
    } else if (type === "seafood") {
        filtered = productsData.filter(p => p.id === "prawns");
    }

    return (
        <div className="category-page">
            <h2 className="title">{type.toUpperCase()}</h2>

            <div className="grid">
                {filtered.map((item, i) => (
                    <div
                        key={i}
                        className="card"
                        onClick={() => navigate(`/product/${item.id}`)}
                    >
                        <img src={item.images[0]} alt={item.title} />
                        <h3>{item.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CategoryPage;