import React from "react";
import "./Contact.css";

function Contact() {

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;

        const mailtoLink = `mailto:tejasetraders@yahoo.com?subject=Inquiry from ${name}&body=${message} (${email})`;

        window.location.href = mailtoLink;
    };

    return (
        <div className="contact-page">

            <h1>Contact Us</h1>

            <p className="contact-intro">
                Get in touch with us for export inquiries, bulk orders, and partnerships.
            </p>

            <div className="contact-container">

                {/* LEFT */}
                <div className="contact-info">

                    <div className="info-block">
                        <h3>📍 Address</h3>
                        <p>
                            Flat No 101, Gracious Residency,<br />
                            Royal Colony, Beside BPCL Bunk,<br />
                            Narsingi, Rangareddy,<br />
                            Telangana - 500089
                        </p>

                        <a
                            href="https://www.google.com/maps?q=Narsingi+Telangana"
                            target="_blank"
                            rel="noreferrer"
                            className="map-btn"
                        >
                            📍 Open in Google Maps
                        </a>
                    </div>

                    <div className="info-block">
                        <h3>📞 Phone</h3>
                        <p>+91 7207874343</p>
                    </div>

                    <div className="info-block">
                        <h3>📧 Email</h3>
                        <p>tejasetraders@yahoo.com</p>
                    </div>

                    <div className="info-block">
                        <h3>🕒 Business Hours</h3>
                        <p>Mon - Sat: 9 AM - 7 PM</p>
                    </div>

                </div>

                {/* RIGHT */}
                <div className="contact-form">

                    <h2>Send Inquiry</h2>

                    <form onSubmit={handleSubmit}>
                        <input name="name" type="text" placeholder="Your Name" required />
                        <input name="email" type="email" placeholder="Your Email" required />
                        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>

                        <button type="submit">Send Message</button>
                    </form>

                </div>

            </div>

            {/* MAP */}
            <div className="map">
                <iframe
                    title="location"
                    src="https://www.google.com/maps?q=Narsingi+Telangana&output=embed"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    loading="lazy"
                ></iframe>
            </div>

        </div>
    );
}

export default Contact;