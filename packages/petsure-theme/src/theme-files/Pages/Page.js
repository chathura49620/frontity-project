import { connect } from "frontity";
import React, { useEffect } from "react";
import { useState } from 'react';
import ReactHtmlParser from 'react-html-parser'; 

const Page = ({ state }) => {
  const [heroPara,setHeroPara] = useState()

  useEffect(async () => {
    const data = await state.source.get(state.router.link);
    // console.log(state)
  }, []);


  useEffect(() => {

    const dataJson = JSON.parse(JSON.stringify(state)).source.page
    setHeroPara(dataJson[50339].acf.hero_paragraph);
    
  }, [state]);

  return (
    <>
    <div class="mt-0">
      <section class="hero-section st-product-bg single-trip-banner content-media-banner half-img-banner">
        <div class="hero-details-wrapper">
          <div class="container">
            <div class="hero-details">
              <h1 class="title" itemprop="name">Travel Insurance</h1>
              <div class="hero-description">{ ReactHtmlParser (heroPara) }
              </div>
              <div class="btn-wrapper">
                <a href="https://travelinsurance.staysure.co.uk/quote/policy-details" onclick="triggerGolbalGoogleEvents_Standard(`cta`, `Product page banner`, this)" class="btn btn-secondary"><i class="fas fa-caret-right"></i> Get
                  Quote</a>
              </div>
            </div>
          </div>
        </div>
        <div class="image-block media-block" style={{backgroundImage: `url('https://dxcdkie9wax5t.cloudfront.net/wp-content/uploads/2022/05/10102032/couple-taking-selfie-in-tropical-sea-1.jpg')`}}>
        </div>
      </section>

      <div class="trust-builder">
        <div class="wrapper d-flex">
          <div class="headline">
            <h2>Thanks for making us N<sup>o</sup>1<br />on Trustpilot</h2>
            <span class="sub-text">We've got more Trustpilot reviews rated 'Excellent' than any other travel insurance provider!</span>
          </div>
          <div class="trust-logos">
            <div class="trust-pilot-placement">
              <div class="trustpilot-widget" data-locale="en-GB" data-template-id="53aa8807dec7e10d38f59f32" data-businessunit-id="4d80cd6700006400050ef95e" data-style-height="150px" data-style-width="100%" data-theme="light" style={{position: "relative"}}><iframe style={{position: "relative", height: "150px", width: "100%", borderStyle: "none", display: "block", overflow: "hidden"}} title="Customer reviews powered by Trustpilot" src="https://widget.trustpilot.com/trustboxes/53aa8807dec7e10d38f59f32/index.html?templateId=53aa8807dec7e10d38f59f32&amp;businessunitId=4d80cd6700006400050ef95e#locale=en-GB&amp;styleHeight=150px&amp;styleWidth=100%25&amp;theme=light"></iframe></div>
            </div>
            <img class="awards-defecto lazyloaded" src="https://wpdemo3.staysure.co.uk/wp-content/webp-express/webp-images/doc-root/wp-content/themes/staysure-wdr/assets/img/defacto-2022.png.webp" data-src="https://wpdemo3.staysure.co.uk/wp-content/webp-express/webp-images/doc-root/wp-content/themes/staysure-wdr/assets/img/defacto-2022.png.webp" alt="" />
            <img class="awards-britishtravel lazyloaded" src="https://wpdemo3.staysure.co.uk/wp-content/webp-express/webp-images/doc-root/wp-content/themes/staysure-wdr/assets/img/BTA2020_new.png.webp" data-src="https://wpdemo3.staysure.co.uk/wp-content/webp-express/webp-images/doc-root/wp-content/themes/staysure-wdr/assets/img/BTA2020_new.png.webp" alt="" />
          </div>
        </div>
      </div>

      <section class="pg-section-nav mt-0" id="intro-sec">
        <ul class="container" data-optly-2336950c-a1f4-4d74-8d6a-3f44eff074ab=""><li data-optly-2336950c-a1f4-4d74-8d6a-3f44eff074ab=""><a href="#1" data-optly-2336950c-a1f4-4d74-8d6a-3f44eff074ab="">Introduction</a></li>
          <li data-optly-2336950c-a1f4-4d74-8d6a-3f44eff074ab=""><a href="#2" data-optly-2336950c-a1f4-4d74-8d6a-3f44eff074ab="">Why Staysure?</a></li>
          <li data-optly-2336950c-a1f4-4d74-8d6a-3f44eff074ab=""><a href="#newAco" data-optly-2336950c-a1f4-4d74-8d6a-3f44eff074ab="">Optional Extras</a></li>
          <li data-optly-2336950c-a1f4-4d74-8d6a-3f44eff074ab=""><a href="#3" data-optly-2336950c-a1f4-4d74-8d6a-3f44eff074ab="">My Staysure</a></li>
          <li data-optly-2336950c-a1f4-4d74-8d6a-3f44eff074ab=""><a href="#4" data-optly-2336950c-a1f4-4d74-8d6a-3f44eff074ab="">What's covered?</a></li>
          <li data-optly-2336950c-a1f4-4d74-8d6a-3f44eff074ab=""><a href="#6" data-optly-2336950c-a1f4-4d74-8d6a-3f44eff074ab="">Reviews</a></li>
          <li data-optly-2336950c-a1f4-4d74-8d6a-3f44eff074ab=""><a href="#7" data-optly-2336950c-a1f4-4d74-8d6a-3f44eff074ab="">Related Documents</a></li></ul>
        {/* <script type="text/javascript">
            jQuery(function() {
                // Desired offset, in pixels
                var offset = 0;
                var windowsize = jQuery(window).width();

                if (windowsize < 576) {
                    offset = -80;
                }

                // Desired time to scroll, in milliseconds
                var scrollTime = 500;

                jQuery('a[href^="#"]').click(function() {
                    // Need both `html` and `body` for full browser support
                    jQuery("html, body").animate({
                        scrollTop: jQuery(jQuery(this).attr("href")).offset().top + offset
                    }, scrollTime);

                    // Prevent the jump/flash
                    return false;
                });
            });
        </script> */}
      </section>

      <section class="single-trip mb-md-5 mb-4" id="1">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-4 col-md-5 img-sec order-md-2 cms_links_contains">
              <img data-src="https://dxcdkie9wax5t.cloudfront.net/wp-content/uploads/2022/09/08095650/Untitled-design-11.jpg" alt="" class="img-fluid lazyloaded" itemprop="image" src="https://dxcdkie9wax5t.cloudfront.net/wp-content/uploads/2022/09/08095650/Untitled-design-11.jpg" />
            </div>
            <div class="col-lg-8 col-md-7 info-sec pr-md-5 order-md-1 intro-para">
              <h2 class="section-title">What is single trip travel insurance?</h2>
              <div class="cms_links_contains"><p>Single trip travel insurance covers you for a round trip to one or more destinations, so it’s a great choice for a one-off holiday.</p>
                <p>Wanderlust doesn’t wear off just because you live with a medical condition, which is why our Single Trip policy can cover most <a href="/medical-travel-insurance/">pre-existing conditions</a>. There’s also no upper age limit, so you can escape the everyday with tailored cover that suits you.</p>
                <p>Take out our Single Trip policy to get the following cover:</p>
                <p>✔&nbsp; Cancellations<br />
                  ✔&nbsp; Cutting your holiday short<br />
                  ✔&nbsp; Medical expenses<br />
                  ✔&nbsp; Baggage claims<br />
                  ✔&nbsp; Lost or stolen cash</p>
                <p>Your Cancellation Cover kicks in as soon as you take out your policy. That means your holiday is protected straight away from unforeseen events that could stop you going away.</p>
              </div>
              <a href="https://travelinsurance.staysure.co.uk/quote/policy-details" onclick="triggerGolbalGoogleEvents_Standard(`cta`, `What is single trip travel insurance?`, this)" class="btn btn-secondary btn-bold mt-3"><i class="fas fa-caret-right"></i> Get Quote</a>
            </div>
          </div>
        </div>
      </section>

      <section class="why-staysure-sec mt-0" id="2">
        <div class="container">
          <h2 class="section-title mb-4">Why Choose Staysure?</h2>
          <div class="row no-gutters">
            <div class="col-md-3 text-sm-center">
              <div class="img-div">
                <img data-src="https://dxcdkie9wax5t.cloudfront.net/wp-content/uploads/2018/11/12090501/TDCplane_icon.jpg" alt="Emergency medical cover abroad for COVID-19" class=" lazyloaded" src="https://dxcdkie9wax5t.cloudfront.net/wp-content/uploads/2018/11/12090501/TDCplane_icon.jpg" />
              </div>
              <div>
                <p>Emergency medical cover abroad for COVID-19</p>
                <span> </span>
              </div>

            </div>
            <div class="col-md-3 text-sm-center">
              <div class="img-div">
                <img data-src="https://dxcdkie9wax5t.cloudfront.net/wp-content/uploads/2018/11/03133402/my-staysure-usp-icon-e1630676175939.png" alt="Easy to access and amend your policy online" class=" lazyloaded" src="https://dxcdkie9wax5t.cloudfront.net/wp-content/uploads/2018/11/03133402/my-staysure-usp-icon-e1630676175939.png" />
              </div>
              <div>
                <p>Easy to access and amend your policy online</p>
                <span> </span>
              </div>

            </div>
            <div class="col-md-3 text-sm-center">
              <div class="img-div">
                <img data-src="https://dxcdkie9wax5t.cloudfront.net/wp-content/uploads/2018/11/12090707/icon-people.png" alt="We’ve given over 8m people peace of mind" class=" lazyloaded" src="https://dxcdkie9wax5t.cloudfront.net/wp-content/uploads/2018/11/12090707/icon-people.png" />
              </div>
              <div>
                <p>We’ve given over 8m people peace of mind</p>
                <span> Data covers Jan 2005 - Jan 2021</span>
              </div>

            </div>
            <div class="col-md-3 text-sm-center">
              <div class="img-div">
                <img data-src="https://dxcdkie9wax5t.cloudfront.net/wp-content/uploads/2021/06/01090754/pcr-test-icon-e1622538574559.png" alt="Get 10% off COVID-19 tests for travel with a new policy" class=" lazyloaded" src="https://dxcdkie9wax5t.cloudfront.net/wp-content/uploads/2021/06/01090754/pcr-test-icon-e1622538574559.png" />
              </div>
              <div>
                <p>Get 10% off COVID-19 tests for travel with a new policy</p>
                <span> </span>
              </div>

            </div>
          </div>
        </div>
      </section>

      <div id="newAco" class="block-aco" data-optly-b18b3905-8843-4b68-b5aa-8ad6fc94c305="" data-optly-b18b3905-8843-4b68-b5aa-8ad6fc94c305-rearrange="">
        <div class="container">
          <hr />
          <h2 class="heading-section">Optional Extras</h2>
          <div class="frame">
            <div class="aco-carousel" style={{overflow: "hidden"}}>
              <div class="aco-carousel-stage" style={{transform: "translateZ(0px)", width: "3336px"}}>
                <div class="aco-item active">
                  <div class="product-types-item">
                    <span class="product-bg-image">
                      <img class=" lazyloaded" data-src="https://dxcdkie9wax5t.cloudfront.net/wp-content/themes/staysure-wdr/assets/img/travel-disruption.jpg" alt="UK Staycation" src="https://dxcdkie9wax5t.cloudfront.net/wp-content/themes/staysure-wdr/assets/img/travel-disruption.jpg" />

                    </span>
                    <div class="item-description">
                      <h5 data-toggle="modal" data-target="#acoModal">Travel Disruption Cover</h5>
                      <p>Offers additional cover up to £5,000 for cancelling or cutting your trip short if the
                        FCDO...</p>
                      <button type="button" class="btn btn-trip" data-toggle="modal" data-target="#acoModal" data-id="1">Read more
                      </button>
                    </div>
                  </div>
                </div>
                <div class="aco-item">
                  <div class="product-types-item">
                    <span class="product-bg-image">
                      <img class=" lazyloaded" data-src="https://dxcdkie9wax5t.cloudfront.net/wp-content/themes/staysure-wdr/assets/img/fcdo-extension.jpg" alt="UK Staycation" src="https://dxcdkie9wax5t.cloudfront.net/wp-content/themes/staysure-wdr/assets/img/fcdo-extension.jpg" />

                    </span>
                    <div class="item-description">
                      <h5 data-toggle="modal" data-target="#acoModal">European FCDO Travel Advice Extension</h5>
                      <p>Travel to Europe even if the FCDO advises against all but essential...</p>
                      <button type="button" class="btn btn-trip" data-toggle="modal" data-target="#acoModal" data-id="2">Read more
                      </button>
                    </div>
                  </div>
                </div>
                <div class="aco-item">
                  <div class="product-types-item">
                    <span class="product-bg-image">
                      <img class=" lazyloaded" data-src="https://dxcdkie9wax5t.cloudfront.net/wp-content/themes/staysure-wdr/assets/img/100-day.jpg" alt="UK Staycation" src="https://dxcdkie9wax5t.cloudfront.net/wp-content/themes/staysure-wdr/assets/img/100-day.jpg" />

                    </span>
                    <div class="item-description">
                      <h5 data-toggle="modal" data-target="#acoModal">100 Day Upgrade</h5>
                      <p>If you're aged 70 or under, you can extend your 50 day trip duration limit to 100 days
                        for one...</p>
                      <button type="button" class="btn btn-trip" data-toggle="modal" data-target="#acoModal" data-id="3">Read more
                      </button>
                    </div>
                  </div>
                </div>
                <div class="aco-item">
                  <div class="product-types-item">
                    <span class="product-bg-image">
                      <img class=" lazyloaded" data-src="https://dxcdkie9wax5t.cloudfront.net/wp-content/themes/staysure-wdr/assets/img/golf-cover.jpg" alt="UK Staycation" src="https://dxcdkie9wax5t.cloudfront.net/wp-content/themes/staysure-wdr/assets/img/golf-cover.jpg" />

                    </span>
                    <div class="item-description">
                      <h5 data-toggle="modal" data-target="#acoModal">Golf Cover</h5>
                      <p>Specialist cover for your golf equipment, emergency equipment hire, and non-refundable
                        golfing...</p>
                      <button type="button" class="btn btn-trip" data-toggle="modal" data-target="#acoModal" data-id="4">Read more
                      </button>
                    </div>
                  </div>
                </div>
                <div class="aco-item">
                  <div class="product-types-item">
                    <span class="product-bg-image">
                      <img class=" lazyloaded" data-src="https://dxcdkie9wax5t.cloudfront.net/wp-content/themes/staysure-wdr/assets/img/single-item.jpg" alt="UK Staycation" src="https://dxcdkie9wax5t.cloudfront.net/wp-content/themes/staysure-wdr/assets/img/single-item.jpg" />

                    </span>
                    <div class="item-description">
                      <h5 data-toggle="modal" data-target="#acoModal">Single Item Cover</h5>
                      <p>This add-on increases cover for a single item beyond the standard £400 limit, up to
                        £1,000...</p>
                      <button type="button" class="btn btn-trip" data-toggle="modal" data-target="#acoModal" data-id="5">Read more
                      </button>
                    </div>
                  </div>
                </div>
                <div class="aco-item">
                  <div class="product-types-item">
                    <span class="product-bg-image">
                      <img class="lazyload" data-src="https://dxcdkie9wax5t.cloudfront.net/wp-content/themes/staysure-wdr/assets/img/cruise-plus.jpg" alt="UK Staycation" />

                    </span>
                    <div class="item-description">
                      <h5 data-toggle="modal" data-target="#acoModal">Cruise Plus Cover</h5>
                      <p>Add Cruise Plus Cover to your Comprehensive policy to enjoy generous cover limits for
                        missed...</p>
                      <button type="button" class="btn btn-trip" data-toggle="modal" data-target="#acoModal" data-id="6">Read more
                      </button>
                    </div>
                  </div>
                </div>

                <div class="aco-item">
                  <div class="product-types-item">
                    <span class="product-bg-image">
                      <img class="lazyload" data-src="https://dxcdkie9wax5t.cloudfront.net/wp-content/themes/staysure-wdr/assets/img/winter-sport.jpg" alt="UK Staycation" />

                    </span>
                    <div class="item-description">
                      <h5 data-toggle="modal" data-target="#acoModal">Winter Sports</h5>
                      <p>Provides emergency medical cover when taking part in winter sports. This add-on covers
                        you for...</p>
                      <button type="button" class="btn btn-trip" data-toggle="modal" data-target="#acoModal" data-id="8">Read more
                      </button>
                    </div>
                  </div>
                </div>
                <div class="aco-item">
                  <div class="product-types-item">
                    <span class="product-bg-image">
                      <img class="lazyload" data-src="https://dxcdkie9wax5t.cloudfront.net/wp-content/themes/staysure-wdr/assets/img/gadget.jpg" alt="UK Staycation" />

                    </span>
                    <div class="item-description">
                      <h5 data-toggle="modal" data-target="#acoModal">Gadget Cover</h5>
                      <p>Cover for an unlimited number of gadgets up to a £1,000 limit. Protects you against
                        accidental...</p>
                      <button type="button" class="btn btn-trip" data-toggle="modal" data-target="#acoModal" data-id="9">Read more
                      </button>
                    </div>
                  </div>
                </div>
                <div class="aco-item">
                  <div class="product-types-item">
                    <span class="product-bg-image">
                      <img class="lazyload" data-src="https://dxcdkie9wax5t.cloudfront.net/wp-content/themes/staysure-wdr/assets/img/terrorism-cancellation.jpg" alt="UK Staycation" />

                    </span>
                    <div class="item-description">
                      <h5 data-toggle="modal" data-target="#acoModal">Terrorism Cancellation Cover</h5>
                      <p>This add-on gives you the flexibility to cancel your holiday if there...</p>
                      <button type="button" class="btn btn-trip" data-toggle="modal" data-target="#acoModal" data-id="10">Read more
                      </button>
                    </div>
                  </div>
                </div>
                <div class="aco-item">
                  <div class="product-types-item">
                    <span class="product-bg-image">
                      <img class="lazyload" data-src="https://dxcdkie9wax5t.cloudfront.net/wp-content/themes/staysure-wdr/assets/img/excess.jpg" alt="UK Staycation" />

                    </span>
                    <div class="item-description">
                      <h5 data-toggle="modal" data-target="#acoModal">Excess Waiver</h5>
                      <p>This add-on removes the need to pay any excess for each item you’re claiming for. Cover
                        can’t...</p>
                      <button type="button" class="btn btn-trip" data-toggle="modal" data-target="#acoModal" data-id="11">Read more
                      </button>
                    </div>
                  </div>
                </div>
                <div class="aco-item">
                  <div class="product-types-item">
                    <span class="product-bg-image">
                      <img class="lazyload" data-src="https://dxcdkie9wax5t.cloudfront.net/wp-content/themes/staysure-wdr/assets/img/car-hire.jpg" alt="UK Staycation" />

                    </span>
                    <div class="item-description">
                      <h5 data-toggle="modal" data-target="#acoModal">Car Hire Excess Waiver</h5>
                      <p>Cover for car hire excess or deposit reimbursement charged by the car hire company up to...</p>
                      <button type="button" class="btn btn-trip" data-toggle="modal" data-target="#acoModal" data-id="12">Read more
                      </button>
                    </div>
                  </div>
                </div>
                <div class="aco-item">
                  <div class="product-types-item">
                    <span class="product-bg-image">
                      <img class="lazyload" data-src="https://dxcdkie9wax5t.cloudfront.net/wp-content/themes/staysure-wdr/assets/img/personal-liability.jpg" alt="UK Staycation" />

                    </span>
                    <div class="item-description">
                      <h5 data-toggle="modal" data-target="#acoModal">Personal Liability</h5>
                      <p>Up to £2,000,000 cover for legal costs and liabilities as a result of accidental property
                        damage...</p>
                      <button type="button" class="btn btn-trip" data-toggle="modal" data-target="#acoModal" data-id="13">Read more
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div class="scrollbar">
              <div class="handle" style={{transform: "translateZ(0px) translateX(0px)", width: "358px"}}>
                <div class="mousearea"></div>
              </div>
            </div>
            <div class="aco-carousel-nav">
              <button class="btn-next nextPage"><i class="fa fa-chevron-right"></i></button>
              <button class="btn-prev prevPage disabled" disabled=""><i class="fa fa-chevron-left"></i></button>
            </div>
          </div>

          {/* <script>
              jQuery(function($) {
                'use strict';

              // -------------------------------------------------------------
              //   Basic Navigation
              // -------------------------------------------------------------
              (function () {
                    var $frame = $('.aco-carousel');
              var $slidee = $frame.children('.aco-carousel-stage').eq(0);
              var $wrap = $frame.parent();

              // Call Sly on frame
              $frame.sly({
                horizontal: true,
              itemNav: 'basic',
              itemSelector: '.aco-item',
              smart: 1,
              activateOn: 'click',
              mouseDragging: 1,
              touchDragging: 1,
              releaseSwing: 1,
              startAt: 0,
              scrollBar: $wrap.find('.scrollbar'),
              scrollBy: 1,
              activatePageOn: 'click',
              speed: 300,
              elasticBounds: 1,
              easing: 'easeOutExpo',
              dragHandle: 1,
              dynamicHandle: 1,
              clickBar: 1,

              // Buttons
              forward: $wrap.find('.forward'),
              backward: $wrap.find('.backward'),
              prev: $wrap.find('.prev'),
              next: $wrap.find('.next'),
              prevPage: $wrap.find('.prevPage'),
              nextPage: $wrap.find('.nextPage')
                    });
                }());
            });

              jQuery(window).resize(function(e) {
                var $frame = $('.aco-carousel');
              $frame.sly('reload');
            });


            </script> */}



          <div class="modal fade additional_covers" id="acoModal" tabindex="-1" data-backdrop="static" aria-labelledby="acoModalLabel" aria-hidden="true">
            <div class="modal-dialog">

              <div class="modal-content">
                <div class="modal-header">
                  <div class="modal-image">
                    <img class="main-image img-fluid lazyload" data-src="https://dxcdkie9wax5t.cloudfront.net/wp-content/themes/staysure-wdr/assets/img/travel-disruption.jpg" alt="UK Staycation" />
                  </div>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div class="modal-body">
                  <h5 onchange="myFunction()" class="modal-title" id="acoModalLabel"></h5>
                  <div class="row">
                    <div class="col-md-7 description">
                      <p class="modal-description">
                        Loading...
                      </p>
                    </div>
                    <div class="col-md-5 packages">
                      <h6>Available with:</h6>
                      <ul>
                        <li id="basic_icon">
                        </li>
                        <li id="comprehensive_icon">
                        </li>
                        <li id="single_icon"></li>
                        <li id="annual_icon"></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <section class="medical-cond-sec mt-0 cms_links_contains" id="3">
        <div class="container">
          <div class="row">
            <div class="col-md-6 pr-5">
              <h2 class="title-bold mb-4"> Stay in control of your account with My Staysure</h2>
              <p>You can make changes to your policy, online and in your own time with My Staysure. </p>
              <p>We know you don’t always want to wait in call queues. So if you need to make changes, like updating traveller details or renewing a policy that isn’t changing, visit your <a href="https://my.staysure.co.uk/signin">My Staysure account</a>. </p>
              <p>You can also find some handy travel tips on our <a href="/category/lifestyle/">lifestyle page</a>, including our guide to <a href="/discover/travelling-after-coronavirus-lockdown/">travelling after the coronavirus lockdown</a>. </p>
            </div>
            <div class="col-md-6">
              <h2 class="title-bold mb-4">Policies that suit your needs</h2>
              <div class="d-lg-flex justify-content-between">
                <ul class="bullet-list">
                  <li>No upper age limit</li>
                  <li>Cover for pre-existing medical conditions</li>
                  <li>Optional extras available</li>
                  <li>Over 80 sports and activities included</li>
                  <li>Simple online quote process</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section class="what-cover-sec single-trip mt-0" id="4">
        <div class="container">
          <h2 class="section-title mb-4">What's Covered?</h2>
          <div class="w-100 d-block d-sm-none" id="whats_covered_table_mobile_section">
            <div class="seperating-text"><p>All of the great cover you've <br />come to expect from us...</p></div>
            <div class="tables-wrapper">
              <div class="single-table-wrapper">
                <table class="table table-striped why-choose-tbl">
                  <thead>
                    <tr>
                      <th scope="col">We can cover...</th>
                      <th scope="col">Comprehensive </th>
                    </tr>
                  </thead>
                  <tbody>

                    <tr>
                      <td>Medical emergencies and repatriation</td>
                      <td><div class="icont-text-wrapper"><i class="fas fa-check"></i><span>Unlimited</span></div></td>
                    </tr>
                    <tr>
                      <td>Cancellation</td>
                      <td><div class="icont-text-wrapper"><i class="fas fa-check"></i><span>Up to £5,000</span></div></td>
                    </tr>
                    <tr>
                      <td>Cutting your holiday short</td>
                      <td><div class="icont-text-wrapper"><i class="fas fa-check"></i><span>Up to £5,000</span></div></td>
                    </tr>
                    <tr>
                      <td>Baggage claims</td>
                      <td><div class="icont-text-wrapper"><i class="fas fa-check"></i><span>Up to £2,500</span></div></td>
                    </tr>
                    <tr>
                      <td>Cash lost or stolen</td>
                      <td><div class="icont-text-wrapper"><i class="fas fa-check"></i><span>Up to £500</span></div></td>
                    </tr>
                    <tr>
                      <td>Connecting flight cover</td>
                      <td><div class="icont-text-wrapper"><i class="fas fa-check"></i><span>Up to £1500</span></div></td>
                    </tr>
                    <tr>
                      <td>Legal protection cover</td>
                      <td><div class="icont-text-wrapper"><i class="fas fa-check"></i><span>Up to £25,000</span></div></td>
                    </tr>
                    <tr>
                      <td>End Supplier Failure</td>
                      <td><div class="icont-text-wrapper"><i class="fas fa-check"></i><span>£3,000</span></div></td>
                    </tr>
                    <tr>
                      <td>Personal liability</td>
                      <td><div class="icont-text-wrapper"><i class="fas fa-check"></i><span>Up to £2 million</span></div></td>
                    </tr>
                    <tr>
                      <td>Up to £2 million</td>
                      <td><div class="icont-text-wrapper"><span>£65</span></div></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="seperating-text"><p>... and more with our<br /> Package Cover Add-on!</p></div>
              <div class="single-table-wrapper second-table">
                <table class="table table-striped why-choose-tbl">
                  <thead>
                    <tr>
                      <th scope="col">Package Cover* </th>
                      <th scope="col">Comprehensive + <br />Package Cover Add-on</th>
                    </tr>
                  </thead>
                  <tbody>

                    <tr>
                      <td>Equipment</td>
                      <td><div class="icont-text-wrapper"><i class="fas fa-check"></i><span>Up to £500</span></div></td>
                    </tr>
                    <tr>
                      <td>Equipment hire</td>
                      <td><div class="icont-text-wrapper"><i class="fas fa-check"></i><span>£20 per day, Up to £300</span></div></td>
                    </tr>
                    <tr>
                      <td>Equipment delay</td>
                      <td><div class="icont-text-wrapper"><i class="fas fa-check"></i><span>£20 per day, Up to £300</span></div></td>
                    </tr>
                    <tr>
                      <td>Ski pass</td>
                      <td><div class="icont-text-wrapper"><i class="fas fa-check"></i><span>Up to £200</span></div></td>
                    </tr>
                    <tr>
                      <td>Ski pack</td>
                      <td><div class="icont-text-wrapper"><i class="fas fa-check"></i><span>Up to £250</span></div></td>
                    </tr>
                    <tr>
                      <td>Piste closure</td>
                      <td><div class="icont-text-wrapper"><i class="fas fa-check"></i><span> £20 per day, Up to £200</span></div></td>
                    </tr>
                    <tr>
                      <td>Avalanche or landslide</td>
                      <td><div class="icont-text-wrapper"><span> £20 per day, Up to £160</span></div></td>
                    </tr>
                  </tbody>
                </table>

              </div>
            </div>







          </div>
          <div class="w-100 d-none d-sm-block" id="whats_covered_table_desktop_section">





            <p></p><p>Enjoy your time on the slopes, safe in the knowledge we've got you and your equipment covered. </p>
            <p></p>
            <div class="tables-wrapper">
              <div class="single-table-wrapper">
                <table class="table table-striped why-choose-tbl">
                  <thead>
                    <tr>
                      <th scope="col">We can cover...</th>
                      <th scope="col">Comprehensive </th>
                    </tr>
                  </thead>
                  <tbody>

                    <tr>
                      <td>Medical emergencies and repatriation</td>
                      <td><div class="icont-text-wrapper"><i class="fas fa-check"></i><span>Unlimited</span></div></td>
                    </tr>
                    <tr>
                      <td>Cancellation</td>
                      <td><div class="icont-text-wrapper"><i class="fas fa-check"></i><span>Up to £5,000</span></div></td>
                    </tr>
                    <tr>
                      <td>Cutting your holiday short</td>
                      <td><div class="icont-text-wrapper"><i class="fas fa-check"></i><span>Up to £5,000</span></div></td>
                    </tr>
                    <tr>
                      <td>Baggage claims</td>
                      <td><div class="icont-text-wrapper"><i class="fas fa-check"></i><span>Up to £2,500</span></div></td>
                    </tr>
                    <tr>
                      <td>Cash lost or stolen</td>
                      <td><div class="icont-text-wrapper"><i class="fas fa-check"></i><span>Up to £500</span></div></td>
                    </tr>
                    <tr>
                      <td>Connecting flight cover</td>
                      <td><div class="icont-text-wrapper"><i class="fas fa-check"></i><span>Up to £1500</span></div></td>
                    </tr>
                    <tr>
                      <td>Legal protection cover</td>
                      <td><div class="icont-text-wrapper"><i class="fas fa-check"></i><span>Up to £25,000</span></div></td>
                    </tr>
                    <tr>
                      <td>End Supplier Failure</td>
                      <td><div class="icont-text-wrapper"><i class="fas fa-check"></i><span>£3,000</span></div></td>
                    </tr>
                    <tr>
                      <td>Personal liability</td>
                      <td><div class="icont-text-wrapper"><i class="fas fa-check"></i><span>Up to £2 million</span></div></td>
                    </tr>
                    <tr>
                      <td>Up to £2 million</td>
                      <td><div class="icont-text-wrapper"><i style={{minWidth:"20px"}}></i><span>£65</span></div></td>
                    </tr>

                  </tbody>
                </table>
              </div>
              <div class="single-table-wrapper second-table">
                <table class="table table-striped why-choose-tbl">
                  <thead>
                    <tr>
                      <th scope="col">Package Cover* </th>
                      <th scope="col">Comprehensive + <br />Package Cover Add-on</th>
                    </tr>
                  </thead>
                  <tbody>

                    <tr>
                      <td>Equipment</td>
                      <td><div class="icont-text-wrapper"><i class="fas fa-check"></i><span>Up to £500</span></div></td>
                    </tr>
                    <tr>
                      <td>Equipment hire</td>
                      <td><div class="icont-text-wrapper"><i class="fas fa-check"></i><span>£20 per day, Up to £300</span></div></td>
                    </tr>
                    <tr>
                      <td>Equipment delay</td>
                      <td><div class="icont-text-wrapper"><i class="fas fa-check"></i><span>£20 per day, Up to £300</span></div></td>
                    </tr>
                    <tr>
                      <td>Ski pass</td>
                      <td><div class="icont-text-wrapper"><i class="fas fa-check"></i><span>Up to £200</span></div></td>
                    </tr>
                    <tr>
                      <td>Ski pack</td>
                      <td><div class="icont-text-wrapper"><i class="fas fa-check"></i><span>Up to £250</span></div></td>
                    </tr>
                    <tr>
                      <td>Piste closure</td>
                      <td><div class="icont-text-wrapper"><i class="fas fa-check"></i><span> £20 per day, Up to £200</span></div></td>
                    </tr>
                    <tr>
                      <td>Avalanche or landslide</td>
                      <td><div class="icont-text-wrapper"><i style={{minWidth:"20px"}}s></i><span> £20 per day, Up to £160</span></div></td>
                    </tr>

                  </tbody>
                </table>
                <p>*Only available on Comprehensive policies</p>
              </div>
            </div>






          </div>
        </div>
      </section>

      <section class="related-doc-sec mt-0">
        <div class="container">
          <div class="row">
            <div class="col-md-7 col-lg-9 mb-3 mb-sm-0">
              <h2 class="section-title mb-4">People also asked</h2>

              <div class="what-covered-qa accordion" id="whatCovered" itemscope="" itemtype="http://schema.org/FAQPage">
                <div class="card" itemscope="" itemprop="mainEntity" itemtype="http://schema.org/Question">
                  <div class="card-header" id="questionHeading_1>">
                    <h5 class="collapsed" onclick="triggerGolbalGoogleEvents_Standard('Accordion Open', `Do I need to be vaccinated against COVID-19 to be covered?`, this)" data-toggle="collapse" data-target="#question_1" aria-expanded="false" aria-controls="question_1" itemprop="name">
                      Do I need to be vaccinated against COVID-19 to be covered?                                            <span class="arrow-icon"><img alt=" " data-src="https://wpdemo3.staysure.co.uk/wp-content/themes/staysure-wdr/assets/img/down-arrow.svg" class=" lazyloaded" src="https://wpdemo3.staysure.co.uk/wp-content/themes/staysure-wdr/assets/img/down-arrow.svg" /></span>
                    </h5>
                  </div>

                  <div id="question_1" class="collapse" aria-labelledby="questionHeading_1" data-parent="#whatCovered" itemscope="" itemprop="acceptedAnswer" itemtype="http://schema.org/Answer">
                    <div class="card-body" itemprop="text">
                      <p>To be covered for COVID, you need to have had all doses of the COVID vaccine you’ve been offered, including any booster jabs.</p>
                      <p>You can also be covered if you can’t have the vaccine due to a medical exemption.</p>
                      <p>If you’ve refused any doses of the COVID vaccine or any booster jab, then you won’t be covered for COVID related claims. </p>
                    </div>
                  </div>
                </div>
                <div class="card" itemscope="" itemprop="mainEntity" itemtype="http://schema.org/Question">
                  <div class="card-header" id="questionHeading_2>">
                    <h5 class="collapsed" onclick="triggerGolbalGoogleEvents_Standard('Accordion Open', `Who can be covered by Single Trip Travel Insurance?`, this)" data-toggle="collapse" data-target="#question_2" aria-expanded="false" aria-controls="question_2" itemprop="name">
                      Who can be covered by Single Trip Travel Insurance?                                            <span class="arrow-icon"><img alt=" " data-src="https://wpdemo3.staysure.co.uk/wp-content/themes/staysure-wdr/assets/img/down-arrow.svg" class=" lazyloaded" src="https://wpdemo3.staysure.co.uk/wp-content/themes/staysure-wdr/assets/img/down-arrow.svg" /></span>
                    </h5>
                  </div>

                  <div id="question_2" class="collapse" aria-labelledby="questionHeading_2" data-parent="#whatCovered" itemscope="" itemprop="acceptedAnswer" itemtype="http://schema.org/Answer">
                    <div class="card-body" itemprop="text">
                      <p>There’s no upper age limit on our Single Trip Travel Insurance policy, so you can insure the whole family. You might even get your cover for less, as families and couples living at the same address get an automatic discount on their policy.</p>
                    </div>
                  </div>
                </div>
                <div class="card" itemscope="" itemprop="mainEntity" itemtype="http://schema.org/Question">
                  <div class="card-header" id="questionHeading_3>">
                    <h5 class="collapsed" onclick="triggerGolbalGoogleEvents_Standard('Accordion Open', `Will you cover my pre-existing medical conditions on a Single Trip policy?`, this)" data-toggle="collapse" data-target="#question_3" aria-expanded="false" aria-controls="question_3" itemprop="name">
                      Will you cover my pre-existing medical conditions on a Single Trip policy?                                            <span class="arrow-icon"><img alt=" " data-src="https://wpdemo3.staysure.co.uk/wp-content/themes/staysure-wdr/assets/img/down-arrow.svg" class=" lazyloaded" src="https://wpdemo3.staysure.co.uk/wp-content/themes/staysure-wdr/assets/img/down-arrow.svg" /></span>
                    </h5>
                  </div>

                  <div id="question_3" class="collapse" aria-labelledby="questionHeading_3" data-parent="#whatCovered" itemscope="" itemprop="acceptedAnswer" itemtype="http://schema.org/Answer">
                    <div class="card-body" itemprop="text">
                      <p>We can cover most pre-existing medical conditions — because something you live with day to day shouldn’t stop you seeing the world.</p>
                      <p>Your pre-existing medical conditions need to be covered on your <a href="/medical-travel-insurance/">medical travel insurance</a>, including <a href="/medical-travel-insurance/high-blood-pressure/" >high blood pressure</a>, <a href="/medical-travel-insurance/diabetes/">diabetes</a>, <a href="/medical-travel-insurance/cancer/">cancer</a>. If anything changes between taking out your policy and going on holiday, you must let us know.</p>
                    </div>
                  </div>
                </div>
                <div class="card" itemscope="" itemprop="mainEntity" itemtype="http://schema.org/Question">
                  <div class="card-header" id="questionHeading_4>">
                    <h5 class="collapsed" onclick="triggerGolbalGoogleEvents_Standard('Accordion Open', `Does Single Trip Insurance cover multiple destinations?`, this)" data-toggle="collapse" data-target="#question_4" aria-expanded="false" aria-controls="question_4" itemprop="name">
                      Does Single Trip Insurance cover multiple destinations?                                            <span class="arrow-icon"><img alt=" " data-src="https://wpdemo3.staysure.co.uk/wp-content/themes/staysure-wdr/assets/img/down-arrow.svg" class=" lazyloaded" src="https://wpdemo3.staysure.co.uk/wp-content/themes/staysure-wdr/assets/img/down-arrow.svg" /></span>
                    </h5>
                  </div>

                  <div id="question_4" class="collapse" aria-labelledby="questionHeading_4" data-parent="#whatCovered" itemscope="" itemprop="acceptedAnswer" itemtype="http://schema.org/Answer">
                    <div class="card-body" itemprop="text">
                      <p>You can travel to multiple destinations on a Single Trip Travel Insurance policy as long as each destination is listed on your policy. </p>
                      <p>Going to North America? You can travel between <a href="/worldwide-travel-insurance/canada/">Canada</a> and the <a href="/worldwide-travel-insurance/usa/">USA</a> on a Single Trip policy as long as you let us know. </p>
                    </div>
                  </div>
                </div>
                <div class="card" itemscope="" itemprop="mainEntity" itemtype="http://schema.org/Question">
                  <div class="card-header" id="questionHeading_5>">
                    <h5 class="collapsed" onclick="triggerGolbalGoogleEvents_Standard('Accordion Open', `How long can I travel for on a single trip policy?`, this)" data-toggle="collapse" data-target="#question_5" aria-expanded="false" aria-controls="question_5" itemprop="name">
                      How long can I travel for on a single trip policy?                                            <span class="arrow-icon"><img alt=" " data-src="https://wpdemo3.staysure.co.uk/wp-content/themes/staysure-wdr/assets/img/down-arrow.svg" class=" lazyloaded" src="https://wpdemo3.staysure.co.uk/wp-content/themes/staysure-wdr/assets/img/down-arrow.svg" /></span>
                    </h5>
                  </div>

                  <div id="question_5" class="collapse" aria-labelledby="questionHeading_5" data-parent="#whatCovered" itemscope="" itemprop="acceptedAnswer" itemtype="http://schema.org/Answer">
                    <div class="card-body" itemprop="text">
                      <p>You can spend up to 104 days abroad with our standard Single Trip policy — plenty of time to put your feet up. </p>
                      <p>For an even longer break, take a look at <a href="/long-stay-travel-insurance/">Long Stay Cover</a>, which lets you enjoy longer trips depending on your age and destination.</p>
                    </div>
                  </div>
                </div>
                <div class="card" itemscope="" itemprop="mainEntity" itemtype="http://schema.org/Question">
                  <div class="card-header" id="questionHeading_6>">
                    <h5 class="collapsed" onclick="triggerGolbalGoogleEvents_Standard('Accordion Open', `How far before my holiday can I buy my policy?`, this)" data-toggle="collapse" data-target="#question_6" aria-expanded="false" aria-controls="question_6" itemprop="name">
                      How far before my holiday can I buy my policy?                                            <span class="arrow-icon"><img alt=" " data-src="https://wpdemo3.staysure.co.uk/wp-content/themes/staysure-wdr/assets/img/down-arrow.svg" class=" lazyloaded" src="https://wpdemo3.staysure.co.uk/wp-content/themes/staysure-wdr/assets/img/down-arrow.svg" /></span>
                    </h5>
                  </div>

                  <div id="question_6" class="collapse" aria-labelledby="questionHeading_6" data-parent="#whatCovered" itemscope="" itemprop="acceptedAnswer" itemtype="http://schema.org/Answer">
                    <div class="card-body" itemprop="text">
                      <p>You can buy a policy from us up to 18 months before you travel, or up to 24 months if you’re eligible. </p>
                      <p>You should take out a policy as soon as you book your trip to make sure you’re covered for unforeseen events that might mean you have to cancel. </p>
                    </div>
                  </div>
                </div>
                <div class="card" itemscope="" itemprop="mainEntity" itemtype="http://schema.org/Question">
                  <div class="card-header" id="questionHeading_7>">
                    <h5 class="collapsed" onclick="triggerGolbalGoogleEvents_Standard('Accordion Open', `Which destinations can I get cover for?`, this)" data-toggle="collapse" data-target="#question_7" aria-expanded="false" aria-controls="question_7" itemprop="name">
                      Which destinations can I get cover for?                                            <span class="arrow-icon"><img alt=" " data-src="https://wpdemo3.staysure.co.uk/wp-content/themes/staysure-wdr/assets/img/down-arrow.svg" class=" lazyloaded" src="https://wpdemo3.staysure.co.uk/wp-content/themes/staysure-wdr/assets/img/down-arrow.svg" /></span>
                    </h5>
                  </div>

                  <div id="question_7" class="collapse" aria-labelledby="questionHeading_7" data-parent="#whatCovered" itemscope="" itemprop="acceptedAnswer" itemtype="http://schema.org/Answer">
                    <div class="card-body" itemprop="text">
                      <p>You should be covered in most destinations if the country you’re going to is safe to visit. </p>
                      <p>To check your destination is safe to visit, take a look at the <a href="https://www.gov.uk/foreign-travel-advice" target="_blank">FCDO’s travel advice</a>. The FCDO’s advice can change at any time, so make sure you check it’s safe to travel before you set off.</p>
                      <p>If the FCDO, <a href="https://www.who.int/travel-advice" target="_blank">World Health Organisation</a> or local authorities have advised against ‘all’ or ‘all but essential’ travel to your destination, then it won’t be safe for you to travel there. </p>
                      <p>If you travel against FCDO advice, your policy will become invalid and won’t cover you if you need to claim. Even if advice changes while you’re on holiday, you won’t be covered if your destination was listed as unsafe when you travelled.</p>
                    </div>
                  </div>
                </div>
                <div class="card" itemscope="" itemprop="mainEntity" itemtype="http://schema.org/Question">
                  <div class="card-header" id="questionHeading_8>">
                    <h5 class="collapsed" onclick="triggerGolbalGoogleEvents_Standard('Accordion Open', `What if I need to travel to Europe against FCDO advice?`, this)" data-toggle="collapse" data-target="#question_8" aria-expanded="false" aria-controls="question_8" itemprop="name">
                      What if I need to travel to Europe against FCDO advice?                                            <span class="arrow-icon"><img alt=" " data-src="https://wpdemo3.staysure.co.uk/wp-content/themes/staysure-wdr/assets/img/down-arrow.svg" class=" lazyloaded" src="https://wpdemo3.staysure.co.uk/wp-content/themes/staysure-wdr/assets/img/down-arrow.svg" /></span>
                    </h5>
                  </div>

                  <div id="question_8" class="collapse" aria-labelledby="questionHeading_8" data-parent="#whatCovered" itemscope="" itemprop="acceptedAnswer" itemtype="http://schema.org/Answer">
                    <div class="card-body" itemprop="text">
                      <p>You can take out our <a href="/fco-advice-travel-insurance/" target="_blank">European FCDO Travel Advice Extension</a> add-on. This lets you travel with cover even when the FCDO advises against ‘all but essential travel’. </p>
                      <p>74% of our customers paid less than £5 for this add-on to their European policy.**</p>
                    </div>
                  </div>
                </div>
                <div class="card" itemscope="" itemprop="mainEntity" itemtype="http://schema.org/Question">
                  <div class="card-header" id="questionHeading_9>">
                    <h5 class="collapsed" onclick="triggerGolbalGoogleEvents_Standard('Accordion Open', `When should I buy travel insurance?`, this)" data-toggle="collapse" data-target="#question_9" aria-expanded="false" aria-controls="question_9" itemprop="name">
                      When should I buy travel insurance?                                            <span class="arrow-icon"><img alt=" " data-src="https://wpdemo3.staysure.co.uk/wp-content/themes/staysure-wdr/assets/img/down-arrow.svg" class=" lazyloaded" src="https://wpdemo3.staysure.co.uk/wp-content/themes/staysure-wdr/assets/img/down-arrow.svg" /></span>
                    </h5>
                  </div>

                  <div id="question_9" class="collapse" aria-labelledby="questionHeading_9" data-parent="#whatCovered" itemscope="" itemprop="acceptedAnswer" itemtype="http://schema.org/Answer">
                    <div class="card-body" itemprop="text">
                      <p>You should buy a travel insurance policy as soon as you book your trip. Our Single Trip Travel Insurance covers you for cancellations as soon as you take out your policy.</p>
                    </div>
                  </div>
                </div>
                <div class="card" itemscope="" itemprop="mainEntity" itemtype="http://schema.org/Question">
                  <div class="card-header" id="questionHeading_10>">
                    <h5 class="collapsed" onclick="triggerGolbalGoogleEvents_Standard('Accordion Open', `Why is travel insurance important?`, this)" data-toggle="collapse" data-target="#question_10" aria-expanded="false" aria-controls="question_10" itemprop="name">
                      Why is travel insurance important?                                            <span class="arrow-icon"><img alt=" " data-src="https://wpdemo3.staysure.co.uk/wp-content/themes/staysure-wdr/assets/img/down-arrow.svg" class=" lazyloaded" src="https://wpdemo3.staysure.co.uk/wp-content/themes/staysure-wdr/assets/img/down-arrow.svg" /></span>
                    </h5>
                  </div>

                  <div id="question_10" class="collapse" aria-labelledby="questionHeading_10" data-parent="#whatCovered" itemscope="" itemprop="acceptedAnswer" itemtype="http://schema.org/Answer">
                    <div class="card-body" itemprop="text">
                      <p>Our travel insurance can help cover your holiday in the UK or abroad in case things go wrong unexpectedly, like cutting your holiday short, losing your baggage, or needing emergency medical help.</p>
                      <p>For example, if you have a medical emergency abroad, your travel insurance could save you thousands by covering the cost of your treatment. </p>
                    </div>
                  </div>
                </div>
                <div class="card" itemscope="" itemprop="mainEntity" itemtype="http://schema.org/Question">
                  <div class="card-header" id="questionHeading_11>">
                    <h5 class="collapsed" onclick="triggerGolbalGoogleEvents_Standard('Accordion Open', `Will my travel insurance cover the costs of COVID-19 testing?`, this)" data-toggle="collapse" data-target="#question_11" aria-expanded="false" aria-controls="question_11" itemprop="name">
                      Will my travel insurance cover the costs of COVID-19 testing?                                            <span class="arrow-icon"><img alt=" " data-src="https://wpdemo3.staysure.co.uk/wp-content/themes/staysure-wdr/assets/img/down-arrow.svg" class=" lazyloaded" src="https://wpdemo3.staysure.co.uk/wp-content/themes/staysure-wdr/assets/img/down-arrow.svg" /></span>
                    </h5>
                  </div>

                  <div id="question_11" class="collapse" aria-labelledby="questionHeading_11" data-parent="#whatCovered" itemscope="" itemprop="acceptedAnswer" itemtype="http://schema.org/Answer">
                    <div class="card-body" itemprop="text">
                      <p>Your travel insurance covers the cost of unexpected events and emergencies. COVID testing has become a routine procedure for many countries, so it isn’t covered by your travel insurance.</p>
                      <p>You can get <a href="/discover/discounted-covid-tests-with-staysure/">10% off COVID tests from Randox Health</a> with new travel insurance policies, though.</p>
                    </div>
                  </div>
                </div>
              </div>


              <a href="https://travelinsurance.staysure.co.uk/quote/policy-details" onclick="triggerGolbalGoogleEvents_Standard(`cta`, `People also asked`, this)" class="btn btn-secondary btn-bold mt-3"><i class="fas fa-caret-right"></i> Get Quote</a>
            </div>
            <div class="col-md-5 col-lg-3" id="7">
              <div class="border-box">
                <h5 class="title-smbd mb-4">Related Documents</h5>
                <a href="/policy-documents/travel-insurance/" rel="nofollow" class="link-underline mb-3">Policy Documents</a>

                <hr />
                <a href="/policy-documents/travel-insurance/" class="link-underline">Previous Versions</a>
              </div>
              <div class="border-box">
                <h5 class="title-smbd mb-3">Claims</h5>
                <p>Whenever you need us, our 24/7 claims team is here for you.</p>
                <a href="/claims/" class="link-underline">View claims information</a>

              </div>                </div>
          </div>
        </div>
      </section >
      </div>
    </>
  );
};

export default connect(Page);
