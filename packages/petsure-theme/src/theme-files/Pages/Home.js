import { connect } from "frontity";
import React, { useEffect , useState } from "react";
import ReactHtmlParser from 'react-html-parser'; 

const Home = ({ state, libraries }) => {
  const [homePageBannerData,sethomePageBannerData] = useState()
  const [trustbuilderData,setTrustbuilderData] = useState()

  useEffect( () => {
    const dataJson = JSON.parse(JSON.stringify(state)).source.page
    const acfData = dataJson[7].acf;
    const home_page_banner = acfData.home_page_banner;
    const trust_builder = acfData.trust_builder;
    sethomePageBannerData(home_page_banner);
    setTrustbuilderData(trust_builder);
    console.log("state home data",acfData)
  }, []);

  useEffect( () => {
    console.log("state home data",homePageBannerData?.heading)
  }, [homePageBannerData]);

  return (
    <>
      <section className="hero-banner home-page" id="heroMainBanner">
        <div className="bg-image"></div>
        <div className="container hero-container">
          <div className="row no-gutters">
            <div className="col-md-6">
              <div className="hero-summery">
                <h1>{ ReactHtmlParser (homePageBannerData?.heading) }</h1>
                { ReactHtmlParser (homePageBannerData?.description) }
                <a href={homePageBannerData?.more_details_link_reference_url} className="small-link">
                { ReactHtmlParser (homePageBannerData?.more_details_link_text) }
                </a>
                <br />
                <a className="btn btn-secondary cta" href={homePageBannerData?.button_url}>
                  <i className="fa fa-caret-right"></i>{ ReactHtmlParser (homePageBannerData?.button_text) }
                </a>
                <br /> <br />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="trust-builder">
        <div class="wrapper d-flex">
          <div class="headline">
            <h2>{ ReactHtmlParser (trustbuilderData?.heading_text) }</h2>
            <span class="sub-text">{ ReactHtmlParser (trustbuilderData?.description_text) }</span>
          </div>

          <div class="trust-logos">

            <div class="trust-pilot-placement">

              <div class="trustpilot-widget" data-locale="en-GB" data-template-id="53aa8807dec7e10d38f59f32" data-businessunit-id="4d80cd6700006400050ef95e" data-style-height="150px" data-style-width="100%" data-theme="light" style={{ position: "relative" }}><iframe style={{ position: "relative", height: "150px", width: "100%", borderStyle: "none", display: "block", overflow: "hidden" }} title="Customer reviews powered by Trustpilot" src="https://widget.trustpilot.com/trustboxes/53aa8807dec7e10d38f59f32/index.html?templateId=53aa8807dec7e10d38f59f32&amp;businessunitId=4d80cd6700006400050ef95e#locale=en-GB&amp;styleHeight=150px&amp;styleWidth=100%25&amp;theme=light"></iframe></div>
            </div>

            <img class="awards-defecto lazyloaded" src="https://wpdemo3.staysure.co.uk/wp-content/webp-express/webp-images/doc-root/wp-content/themes/staysure-wdr/assets/img/defacto-2022.png.webp" data-src="https://wpdemo3.staysure.co.uk/wp-content/webp-express/webp-images/doc-root/wp-content/themes/staysure-wdr/assets/img/defacto-2022.png.webp" alt="" />
            <img class="awards-britishtravel lazyloaded" src="https://wpdemo3.staysure.co.uk/wp-content/webp-express/webp-images/doc-root/wp-content/themes/staysure-wdr/assets/img/BTA2020_new.png.webp" data-src="https://wpdemo3.staysure.co.uk/wp-content/webp-express/webp-images/doc-root/wp-content/themes/staysure-wdr/assets/img/BTA2020_new.png.webp" alt="" />
          </div>
        </div>
      </div>

      <div class="product-list">
        <div class="wrapper">


          <ul>                <li class="col-50">
            <div class="image-holder">
              <a href="/single-trip-travel-insurance/">

                <picture>
                  <img class=" lazyloaded" src="https://dxcdkie9wax5t.cloudfront.net/wp-content/uploads/2022/09/08074452/picturemessage_02yz13lz.ucw_.png" data-src="https://dxcdkie9wax5t.cloudfront.net/wp-content/uploads/2022/09/08074452/picturemessage_02yz13lz.ucw_.png" alt="group of seniors laughing" />
                </picture>

              </a>
              <div class="price-point" style={{ display: "none" }}>8 days European cover from <span class="price">£9.99<span class="caveat"></span></span>
              </div>
            </div>
            <div class="text-holder">
              <a href="/single-trip-travel-insurance/"><h3>
                Single Trip                                <span>Travel Insurance</span>
              </h3></a>
              <span class="details-paragraph">Covering you for one trip to any worldwide destination, with no upper age limit</span>

            </div>

            <div class="button-holder home-page-btn-holder">
              <a href="/single-trip-travel-insurance/" class="button btn-outline-primary" onclick="triggerGolbalGoogleEvents_Standard(`cta`, `Home page product list`, this)"><i class="fa fa-caret-right"></i> Find out more</a>
            </div>
          </li>
            <li class="col-50" style={{ marginRight: "0" }}>
              <div class="image-holder">
                <a href="/annual-travel-insurance/">

                  <picture>
                    <img class=" lazyloaded" src="https://dxcdkie9wax5t.cloudfront.net/wp-content/uploads/2019/02/21082548/2-e1597998348851.jpg" data-src="https://dxcdkie9wax5t.cloudfront.net/wp-content/uploads/2019/02/21082548/2-e1597998348851.jpg" alt="woman on holiday" />
                  </picture>

                </a>
              </div>
              <div class="text-holder">
                <a href="/annual-travel-insurance/"><h3>
                  Annual Multi-Trip                                <span>Travel Insurance</span>
                </h3></a>
                <span class="details-paragraph">Flexibility to travel where you want, when you want, and as often as you want</span>

              </div>

              <div class="button-holder home-page-btn-holder">
                <a href="/annual-travel-insurance/" class="button btn-outline-primary" onclick="triggerGolbalGoogleEvents_Standard(`cta`, `Home page product list`, this)"><i class="fa fa-caret-right"></i> Find out more</a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="why-staysure">
        <div class="wrapper">
          <div class="usps">
            <ul>
              <li>
                <div class="number-holder">
                  <div class="progress-pie-chart-1 gt-50" data-percent="98">
                    <div class="ppc-progress">
                      <div class="ppc-progress-fill-1" style={{ transform: "rotate(352.8deg)" }}></div>
                    </div>
                    <div class="ppc-percents">
                      <div class="pcc-percents-wrapper">
                        <span>99<i>%</i></span>
                      </div>
                    </div>
                  </div>

                </div>
                <span>of global destinations covered</span>
              </li>
              <li>
                <div class="number-holder">
                  <div class="progress-pie-chart-2 gt-50" data-percent="98">
                    <div class="ppc-progress">
                      <div class="ppc-progress-fill-2" style={{ transform: "rotate(352.8deg)" }}></div>
                    </div>
                    <div class="ppc-percents">
                      <div class="pcc-percents-wrapper">
                        <span>99<i>%</i></span>
                      </div>
                    </div>
                  </div>

                </div>
                <span>of people say travel insurance is as important as ever**</span>
              </li>
              <li>
                <div class="number-holder">
                  <div class="progress-pie-chart-3 gt-50" data-percent="95">
                    <div class="ppc-progress">
                      <div class="ppc-progress-fill-3" style={{ transform: "rotate(352.8deg)" }}></div>
                    </div>
                    <div class="ppc-percents">
                      <div class="pcc-percents-wrapper">
                        <span>94<i>%</i></span>
                      </div>
                    </div>
                  </div>

                </div>
                <span>of our customers rated us 4 or 5 stars^</span>
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
                <h3>Coronavirus cover included</h3>

                <p>All policies include emergency medical cover abroad for COVID-19.</p>
                <a href="/" className="btn btn-secondary btn-bold mt-3">
                  <i className="fas fa-caret-right"></i> Find Out More
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
                  <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                    <iframe
                      src="https://player.vimeo.com/video/432167764?color=ffffff&title=0&byline=0&portrait=0"
                      data-src="<?php echo get_field('tv_advert')['video_url']; ?>?color=ffffff&title=0&byline=0&portrait=0"
                      frameBorder="0"
                      style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }}
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

      <div class="hp-lifestyle-wrapper">
        <div class="hp-lifestyle-posts">
          <div class="wrapper">
            <ul>
              <li>
                <a href="https://wpdemo3.staysure.co.uk/discover/travel-airline-strikes/" onclick="triggerGolbalGoogleEvents_Standard(`Strikes: Am I covered by my travel insurance?`, `Home page Lifestyle`, this)" class="image-holder">
                  <picture>
                    <source media="(max-width: 568px)" data-srcset="https://dxcdkie9wax5t.cloudfront.net/wp-content/uploads/2022/08/13080431/airport-checkin-534x300.jpg" srcset="https://dxcdkie9wax5t.cloudfront.net/wp-content/uploads/2022/08/13080431/airport-checkin-534x300.jpg" />
                    <source media="(max-width: 1000px)" data-srcset="https://dxcdkie9wax5t.cloudfront.net/wp-content/uploads/2022/08/13080431/airport-checkin.jpg" srcset="https://dxcdkie9wax5t.cloudfront.net/wp-content/uploads/2022/08/13080431/airport-checkin.jpg" />
                    <source media="(min-width: 1001px)" data-srcset="https://dxcdkie9wax5t.cloudfront.net/wp-content/uploads/2022/08/13080431/airport-checkin-356x200.jpg" srcset="https://dxcdkie9wax5t.cloudfront.net/wp-content/uploads/2022/08/13080431/airport-checkin-356x200.jpg" />
                    <img class=" lazyloaded" src="https://dxcdkie9wax5t.cloudfront.net/wp-content/uploads/2022/08/13080431/airport-checkin-356x200.jpg" data-src="https://dxcdkie9wax5t.cloudfront.net/wp-content/uploads/2022/08/13080431/airport-checkin-356x200.jpg" alt="" />
                  </picture>
                </a>
                <div class="text-holder">
                  <a href="https://wpdemo3.staysure.co.uk/discover/travel-airline-strikes/" onclick="triggerGolbalGoogleEvents_Standard(`Strikes: Am I covered by my travel insurance?`, `Home page Lifestyle`, this)"><h5>Strikes: Am I covered by my travel insurance?</h5></a>
                  <p>Find out what your rights are when your airline or cruise company goes on strike, and whether you’re covered by your travel insurance.</p>
                </div>
              </li>
              <li>
                <a href="https://wpdemo3.staysure.co.uk/discover/are-you-fit-to-fly/" onclick="triggerGolbalGoogleEvents_Standard(`Travelling with medical conditions: Are you fit to fly?`, `Home page Lifestyle`, this)" class="image-holder">
                  <picture>
                    <source media="(max-width: 568px)" data-srcset="https://dxcdkie9wax5t.cloudfront.net/wp-content/uploads/2022/07/26100814/women-in-airport-534x300.jpg" srcset="https://dxcdkie9wax5t.cloudfront.net/wp-content/uploads/2022/07/26100814/women-in-airport-534x300.jpg" />
                    <source media="(max-width: 1000px)" data-srcset="https://dxcdkie9wax5t.cloudfront.net/wp-content/uploads/2022/07/26100814/women-in-airport.jpg" srcset="https://dxcdkie9wax5t.cloudfront.net/wp-content/uploads/2022/07/26100814/women-in-airport.jpg" />
                    <source media="(min-width: 1001px)" data-srcset="https://dxcdkie9wax5t.cloudfront.net/wp-content/uploads/2022/07/26100814/women-in-airport-356x200.jpg" srcset="https://dxcdkie9wax5t.cloudfront.net/wp-content/uploads/2022/07/26100814/women-in-airport-356x200.jpg" />
                    <img class=" lazyloaded" src="https://dxcdkie9wax5t.cloudfront.net/wp-content/uploads/2022/07/26100814/women-in-airport-356x200.jpg" data-src="https://dxcdkie9wax5t.cloudfront.net/wp-content/uploads/2022/07/26100814/women-in-airport-356x200.jpg" alt="women in airport" />
                  </picture>
                </a>
                <div class="text-holder">
                  <a href="https://wpdemo3.staysure.co.uk/discover/are-you-fit-to-fly/" onclick="triggerGolbalGoogleEvents_Standard(`Travelling with medical conditions: Are you fit to fly?`, `Home page Lifestyle`, this)"><h5>Travelling with medical conditions: Are you fit to fly?</h5></a>
                  <p>Are you going away soon? If you live with medical conditions, you might have questions about being fit to fly. </p>
                </div>
              </li>
              <li>
                <a href="https://wpdemo3.staysure.co.uk/discover/coronavirus-latest/" onclick="triggerGolbalGoogleEvents_Standard(`Your rights and when you can claim for cancellations, delays and COVID-19`, `Home page Lifestyle`, this)" class="image-holder">
                  <picture>
                    <source media="(max-width: 568px)" data-srcset="https://dxcdkie9wax5t.cloudfront.net/wp-content/uploads/2022/08/13080125/travellers-walking-through-the-airport-534x300.jpg" srcset="https://dxcdkie9wax5t.cloudfront.net/wp-content/uploads/2022/08/13080125/travellers-walking-through-the-airport-534x300.jpg" />
                    <source media="(max-width: 1000px)" data-srcset="https://dxcdkie9wax5t.cloudfront.net/wp-content/uploads/2022/08/13080125/travellers-walking-through-the-airport.jpg" srcset="https://dxcdkie9wax5t.cloudfront.net/wp-content/uploads/2022/08/13080125/travellers-walking-through-the-airport.jpg" />
                    <source media="(min-width: 1001px)" data-srcset="https://dxcdkie9wax5t.cloudfront.net/wp-content/uploads/2022/08/13080125/travellers-walking-through-the-airport-356x200.jpg" srcset="https://dxcdkie9wax5t.cloudfront.net/wp-content/uploads/2022/08/13080125/travellers-walking-through-the-airport-356x200.jpg" />
                    <img class=" lazyloaded" src="https://dxcdkie9wax5t.cloudfront.net/wp-content/uploads/2022/08/13080125/travellers-walking-through-the-airport-356x200.jpg" data-src="https://dxcdkie9wax5t.cloudfront.net/wp-content/uploads/2022/08/13080125/travellers-walking-through-the-airport-356x200.jpg" alt="" />
                  </picture>
                </a>
                <div class="text-holder">
                  <a href="https://wpdemo3.staysure.co.uk/discover/coronavirus-latest/" onclick="triggerGolbalGoogleEvents_Standard(`Your rights and when you can claim for cancellations, delays and COVID-19`, `Home page Lifestyle`, this)"><h5>Your rights and when you can claim for cancellations, delays and COVID-19</h5></a>
                  <p>Find out your rights and how we can help if your travel plans are affected by COVID-19 including what your next steps should be.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="disclaimer">
        <p>§ As rated by a large UK independent consumer association</p>
        <p>* £5,000 cancellation cover available on Comprehensive policies only</p>
        <p>** Based on 2022 survey of 10,242 participants</p>
        <p>^ Trustpilot data, October 2022</p>
        <p>‡The UK’s ‘Favourite’ based on number of Trustpilot reviews </p>
      </div>


    </>
  );
};

export default connect(Home);
