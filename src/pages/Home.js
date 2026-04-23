import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

/* SLIDES */
const slides = [
    "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
    "https://images.unsplash.com/photo-1518843875459-f738682238a6",
    "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    "https://images.unsplash.com/photo-1581091012184-5c8b0b5d66d6",
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
    "https://images.unsplash.com/photo-1494412519320-aa613dfb7738",
    "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
    "https://images.unsplash.com/photo-1604908176997-4317c4cb0fa0",
    "https://images.unsplash.com/photo-1464226184884-fa280b87c399"
];

function Home() {

    const navigate = useNavigate();
    const sliderRef = useRef(null);
    const [current, setCurrent] = useState(0);

    /* PRELOAD */
    useEffect(() => {
        slides.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }, []);

    /* HERO LOOP */
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev => (prev + 1) % slides.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    /* PRODUCTS */
    const products = [
        { id: "pomegranates", name: "Pomegranates", image: "/assets/products/pomegranates/pomegranates1.jpg" },
        { id: "onions", name: "Onions", image: "/assets/products/onions/onions1.jpg" },
        { id: "garlic", name: "Garlic", image: "/assets/products/garlic/garlic1.jpg" },
        { id: "greenchilli", name: "Green Chilli", image: "/assets/products/mirchi/mirchi1.jpg" },
        { id: "chicken", name: "Chicken", image: "/assets/products/chicken/chicken1.jpg" }
    ];

    /* PRODUCT SLIDER */
    useEffect(() => {
        const slider = sliderRef.current;
        let scroll = 0;

        const autoSlide = () => {
            if (!slider) return;
            slider.scrollLeft += 0.7;
            scroll += 0.7;

            if (scroll >= slider.scrollWidth / 2) {
                slider.scrollLeft = 0;
                scroll = 0;
            }
        };

        const interval = setInterval(autoSlide, 16);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="home">

            {/* HERO */}
            <div className="hero">

                <div
                    className="hero-bg active"
                    style={{ backgroundImage: `url(${slides[current]})` }}
                />

                <div
                    className="hero-bg next"
                    style={{ backgroundImage: `url(${slides[(current + 1) % slides.length]})` }}
                />

                <div className="hero-overlay">
                    <h1>GLOBAL EXPORT OF AGRI & POULTRY PRODUCTS</h1>
                    <p>Fresh fruits, vegetables, spices and meat exported worldwide</p>

                    <button className="btn" onClick={() => {
                        document.getElementById("products").scrollIntoView({ behavior: "smooth" });
                    }}>
                        Explore Products
                    </button>
                </div>

            </div>

            {/* PRODUCTS */}
            <section id="products" className="products-preview">
                <h2>Our Products</h2>

                <div className="slider" ref={sliderRef}>
                    {[...products, ...products].map((item, i) => (
                        <div key={i} className="card" onClick={() => navigate(`/product/${item.id}`)}>
                            <img src={item.image} alt={item.name} />
                            <h3>{item.name}</h3>
                        </div>
                    ))}
                </div>
            </section>

            {/* HIGHLIGHTS */}
            <section className="highlights">
                <div className="highlight-box">
                    <h3>Global Export</h3>
                    <p>Serving international markets with quality.</p>
                </div>
                <div className="highlight-box">
                    <h3>Certified Quality</h3>
                    <p>Strict inspection standards.</p>
                </div>
                <div className="highlight-box">
                    <h3>Fast Logistics</h3>
                    <p>Efficient delivery worldwide.</p>
                </div>
            </section>

            {/* ABOUT */}
            <section className="about-section">
                <h2>About Our Business</h2>
                <p>
                    We export agricultural and poultry products with high standards.
                </p>
            </section>

            {/* CTA */}
            <section className="cta-banner">
                <div className="cta-content">
                    <h2>Looking for Bulk Orders?</h2>
                    <h1>Contact Us Today</h1>

                    <div className="cta-box">
                        <input type="text" placeholder="Enter your email" />
                        <button>Submit</button>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Home;