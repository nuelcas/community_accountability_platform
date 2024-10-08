import React from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h3>Contact Us</h3>
      <ul className="contact-details">
        <li>
          <strong>Inquiries WhatsApp:</strong>{" "}
          <a href="tel:+2348066029176">+234 8066029176</a>
        </li>
        <li>
          <strong>General Inquiries:</strong>{" "}
          <a href="mailto:info@communityaccountabilityplatform.org">
            info@communityaccountabilityplatform.org
          </a>
        </li>
        <li>
          <strong>P.O. Box:</strong> 2435 - 6758 Lagos, Nigeria
        </li>
      </ul>

      <div className="social-media">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="social-icon" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="social-icon" />
        </a>
      </div>

      <div className="newsletter">
        <p>
          Stay up-to-date with the latest news and exclusive events &
          opportunities by subscribing to our newsletter!
        </p>
        <form>
          <input type="email" placeholder="Enter Email Address" required />
          <button type="submit">Subscribe</button>
        </form>
        <small>
          I understand that CAP will process my information in accordance with
          their <a href="/privacy-policy">Privacy Policy</a>.
        </small>
      </div>

      <p className="copyright">© Copyright 2024 by CAP. All rights reserved.</p>
    </div>
  );
};

export default Contact;
