import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import productsData from "../data/productsData";

/* HERO SLIDES */
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
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    /* PRELOAD */
    useEffect(() => {
        slides.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }, []);

    /* AUTOSLIDE */
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    /* SWIPE */
    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 50) {
            setCurrent(prev => (prev + 1) % slides.length);
        }
        if (touchStart - touchEnd < -50) {
            setCurrent(prev => (prev - 1 + slides.length) % slides.length);
        }
    };

    /* ✅ FIXED PRODUCTS (AUTO FROM productsData) */
    const products = productsData.map(p => ({
        id: p.id,
        name: p.title,
        image: p.images[0]
    }));

    /* PRODUCT AUTOSCROLL */
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
            <div
                className="hero"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >

                {slides.map((slide, i) => (
                    <div
                        key={i}
                        className={`hero-slide ${i === current ? "active" :
                            i === (current - 1 + slides.length) % slides.length ? "prev" : ""
                            }`}
                        style={{ backgroundImage: `url(${slide})` }}
                    />
                ))}

                <div className="hero-overlay"></div>

                <div className="hero-content">
                    <div className="hero-logo-box">
                        <img src="/logo-transparent.png" alt="Tejase Traders" />
                    </div>

                    <h1>Global Export of Fresh & Perishable Goods</h1>

                    <p>
                        Delivering high-quality agricultural and poultry products worldwide with reliability and trust.
                    </p>

                    <button
                        className="hero-btn"
                        onClick={() => navigate("/products")}
                    >
                        Explore Products
                    </button>
                </div>

                <button className="arrow left"
                    onClick={() => setCurrent(prev => (prev - 1 + slides.length) % slides.length)}>
                    ‹
                </button>

                <button className="arrow right"
                    onClick={() => setCurrent(prev => (prev + 1) % slides.length)}>
                    ›
                </button>

            </div>

            {/* PRODUCTS */}
            <section id="products" className="products-preview">
                <h2>Our Products</h2>

                <div className="slider" ref={sliderRef}>
                    {[...products, ...products].map((item, i) => (
                        <div
                            key={i}
                            className="card"
                            onClick={() => navigate(`/product/${item.id}`)}
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                            />
                            <h3>{item.name}</h3>
                        </div>
                    ))}
                </div>
            </section>

            {/* OUR VISION */}
            <section
                className="highlights"
                style={{
                    background: "#14532d",
                    color: "#ffffff",
                    padding: "60px 20px",
                    textAlign: "center",
                }}
            >

                <div style={{ maxWidth: "800px", margin: "0 auto" }}>

                    <h2 style={{ marginBottom: "20px", fontSize: "28px" }}>
                        Our Vision
                    </h2>

                    <p style={{ lineHeight: "1.7", marginBottom: "15px" }}>
                        At Tejase Traders, our vision is to become a trusted global partner
                        in delivering premium agricultural and poultry products.
                        We are committed to quality, consistency, and building long-term
                        relationships through reliable supply and customer satisfaction.
                    </p>

                    <p style={{ lineHeight: "1.7" }}>
                        We take pride in maintaining high standards, ensuring every product
                        meets export quality expectations while strengthening trust across markets.
                    </p>

                </div>

            </section>
            {/* ABOUT */}
            <section className="about-section">
                <h2>About Our Business</h2>

                <p>
                    Tejase Traders Private Limited is a trusted exporter
                    of high-quality agricultural and poultry products.
                </p>

                <p>
                    We ensure quality sourcing, export packaging and
                    timely global delivery with trust and reliability.
                </p>
            </section>

            {/* CTA */}
            <section className="cta-banner">
                <div className="cta-content">
                    <h2>Looking for Bulk Orders?</h2>
                    <h1>Contact Us</h1>

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