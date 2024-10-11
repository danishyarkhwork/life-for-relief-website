import React from "react";

const MotoSection = () => {
  return (
    <section className="our-moto">
      <div className="auto-container">
        <div className="inner-container">
          <div className="row clearfix">
            {/* Moto Block 1 */}
            <div className="moto-block col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="inner">
                  <div className="icon">
                    <span className="flaticon-care"></span>
                  </div>
                  <h3>Helping Mankind</h3>
                  <div className="text">
                    Auis nostrud exercitation ullam labor aliquip exsed
                    consequat duis autpsum dolore magna aliqua minim.
                  </div>
                </div>
              </div>
            </div>

            {/* Moto Block 2 */}
            <div className="moto-block col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="inner">
                  <div className="icon">
                    <span className="flaticon-pigeon"></span>
                  </div>
                  <h3>Love Your World</h3>
                  <div className="text">
                    Auis nostrud exercitation ullam labor aliquip exsed
                    consequat duis autpsum dolore magna aliqua minim.
                  </div>
                </div>
              </div>
            </div>

            {/* Moto Block 3 */}
            <div className="moto-block col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="inner">
                  <div className="icon">
                    <span className="flaticon-harvest"></span>
                  </div>
                  <h3>Food for Everyone</h3>
                  <div className="text">
                    Auis nostrud exercitation ullam labor aliquip exsed
                    consequat duis autpsum dolore magna aliqua minim.
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

export default MotoSection;
