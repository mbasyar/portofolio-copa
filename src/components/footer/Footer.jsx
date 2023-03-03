import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">IhzhaNB</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portofolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#testimonials" className="footer__link">
              Testimonial
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://web.facebook.com/profile.php?id=100004312487474"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-facebook"></i>
          </a>

          <a
            href="https://www.instagram.com/ih_zha/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-instagram-alt"></i>
          </a>

          <a
            href="https://twitter.com/BIhzha?t=6Lg01BCjxsh0U5rYrBck2Q&s=09"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-twitter"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Zha_Nly. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
