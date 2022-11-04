
import { connect } from "frontity";
import React from "react";

const Page = ({ state }) => {
 
 
  return (
    <>
    <section class="hero-banner home-page" id="heroMainBanner">
                <div class="bg-image" ></div>
                <div class="container hero-container">
                    <div class="row no-gutters">
                        <div class="col-md-6">
                            <div class="hero-summery">
                                <h1>Product Page</h1>
                                <p>Product page description</p>
                                <a href="<?php echo get_field('home_page_banner')['more_details_link_reference_url']; ?>" class="small-link">Get Quoute</a><br />
                                <a class="btn btn-secondary cta" href="<?php echo get_field('home_page_banner')['button_url']; ?>" onclick="triggerGolbalGoogleEvents_Standard(`cta`, `Home page promotional banner`, this)"><i class="fa fa-caret-right"></i>Find Out More </a> <br /> <br />
                            </div>
                        </div>
                        <div class="col-md-6 offer-wrapper desktop-offer">
                            <div class="offer-content">
                                <div class="offer-block">
                                    <div class="offer">
                                        <span class="number">20</span>
                                        <span class="symbol">
                                            <span>%</span>
                                            <span>OFF<small>‡</small></span>
                                        </span>
                                    </div>
                                    <div class="details-wrapper">
                                        <div class="title">
                                            <span class="small">Summer</span> <span class="large">SALE!</span>
                                        </div>
                                        <div class="code-block"><span class="code">Code: <strong>TAN20</strong></span>
                                            <span class="date">Expiry:</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 offer-wrapper mobile-offer">

                            <div class="offer-block-sm">
                                <div class="offer-title">
                                    <img class="lazyload" data-src="<?php echo assets_url(); ?>/assets/img/banner_summerSale.svg" alt="Summer Sale" />
                                </div>
                                <div class="offer-description">
                                    <div class="offer-amount"><img class="lazyload" data-src="<?php echo assets_url(); ?>/assets/img/banner_20Off.svg" alt="20% Off" /></div>
                                    <div class="offer-valid">
                                        <div class="code">Promo code: TAN20</div>
                                        <div class="duration">Offer ends/22</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            <div class="trust-builder">
                <div class="wrapper d-flex">
                    <div class="headline">
                        <h2></h2>
                        <span class="sub-text"></span>
                    </div>
                    <div class="trust-logos">
                        <div class="trust-pilot-placement">
                            <div class="trustpilot-widget" data-locale="en-GB" data-template-id="53aa8807dec7e10d38f59f32" data-businessunit-id="4d80cd6700006400050ef95e" data-style-height="150px" data-style-width="100%" data-theme="light">
                                <a href="https://uk.trustpilot.com/review/www.staysure.co.uk" target="_blank" rel="noopener">Trustpilot</a>
                            </div>
                        </div>
                        <img class="lazyload awards-defecto" src="<?PHP echo assets_url(); ?>/assets/img/loader_352_198.gif" data-src="<?php echo assets_url(); ?>/assets/img/defacto-2022.png" alt="" />
                        <img class="lazyload awards-britishtravel" src="<?PHP echo assets_url(); ?>/assets/img/loader_352_198.gif" data-src="<?php echo assets_url(); ?>/assets/img/BTA2020_new.png"
                            alt="" />
                    </div>
                </div>
            </div>

            <div class="why-staysure">
                <div class="wrapper">
                    <div class="usps">
                        <ul>
                            <li>
                                <div class="number-holder">
                                    <div class="progress-pie-chart-1" data-percent="90">
                                        <div class="ppc-progress">
                                            <div class="ppc-progress-fill-1"></div>
                                        </div>
                                        <div class="ppc-percents">
                                            <div class="pcc-percents-wrapper">
                                                <span>90<i>%</i></span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <span>test description</span>
                            </li>
                            <li>
                                <div class="number-holder">
                                    <div class="progress-pie-chart-2" data-percent="90">
                                        <div class="ppc-progress">
                                            <div class="ppc-progress-fill-2"></div>
                                        </div>
                                        <div class="ppc-percents">
                                            <div class="pcc-percents-wrapper">
                                                <span>90<i>%</i></span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <span>test description</span>
                            </li>
                            <li>
                                <div class="number-holder">
                                    <div class="progress-pie-chart-3" data-percent="90">
                                        <div class="ppc-progress">
                                            <div class="ppc-progress-fill-3"></div>
                                        </div>
                                        <div class="ppc-percents">
                                            <div class="pcc-percents-wrapper">
                                                <span>90<i>%</i></span>
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

            <div class="tv-advert-holder" id="testimonialtp">

                <div class="wrapper">
                    <section class="what-customer-say home-page-section">
                        <div class="container d-md-flex align-items-center h-100">
                            <div class="hero-details">
                                <h3>Heding 3</h3>

                                <p>test description</p>
                                <a href="/" class="btn btn-secondary btn-bold mt-3" onclick="triggerGolbalGoogleEvents_Standard(`cta`, `TV Advert (Coronavirus cover included)`, this)"><i class="fas fa-caret-right"></i> get quote</a>
                            </div>
                            <div class="video-widget">
                                <div class="fluid-width-video-wrapper">
                                    <meta itemprop="duration" content="T3M03S" />
                                    <meta itemprop="thumbnailUrl" content="https://dxcdkie9wax5t.cloudfront.net/wp-content/uploads/2018/11/27123050/denise-michael.jpg" />
                                    <meta itemprop="description" content="<?php echo get_field('tv_advert')['video_description']; ?>" />
                                    <meta itemprop="uploadDate" content="2018-11-27" />
                                    <div >
                                        <iframe src="https://player.vimeo.com/video/432167764?color=ffffff&title=0&byline=0&portrait=0" data-src="<?php echo get_field('tv_advert')['video_url']; ?>?color=ffffff&title=0&byline=0&portrait=0"  frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div><script async src="https://player.vimeo.com/api/player.js"></script>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
    </>
  );
};

export default connect(Page);