"use client";

import React, { useState } from "react";
import Link from "next/link";
import CountUp from "react-countup";

const FunFactsSection = () => {
  const [donation, setDonation] = useState(15); // Default selected donation amount

  return (
    <section className="fun-facts-two">
      {/* Background Image */}
      <div
        className="image-layer"
        style={{ backgroundImage: `url(/images/background/parallax-bg-2.jpg)` }}
      ></div>

      <div className="auto-container">
        <div className="urgent-cause-box">
          <div className="inner-box wow fadeInUp">
            <div className="row clearfix">
              {/* Title Column */}
              <div className="title-column col-lg-4 col-md-12 col-sm-12">
                <div className="inner">
                  <div className="big-icon">
                    <span className="flaticon-heart-2"></span>
                  </div>
                  <div className="sec-title light">
                    <div className="upper-icon"></div>
                    <h2>Clean Water</h2>
                    <div className="text">Urgent Cause Need Help</div>
                  </div>
                </div>
              </div>

              {/* Content Column */}
              <div className="content-column col-lg-8 col-md-12 col-sm-12">
                <div className="inner">
                  <div className="upper-info clearfix">
                    <div className="needed">$45,850</div>
                    <div className="raised">
                      <span className="fa fa-chart-line"></span> Raised :{" "}
                      <strong>$6,500</strong>
                    </div>
                  </div>
                  <div className="bar">
                    <div className="bar-inner" style={{ width: "30%" }}></div>
                  </div>
                  <div className="donate-info clearfix">
                    <ul className="options clearfix">
                      <li>
                        <input
                          type="radio"
                          name="donate-group"
                          id="donate-1"
                          checked={donation === 15}
                          onChange={() => setDonation(15)}
                        />
                        <label htmlFor="donate-1">$15.00</label>
                      </li>
                      <li>
                        <input
                          type="radio"
                          name="donate-group"
                          id="donate-2"
                          checked={donation === 30}
                          onChange={() => setDonation(30)}
                        />
                        <label htmlFor="donate-2">$30.00</label>
                      </li>
                      <li>
                        <input
                          type="radio"
                          name="donate-group"
                          id="donate-3"
                          checked={donation === 50}
                          onChange={() => setDonation(50)}
                        />
                        <label htmlFor="donate-3">$50.00</label>
                      </li>
                    </ul>
                    <div className="link-box">
                      <Link href="/donate" className="theme-btn btn-style-one">
                        <span className="btn-title">Donate now</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lower Content */}
        <div className="lower-content">
          <div className="row clearfix">
            <div className="text-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner">
                <h2>
                  Don’t Just Give. <br />
                  Make Your Money <br />
                  Count Everywhere!
                </h2>
                <div className="text">
                  Alit usmod tempor incididunt laboret doloe magn aliquaut enis
                  veniam quis trud exercitation ullamco laboris nisiut aliquip.
                  Exea consequat duis rue dolor prehendrit lorem sed ipsum
                  torabs.
                </div>
              </div>
            </div>
            <div className="facts-column col-lg-6 col-md-12 col-sm-12">
              <div className="fact-counter">
                <div className="row clearfix">
                  {/* Counter 1 */}
                  <div className="counter-column col-lg-6 col-md-6 col-sm-12 wow fadeInUp">
                    <div className="inner-box">
                      <div className="count-box">
                        <CountUp end={98520} duration={3} />
                      </div>
                      <div className="counter-title">raised Donations</div>
                    </div>
                  </div>

                  {/* Counter 2 */}
                  <div className="counter-column col-lg-6 col-md-6 col-sm-12 wow fadeInUp">
                    <div className="inner-box">
                      <div className="count-box">
                        <CountUp end={306} duration={1.5} />
                      </div>
                      <div className="counter-title">Causes Solved</div>
                    </div>
                  </div>

                  {/* Counter 3 */}
                  <div className="counter-column col-lg-6 col-md-6 col-sm-12 wow fadeInUp">
                    <div className="inner-box">
                      <div className="count-box">
                        <CountUp end={84} duration={1.5} />
                      </div>
                      <div className="counter-title">Volunteers</div>
                    </div>
                  </div>

                  {/* Counter 4 */}
                  <div className="counter-column col-lg-6 col-md-6 col-sm-12 wow fadeInUp">
                    <div className="inner-box">
                      <div className="count-box">
                        <CountUp end={1369} duration={3} />
                      </div>
                      <div className="counter-title">Projects Done</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFactsSection;
