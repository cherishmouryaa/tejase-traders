import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import productsData from "../data/productsData";
import "./ProductDetail.css";

function ProductDetail() {

    const { name } = useParams();
    const navigate = useNavigate();

    const product = productsData.find(
        p => p.id === name
    );

    const [index, setIndex] = useState(0);


    /* auto slider */
    useEffect(() => {

        if (!product) return;

        const interval = setInterval(() => {
            setIndex(prev => (
                (prev + 1) % product.images.length
            ));
        }, 3000);

        return () => clearInterval(interval);

    }, [product]);


    if (!product)
        return <h2>Product Not Found</h2>;


    return (

        <div className="product-detail">
            <button
                className="back-btn"
                onClick={() => window.history.back()}
            >
                ← Back
            </button>
            <h1>{product.title}</h1>

            <div className="detail-container">


                {/* IMAGE */}
                <div className="image-box">

                    <img
                        src={product.images[index]}
                        alt={product.title}
                    />

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



                {/* INFO */}
                <div className="info-box">

                    <p className="desc">
                        {product.description}
                    </p>


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



                    <h3>Export Specifications</h3>

                    <ul>
                        <li>
                            <b>Grade:</b> {product.specs.grade}
                        </li>

                        <li>
                            <b>Packing:</b> {product.specs.packing}
                        </li>

                        <li>
                            <b>Shelf Life:</b> {product.specs.shelf}
                        </li>

                        <li>
                            <b>Minimum Order:</b> {product.specs.moq}
                        </li>

                        <li>
                            <b>Storage:</b> {product.specs.storage}
                        </li>

                        <li>
                            <b>Shipping:</b> {product.specs.shipping}
                        </li>
                    </ul>



                    <h3>Why Choose This Product?</h3>

                    <ul>
                        <li>✔ Export quality sourcing</li>
                        <li>✔ Quality inspected supply</li>
                        <li>✔ International shipping standards</li>
                        <li>✔ Reliable freshness assurance</li>
                        <li>✔ Bulk supply capability</li>
                    </ul>


                </div>

            </div>

        </div>

    );

}

export default ProductDetail;