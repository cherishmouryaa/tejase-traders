import React from "react";
import "./Blogs.css";

function Blogs() {

    const blogs = [
        {
            title: "India’s Export Growth in 2025",
            content: "India’s exports are projected to grow steadily due to strong demand in agricultural, pharmaceutical, and manufacturing sectors. Government initiatives like 'Make in India' and improved logistics infrastructure are supporting exporters to expand globally."
        },
        {
            title: "Why Indian Agricultural Products Are in High Demand",
            content: "Indian products such as onions, pomegranates, spices, and rice are highly demanded across Middle East, Europe, and Asia. Competitive pricing, quality, and large-scale production give India a strong export advantage."
        },
        {
            title: "Future of Indian Export Industry",
            content: "India aims to become a $2 trillion export economy by 2030. Growth is expected in food processing, seafood, and organic products. Digital trade and supply chain improvements will further boost exports."
        },
        {
            title: "Top Export Destinations for India",
            content: "Major export destinations include UAE, USA, China, Bangladesh, and Saudi Arabia. Agricultural exports are especially strong in Gulf countries due to proximity and demand."
        },
        {
            title: "Role of Cold Chain in Export Success",
            content: "Maintaining freshness in perishable goods like fruits, vegetables, and poultry is critical. Cold storage and efficient logistics ensure quality is preserved during transportation."
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
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Blogs;