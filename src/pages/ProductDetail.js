import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import productsData from "../data/productsData";
import "./ProductDetail.css";

function ProductDetail() {
    const { name } = useParams();
    const navigate = useNavigate();

    const product = productsData.find(p => p.id === name);

    const [index, setIndex] = useState(0);

    /* SAFETY CHECK */
    useEffect(() => {
        if (!product) return;

        const interval = setInterval(() => {
            setIndex(prev => (prev + 1) % product.images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [product]);

    if (!product) return <h2>Product Not Found</h2>;

    return (
        <div className="product-detail">

            {/* TITLE */}
            <h1>{product.title}</h1>

            <div className="detail-container">

                {/* IMAGE SECTION */}
                <div className="image-box">
                    <img src={product.images[index]} alt={product.title} />

                    <div className="thumbs">
                        {product.images.map((img, i) => (
                            <img
                                key={i}
                                src={img}
                                alt=""
                                onClick={() => setIndex(i)}
                                className={i === index ? "active" : ""}
                            />
                        ))}
                    </div>
                </div>

                {/* INFO SECTION */}
                <div className="info-box">

                    <p className="desc">{product.description}</p>

                    {/* ✅ BUTTON (correct place) */}
                    <button
                        className="quote-btn"
                        onClick={() =>
                            navigate(
                                `/contact?product=${encodeURIComponent(product.title)}`
                            )
                        }
                    >
                        Get Export Quote
                    </button>

                    {/* ✅ EXPORT DETAILS */}
                    <div className="product-extra">
                        <p><strong>Minimum Order:</strong> 1 Ton</p>
                        <p><strong>Packaging:</strong> Standard Export Packaging</p>
                        <p><strong>Shelf Life:</strong> 15–30 Days</p>
                        <p><strong>Origin:</strong> India</p>
                        <p><strong>Export Availability:</strong> Worldwide</p>
                    </div>

                    <h3>Export Details</h3>
                    <ul>
                        <li><b>Origin:</b> India</li>
                        <li><b>Quality:</b> Premium Export Grade</li>
                        <li><b>Packaging:</b> Custom Bulk Packaging</li>
                        <li><b>Shelf Life:</b> 15 - 60 Days</li>
                        <li><b>Storage:</b> Cool & Dry Conditions</li>
                    </ul>

                    <h3>Why Choose This Product?</h3>
                    <ul>
                        <li>✔ High quality farm sourcing</li>
                        <li>✔ Strict quality checks</li>
                        <li>✔ Global export standards</li>
                        <li>✔ Freshness guaranteed</li>
                    </ul>

                    <h3>Export Statistics</h3>
                    <ul>
                        <li>🌍 Export Countries: 25+</li>
                        <li>📦 Monthly Supply: 500+ Tons</li>
                        <li>🚢 Shipping: Sea & Air</li>
                    </ul>

                </div>
            </div>

        </div>
    );
}

export default ProductDetail;