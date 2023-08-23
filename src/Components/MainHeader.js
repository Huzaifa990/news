import React from "react";
import news2 from "../images/news2.jpg";
import news4 from "../images/news4.jpg";
import news3 from "../images/news1.jpg";

export default function MainHeader() {
  return (
    <div>
      <div className="w3l-banner py-0">
        <div className="container py-lg-3 py-md-3">
          <div className="ban-content-inf row py-lg-3">
            <div className="maghny-gd-1 col-lg-8">
              <div className="maghny-grid">
                <figure className="effect-lily border-radius">
                  <img
                    className="img-fluid radius-image"
                    src={news2}
                    alt=""
                  />
                  <figcaption className="w3set-hny">
                    <div className="info">
                      <a href="#reciepe" className="receipe">
                        Read More
                      </a>
                      <h4 className="top-text">
                        Groundbreaking Research Links Diet to Longevity and Brain Health                      
                      </h4>
                      <p className="mt-2 d-sm-block d-none">
                        Lorem ipsum dolor sit amet elit. Vitae nostrum ipsum
                        vero tempore esse, eaque omnis culpa quo placeat?
                      </p>
                      <div className="p-footer">
                        <aside className="p-meta-info">
                          <a href="#img" className="post-img-anchor">
                            <img
                              src={news4}
                              alt=""
                              className="post-img"
                            />
                          </a>
                          <a href="#url">Elizabeth</a>
                          <span className="meta-info-date">
                            <span className="fa fa-clock-o"></span> 2 Days Ago
                          </span>
                        </aside>
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="maghny-gd-1 col-lg-4 mt-lg-0 mt-4 mobile-grid">
              <div className="maghny-gd-1">
                <div className="maghny-grid">
                  <figure className="effect-lily border-radius" style={{height: "240px"}}>
                    <img
                      className="img-fluid radius-image"
                      src={news3}
                      alt=""
                    />
                    <figcaption>
                      <div>
                        <h4 className="top-text1">
                            Space Exploration Milestone: Astronauts Set to Land on Mars
                        </h4>
                        <aside className="p-meta-info">
                          <span className="meta-info-el meta-info-custom">
                            <span className="fa fa-clock-o mr-2"></span> 1 Days Ago
                          </span>
                        </aside>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div className="maghny-gd-1 mt-lg-4">
                <div className="maghny-grid">
                  <figure className="effect-lily border-radius">
                    <img
                      className="img-fluid radius-image"
                      src={news4}
                      alt=""
                    />
                    <figcaption>
                      <div>
                        <h4 className="top-text1">
                            Tech Giant's CEO Steps Down Amidst Controversial Data Breach
                        </h4>
                        <aside className="p-meta-info">
                          <span className="meta-info-el meta-info-custom">
                            <span className="fa fa-bell-o mr-2"></span>Sponsered by
                            <strong> Johnson</strong>
                          </span>
                        </aside>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
