import Link from "next/link";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="main-footer">
      {/* Background Image */}
      <div
        className="image-layer"
        style={{ backgroundImage: `url(/images/background/footer-bg.jpg)` }}
      ></div>

      <div className="auto-container">
        {/* Widgets Section */}
        <div className="widgets-section">
          <div className="row clearfix">
            {/* Column 1: Logo and Social Links */}
            <div className="column big-column col-lg-4 col-md-12 col-sm-12">
              <div className="footer-widget logo-widget">
                <div className="widget-content">
                  <div className="footer-logo">
                    <Link href="/">
                      <Image
                        src="/images/footer-logo.png"
                        alt="Footer Logo"
                        width={150}
                        height={50}
                      />
                    </Link>
                  </div>
                  <div className="text">
                    Alit usmod tempor incididunt laboret quis arud exercitation
                    ullamcos laboris nisiut aliquip. Exa consequat duis aute rue
                    dolor prehendrit lorem esse cillum dolore eu fugiat nulla.
                  </div>
                  <ul className="social-links clearfix">
                    <li>
                      <Link href="#">
                        <span className="fab fa-facebook-f"></span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <span className="fab fa-twitter"></span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <span className="fab fa-vimeo-v"></span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <span className="fab fa-instagram"></span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <span className="fab fa-youtube"></span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Column 2: Links */}
            <div className="big-column col-lg-8 col-md-12 col-sm-12">
              <div className="row clearfix">
                {/* About Us Links */}
                <div className="column col-lg-4 col-md-4 col-sm-12">
                  <div className="footer-widget links-widget">
                    <div className="widget-content">
                      <h3>About Us</h3>
                      <ul>
                        <li>
                          <Link href="#">Upcoming Events</Link>
                        </li>
                        <li>
                          <Link href="#">Latest Causes</Link>
                        </li>
                        <li>
                          <Link href="#">News Blog</Link>
                        </li>
                        <li>
                          <Link href="#">Contact Us</Link>
                        </li>
                        <li>
                          <Link href="#">Who We Are</Link>
                        </li>
                        <li>
                          <Link href="#">Connect With Us</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Our Partners Links */}
                <div className="column col-lg-4 col-md-4 col-sm-12">
                  <div className="footer-widget links-widget">
                    <div className="widget-content">
                      <h3>Our Partners</h3>
                      <ul>
                        <li>
                          <Link href="#">Donate Kausid</Link>
                        </li>
                        <li>
                          <Link href="#">Save Our Earth</Link>
                        </li>
                        <li>
                          <Link href="#">Water Shortages</Link>
                        </li>
                        <li>
                          <Link href="#">Recycle Better</Link>
                        </li>
                        <li>
                          <Link href="#">Plant Trees Welfare</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Explore Links */}
                <div className="column col-lg-4 col-md-4 col-sm-12">
                  <div className="footer-widget links-widget">
                    <div className="widget-content">
                      <h3>Explore</h3>
                      <ul>
                        <li>
                          <Link href="#">Adopt A Child</Link>
                        </li>
                        <li>
                          <Link href="#">Join Our Programs</Link>
                        </li>
                        <li>
                          <Link href="#">Food Crisis Looms</Link>
                        </li>
                        <li>
                          <Link href="#">Make Donation</Link>
                        </li>
                        <li>
                          <Link href="#">Press Releases</Link>
                        </li>
                        <li>
                          <Link href="#">Global Programs</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Us and Newsletter */}
            <div className="big-column col-lg-12 col-md-12 col-sm-12">
              <div className="row clearfix">
                {/* Contact Us Column */}
                <div className="column col-lg-4 col-md-12 col-sm-12">
                  <div className="footer-widget info-widget">
                    <div className="widget-content">
                      <h3>Contact Us</h3>
                      <ul className="contact-info">
                        <li>4291 Glenview Drive, Florence, MI 29501</li>
                        <li>
                          <a href="tel:812-070-3692">
                            <span className="fa fa-phone-alt"></span> Phone
                            812-070-3692
                          </a>
                        </li>
                        <li>
                          <a href="mailto:donations@example.org">
                            <span className="fa fa-envelope-open"></span>{" "}
                            donations@example.org
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Newsletter Column */}
                <div className="column col-lg-8 col-md-12 col-sm-12">
                  <div className="footer-widget info-widget">
                    <div className="widget-content">
                      <h3>Subscribe Our Newsletter For Updates</h3>
                      <div className="newsletter-form">
                        <form method="post" action="/contact">
                          <div className="form-group clearfix">
                            <input
                              type="email"
                              name="email"
                              placeholder="Enter Your Email"
                              required
                            />
                            <button
                              type="submit"
                              className="theme-btn newsletter-btn"
                            >
                              Subscribe
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="auto-container">
            <div className="inner">
              <div className="copyright">
                Copyrights (c) 2024{" "}
                <Link href="#">Life for Relief & Development.</Link> All rights
                reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
