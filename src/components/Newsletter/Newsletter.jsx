import React from "react";
import "./newsletter.css";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="newsletter_container">
        <div className="left">Subscribe to our newsletter & Stay updated.</div>
        <div className="right">
          <input type="text" placeholder="Email Address" />
          <button>Subscribe</button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
