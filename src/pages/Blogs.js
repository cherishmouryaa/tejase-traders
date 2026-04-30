import React from "react";
import "./Blogs.css";

function Blogs() {

    const blogs = [
        {
            title: "India’s Agricultural Export Growth",
            content: "India’s agricultural exports are growing rapidly due to global demand for fruits, vegetables, and spices.",
            link: "https://www.google.com/search?q=india+agriculture+export+growth+news"
        },
        {
            title: "Demand for Indian Fruits & Vegetables",
            content: "Indian onions, lemons, and pomegranates are highly demanded in Middle East and European markets.",
            link: "https://www.google.com/search?q=india+fruit+vegetable+export+news"
        },
        {
            title: "India Leads Global Spice Exports",
            content: "India remains the world’s largest exporter of spices like chilli and black pepper.",
            link: "https://www.google.com/search?q=india+spice+export+news"
        },
        {
            title: "Coconut Export Opportunities",
            content: "Coconut exports are rising due to demand for coconut water, oil, and processed products.",
            link: "https://www.google.com/search?q=india+coconut+export+news"
        },
        {
            title: "Cold Chain Importance in Exports",
            content: "Cold chain logistics is essential to maintain freshness of perishable export goods.",
            link: "https://www.google.com/search?q=cold+chain+export+india+news"
        }
    ];

    return (
        <div className="blogs-page">

            <h1>Latest Insights on Indian Exports</h1>

            <div className="blog-container">
                {blogs.map((blog, index) => (
                    <div key={index} className="blog-card">
                        <h2>{blog.title}</h2>
                        <p>{blog.content}</p>

                        <a 
                            href={blog.link}
                            target="_blank"
                            rel="noreferrer"
                            className="blog-link"
                        >
                            View Latest News →
                        </a>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Blogs;