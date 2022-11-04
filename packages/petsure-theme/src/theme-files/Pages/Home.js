import { connect } from "frontity";
import React, { useEffect } from "react";

const Home = ({ state, libraries }) => {
  useEffect(() => {
    libraries.source.api
      .get({
        endpoint: "pages",
        params: { _embed: true, id: 7 },
      })
      .then((data) => {
        console.log("dataFronApi dataFronApi", data);
      });
  }, []);

  return (
    <>
      <section className="hero-banner home-page" id="heroMainBanner">
        <div className="bg-image"></div>
        <div className="container hero-container">
          <div className="row no-gutters">
            <div className="col-md-6">
              <div className="hero-summery">
                <h1>Headeing Goes Hear</h1>
                <p>Description Godes Hear</p>
                <a href="/" className="small-link">
                  Get Quoute
                </a>
                <br />
                <a className="btn btn-secondary cta" href="/">
                  <i className="fa fa-caret-right"></i>Find Out More{" "}
                </a>
                <br /> <br />
              </div>
            </div>
            <div className="col-md-6 offer-wrapper desktop-offer">
              <div className="offer-content">
                <div className="offer-block">
                  <div className="offer">
                    <span className="number">20</span>
                    <span className="symbol">
                      <span>%</span>
                      <span>
                        OFF<small>‡</small>
                      </span>
                    </span>
                  </div>
                  <div className="details-wrapper">
                    <div className="title">
                      <span className="small">Summer</span>{" "}
                      <span className="large">SALE!</span>
                    </div>
                    <div className="code-block">
                      <span className="code">
                        Code: <strong>TAN20</strong>
                      </span>
                      <span className="date">Expiry:</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 offer-wrapper mobile-offer">
              <div className="offer-block-sm">
                <div className="offer-title">
                  <img
                    className="lazyload"
                    data-src="assets/img/banner_summerSale.svg"
                    alt="Summer Sale"
                  />
                </div>
                <div className="offer-description">
                  <div className="offer-amount">
                    <img
                      className="lazyload"
                      data-src="assets/img/banner_20Off.svg"
                      alt="20% Off"
                    />
                  </div>
                  <div className="offer-valid">
                    <div className="code">Promo code: TAN20</div>
                    <div className="duration">Offer ends/22</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="trust-builder">
        <div className="wrapper d-flex">
          <div className="headline">
            <h2></h2>
            <span className="sub-text"></span>
          </div>
          <div className="trust-logos">
            <div className="trust-pilot-placement">
              <div
                className="trustpilot-widget"
                data-locale="en-GB"
                data-template-id="53aa8807dec7e10d38f59f32"
                data-businessunit-id="4d80cd6700006400050ef95e"
                data-style-height="150px"
                data-style-width="100%"
                data-theme="light"
              >
                <a
                  href="https://uk.trustpilot.com/review/www.staysure.co.uk"
                  target="_blank"
                  rel="noopener"
                >
                  Trustpilot
                </a>
              </div>
            </div>
            <img
              className="lazyload awards-defecto"
              src="assets/img/loader_352_198.gif"
              data-src="assets/img/defacto-2022.png"
              alt=""
            />
            <img
              className="lazyload awards-britishtravel"
              src="assets/img/loader_352_198.gif"
              data-src="assets/img/BTA2020_new.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="why-staysure">
        <div className="wrapper">
          <div className="usps">
            <ul>
              <li>
                <div className="number-holder">
                  <div className="progress-pie-chart-1" data-percent="90">
                    <div className="ppc-progress">
                      <div className="ppc-progress-fill-1"></div>
                    </div>
                    <div className="ppc-percents">
                      <div className="pcc-percents-wrapper">
                        <span>
                          90<i>%</i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <span>test description</span>
              </li>
              <li>
                <div className="number-holder">
                  <div className="progress-pie-chart-2" data-percent="90">
                    <div className="ppc-progress">
                      <div className="ppc-progress-fill-2"></div>
                    </div>
                    <div className="ppc-percents">
                      <div className="pcc-percents-wrapper">
                        <span>
                          90<i>%</i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <span>test description</span>
              </li>
              <li>
                <div className="number-holder">
                  <div className="progress-pie-chart-3" data-percent="90">
                    <div className="ppc-progress">
                      <div className="ppc-progress-fill-3"></div>
                    </div>
                    <div className="ppc-percents">
                      <div className="pcc-percents-wrapper">
                        <span>
                          90<i>%</i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <span>test description</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="tv-advert-holder" id="testimonialtp">
        <div className="wrapper">
          <section className="what-customer-say home-page-section">
            <div className="container d-md-flex align-items-center h-100">
              <div className="hero-details">
                <h3>Heding 3</h3>

                <p>test description</p>
                <a href="/" className="btn btn-secondary btn-bold mt-3">
                  <i className="fas fa-caret-right"></i> get quote
                </a>
              </div>
              <div className="video-widget">
                <div className="fluid-width-video-wrapper">
                  <meta itemProp="duration" content="T3M03S" />
                  <meta
                    itemProp="thumbnailUrl"
                    content="https://dxcdkie9wax5t.cloudfront.net/wp-content/uploads/2018/11/27123050/denise-michael.jpg"
                  />
                  <meta
                    itemProp="description"
                    content="<?php echo get_field('tv_advert')['video_description']; ?>"
                  />
                  <meta itemProp="uploadDate" content="2018-11-27" />
                  <div>
                    <iframe
                      src="https://player.vimeo.com/video/432167764?color=ffffff&title=0&byline=0&portrait=0"
                      data-src="<?php echo get_field('tv_advert')['video_url']; ?>?color=ffffff&title=0&byline=0&portrait=0"
                      frameBorder="0"
                      webkitallowfullscreen="true"
                      mozallowfullscreen="true"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <script
                    async
                    src="https://player.vimeo.com/api/player.js"
                  ></script>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default connect(Home);
