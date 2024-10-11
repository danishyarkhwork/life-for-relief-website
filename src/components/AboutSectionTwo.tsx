import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutSectionTwo = () => {
  return (
    <section className="about-section-two">
      <div className="auto-container">
        <div className="row clearfix">
          {/* Text Column */}
          <div className="text-column col-lg-7 col-md-12 col-sm-12">
            <div className="inner">
              <div className="sec-title">
                <div className="sub-title">
                  <span className="icon"></span> We believe what we achieve
                </div>
                <h2>
                  Honesty & Respect For <br />
                  Giving Human Resources
                </h2>
              </div>

              <div className="lower-box">
                <div className="image">
                  {/* Image for video */}
                  <Image
                    src="/images/resource/video-image-2.jpg"
                    alt="Video"
                    width={600}
                    height={400}
                  />
                  {/* YouTube Play Button */}
                  <Link
                    href="https://www.youtube.com/watch?v=C9rVAbcQH_U"
                    legacyBehavior
                  >
                    <a className="lightbox-image">
                      <span className="fa fa-play"></span>
                    </a>
                  </Link>
                </div>
                <div className="text">
                  Consectetur adipisicing elit usmod tempor incididunt laboret
                  dolore magna aliquaut enim mini veniam quis trud exercitation
                  ullamco laboris nisiut aliquip ex ea consequat. Duis aute rue
                  dolor prehendrit lorem psum dolor sit amet consectetur
                  adipisicing.
                </div>
              </div>

              <div className="quote-box">
                <div className="quote-text">
                  Our vision is “To serve the humanity with our exceptional
                  programs. We offer greater independence, more sustainability &
                  superior donation methods.
                </div>
                <div className="quote-info">
                  <div className="author-thumb">
                    <Image
                      src="/images/resource/author-thumb-1.jpg"
                      alt="Sandy Kates"
                      width={60}
                      height={60}
                    />
                  </div>
                  <div className="author-title">Sandy Kates</div>
                  <div className="signature">Sandy Kates</div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="image-column col-lg-5 col-md-12 col-sm-12">
            <div className="inner wow fadeInLeft">
              <figure className="image-box">
                <Image
                  src="/images/resource/featured-image-4.jpg"
                  alt="Honesty & Respect"
                  width={600}
                  height={400}
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
