import { connect } from "frontity";
import React, { useEffect, useState } from "react";
import ReactHtmlParser from 'react-html-parser';

const Home = ({ state, libraries }) => {
  const [homePageBannerData, sethomePageBannerData] = useState()
  const [trustbuilderData, setTrustbuilderData] = useState()
  const [productSectionData, setProductSectionData] = useState()
  const [whyStaysureData, setwhyStaysureData] = useState()
  const [tvAdvertData, setTvAdvertData] = useState()
  const [caveatData, setcaveatData] = useState()

  useEffect(() => {
    const dataJson = JSON.parse(JSON.stringify(state)).source.page
    const acfData = dataJson[7].acf;
    const home_page_banner = acfData.home_page_banner;
    const trust_builder = acfData.trust_builder;
    const product_list = acfData.product_list;
    const why_staysure = acfData.why_staysure;
    const tv_advert = acfData.tv_advert
    const homepage_caveat = acfData.homepage_caveat
    sethomePageBannerData(home_page_banner);
    setTrustbuilderData(trust_builder);
    setProductSectionData(product_list)
    setwhyStaysureData(why_staysure);
    setTvAdvertData(tv_advert);
    setcaveatData(homepage_caveat);
    console.log("state home data", acfData)
  }, []);

  useEffect(() => {
    console.log("state home data", homePageBannerData?.heading)
  }, [homePageBannerData]);

  return (
    <>
      <section className="hero-banner home-page" id="heroMainBanner">
        <div className="bg-image"></div>
        <div className="container hero-container">
          <div className="row no-gutters">
            <div className="col-md-6">
              <div className="hero-summery">
                <h1>{ReactHtmlParser(homePageBannerData?.heading)}</h1>
                {ReactHtmlParser(homePageBannerData?.description)}
                <a href={homePageBannerData?.more_details_link_reference_url} className="small-link">
                  {ReactHtmlParser(homePageBannerData?.more_details_link_text)}
                </a>
                <br />
                <a className="btn btn-secondary cta" href={homePageBannerData?.button_url}>
                  <i className="fa fa-caret-right"></i>{ReactHtmlParser(homePageBannerData?.button_text)}
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
            <h2>{ReactHtmlParser(trustbuilderData?.heading_text)}</h2>
            <span class="sub-text">{ReactHtmlParser(trustbuilderData?.description_text)}</span>
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
          <ul>
            {
              productSectionData?.select_product_list?.map?.((product) => {
                <li class="col-50">
                  <div class="image-holder">
                    <a href={ReactHtmlParser(product.product_url)}>

                      <picture>
                        <img class=" lazyloaded" src={ReactHtmlParser(product.product_image)} data-src={ReactHtmlParser(product.product_image)} alt={ReactHtmlParser(product.product_image_alt)} />
                      </picture>

                    </a>
                    <div class="price-point" style={{ display: "none" }}>8 days European cover from <span class="price">£9.99<span class="caveat"></span></span>
                    </div>
                  </div>
                  <div class="text-holder">
                    <a href={ReactHtmlParser(product.product_url)}><h3>
                      {ReactHtmlParser(product.product_title_line_1)}  <span>{ReactHtmlParser(product.product_title_line_2)}</span>
                    </h3></a>
                    <span class="details-paragraph">{ReactHtmlParser(product.product_description)}</span>

                  </div>

                  <div class="button-holder home-page-btn-holder">
                    <a href={ReactHtmlParser(product.product_url)} class="button btn-outline-primary" onclick="triggerGolbalGoogleEvents_Standard(`cta`, `Home page product list`, this)"><i class="fa fa-caret-right"></i> {ReactHtmlParser(product.button_text)}</a>
                  </div>
                </li>
              })
            }

          </ul>
        </div>
      </div>

      <div class="why-staysure">
        <div class="wrapper">
          <div class="usps">
            <ul>
           
              
                  <li>
                    <div class="number-holder">
                      <div class="progress-pie-chart-1 gt-50" data-percent={ReactHtmlParser(whyStaysureData?.pie_chart_1?.chart_filled_percentage)} >
                        <div class="ppc-progress">
                          <div class="ppc-progress-fill-1" style={{ transform: "rotate(352.8deg)" }}></div>
                        </div>
                        <div class="ppc-percents">
                          <div class="pcc-percents-wrapper">
                            <span>{ReactHtmlParser(whyStaysureData?.pie_chart_1?.percentage_value)}<i>%</i></span>
                          </div>
                        </div>
                      </div>

                    </div>
                    <span>{ReactHtmlParser(whyStaysureData?.pie_chart_1?.chart_description)}</span>
                  </li>

                  <li>
                    <div class="number-holder">
                      <div class="progress-pie-chart-1 gt-50" data-percent={ReactHtmlParser(whyStaysureData?.pie_chart_2?.chart_filled_percentage)} >
                        <div class="ppc-progress">
                          <div class="ppc-progress-fill-1" style={{ transform: "rotate(352.8deg)" }}></div>
                        </div>
                        <div class="ppc-percents">
                          <div class="pcc-percents-wrapper">
                            <span>{ReactHtmlParser(whyStaysureData?.pie_chart_2?.percentage_value)}<i>%</i></span>
                          </div>
                        </div>
                      </div>

                    </div>
                    <span>{ReactHtmlParser(whyStaysureData?.pie_chart_2?.chart_description)}</span>
                  </li>

                  <li>
                    <div class="number-holder">
                      <div class="progress-pie-chart-1 gt-50" data-percent={ReactHtmlParser(whyStaysureData?.pie_chart_3?.chart_filled_percentage)} >
                        <div class="ppc-progress">
                          <div class="ppc-progress-fill-1" style={{ transform: "rotate(352.8deg)" }}></div>
                        </div>
                        <div class="ppc-percents">
                          <div class="pcc-percents-wrapper">
                            <span>{ReactHtmlParser(whyStaysureData?.pie_chart_3?.percentage_value)}<i>%</i></span>
                          </div>
                        </div>
                      </div>

                    </div>
                    <span>{ReactHtmlParser(whyStaysureData?.pie_chart_3?.chart_description)}</span>
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
                <h3>{ReactHtmlParser(tvAdvertData?.header_text)}</h3>

                <p>{ReactHtmlParser(tvAdvertData?.description_text)}</p>
                <a href={ReactHtmlParser(tvAdvertData?.button_reference_url)} className="btn btn-secondary btn-bold mt-3">
                  <i className="fas fa-caret-right"></i> {ReactHtmlParser(tvAdvertData?.button_text)}
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
                    content={ReactHtmlParser(tvAdvertData?.video_description)}
                  />
                  <meta itemProp="uploadDate" content="2018-11-27" />
                  <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                    <iframe
                      src="https://player.vimeo.com/video/432167764?color=ffffff&title=0&byline=0&portrait=0"
                      data-src={ReactHtmlParser(tvAdvertData?.video_url) + "?color=ffffff&title=0&byline=0&portrait=0" }
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
        {ReactHtmlParser(caveatData)}
      </div>


    </>
  );
};

export default connect(Home);
