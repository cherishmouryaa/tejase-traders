import React from "react";
import "./About.css";

function About() {
    return (
        <div className="about-page">

            <h1>About Tejase Traders</h1>

            <p className="intro">
                Tejase Traders is a growing export company based in India, specializing in 
                supplying high-quality agricultural and poultry products to international markets. 
                Our focus is on delivering fresh, hygienic, and premium-grade products with 
                consistency and reliability.
            </p>

            <div className="about-section">
                <h2>🌍 Our Mission</h2>
                <p>
                    To provide world-class export quality products from India while maintaining 
                    global standards in safety, freshness, and customer satisfaction. We aim to 
                    build long-term relationships with our clients across the globe.
                </p>
            </div>

            <div className="about-section">
                <h2>🚀 Our Vision</h2>
                <p>
                    To become a trusted global exporter known for quality, transparency, and 
                    efficient supply chain management in agricultural and food products.
                </p>
            </div>

            <div className="about-section">
                <h2>📦 What We Export</h2>
                <ul>
                    <li>Fresh Fruits (Pomegranates, etc.)</li>
                    <li>Vegetables (Onions, Garlic, Chillies)</li>
                    <li>Spices (Pepper, Dry Products)</li>
                    <li>Poultry Products (Chicken)</li>
                    <li>Seafood (Prawns)</li>
                </ul>
            </div>

            <div className="about-section">
                <h2>✅ Why Choose Us</h2>
                <ul>
                    <li>Strict quality inspection and grading</li>
                    <li>Hygienic processing and packaging</li>
                    <li>Timely delivery and logistics support</li>
                    <li>Competitive pricing for bulk orders</li>
                    <li>Customer-focused approach</li>
                </ul>
            </div>

            <div className="about-section">
                <h2>📍 Our Presence</h2>
                <p>
                    Based in India, we serve clients across the Middle East, Asia, and other 
                    international markets with reliable export solutions.
                </p>
            </div>

        </div>
    );
}

export default About;