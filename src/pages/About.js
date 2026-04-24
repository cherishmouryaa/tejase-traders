import React from "react";
import "./About.css";

function About() {

return (
<div className="about-page">

{/* HERO */}
<section className="about-hero">
<h1>About Tejase Traders</h1>
<p>
Trusted Global Export Partner for Agricultural
and Poultry Products
</p>
</section>


{/* INTRO */}
<section className="company-intro">
<h2>Who We Are</h2>

<p>
Tejase Traders Private Limited is a trusted exporter
specializing in fruits, vegetables, spices and poultry
products for international markets.
</p>

<p>
We combine quality sourcing, strong logistics and
global export standards to deliver reliability
to our clients worldwide.
</p>
</section>



{/* FEATURE CARDS */}
<section className="feature-grid">

<div className="feature-card">
<div className="icon">🌍</div>
<h3>Global Export Reach</h3>
<p>Serving international markets with quality products.</p>
</div>

<div className="feature-card">
<div className="icon">✔</div>
<h3>Certified Quality</h3>
<p>Strict inspection and export-grade standards.</p>
</div>

<div className="feature-card">
<div className="icon">📦</div>
<h3>Secure Packaging</h3>
<p>Safe packaging for freshness and protection.</p>
</div>

<div className="feature-card">
<div className="icon">🚚</div>
<h3>Strong Logistics</h3>
<p>Reliable worldwide supply chain solutions.</p>
</div>

<div className="feature-card">
<div className="icon">⏱</div>
<h3>On-Time Delivery</h3>
<p>Timely shipments with dependable execution.</p>
</div>

<div className="feature-card">
<div className="icon">🤝</div>
<h3>Trusted Partnerships</h3>
<p>Building long-term client relationships.</p>
</div>

</section>



{/* WHY CHOOSE US */}
<section className="why-us">

<div className="left-box">

<div className="info-card">
<h2>Quality & Packaging</h2>
<p>
Strict quality control and export-grade packaging
ensure freshness, durability and compliance.
</p>
</div>

<div className="info-card">
<h2>Customer Commitment</h2>
<p>
We prioritize transparency, consistency and
long-term customer satisfaction.
</p>
</div>

<div className="info-card">
<h2>Sustainable Sourcing</h2>
<p>
We work with trusted suppliers for responsible
and consistent sourcing.
</p>
</div>

</div>


<div className="right-box">

<div className="mini-card">🚚 Strong Logistics</div>
<div className="mini-card">📦 Secure Packaging</div>
<div className="mini-card">⏱ On-Time Delivery</div>
<div className="mini-card">🤝 Trusted Business</div>

</div>

</section>



{/* STATS */}
<section className="about-stats">

<div>
<h2>50+</h2>
<p>Global Clients</p>
</div>

<div>
<h2>10+</h2>
<p>Countries Served</p>
</div>

<div>
<h2>100+</h2>
<p>Shipments Delivered</p>
</div>

</section>

</div>
);
}

export default About;