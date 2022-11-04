
import { connect } from "frontity";
import React from "react";

const Header = ({ state }) => {


    return (
        <>
            <div id="navbar" class="wrapper sticky-header" style={{ paddingTop: "37px" }}>

                <header class="siteheader clearfix home-page-header" itemscope="" itemtype="https://schema.org/brand">
                    <div class="masthead">

                        <a id="mainLogo" class="main_logo" href="https://wpdemo3.staysure.co.uk/" itemprop="url">
                            <picture>
                                <source media="(max-width: 480px)" srcset="https://wpdemo3.staysure.co.uk/wp-content/themes/staysure-wdr/assets/img/staysure-logo-nostrapline.svg" />
                                <source media="(min-width: 480.1px)" srcset="https://wpdemo3.staysure.co.uk/wp-content/themes/staysure-wdr/assets/img/staysure-logo-strapline.svg" />
                                <img itemprop="logo" class="logo lazyloaded" data-src="https://wpdemo3.staysure.co.uk/wp-content/themes/staysure-wdr/assets/img/staysure-logo-strapline.svg" alt="Staysure" src="https://wpdemo3.staysure.co.uk/wp-content/themes/staysure-wdr/assets/img/staysure-logo-strapline.svg" />
                            </picture>
                        </a>
                        <div class="mobile-menu">
                            <a href="https://my.staysure.co.uk/signin" class="btn-my-staysure"><i class="fa fa-user"></i></a>
                        </div>
                        <div class="callus" style={{display: "inline-block"}}>
                            <div id="contactDiv" class="callus-wrapper">
                                <div class="callus" style={{display: "inline-block"}}>
                                    <div class="callus__title">Sales Team</div>
                                    <div class="callus__tel"><a class="callus__tel_no" href="tel:0800 033 4903">0800 033 4903</a></div>
                                    <div class="callus__tagline">
                                        <a class="callus__viewtimes"><i class="fa fa-caret-right"></i> Opening times</a>
                                        <div class="callus__opentimes">
                                            <p class="callus__title">Telephone Hours</p>
                                            <ul>
                                                <li>Mon - Fri: 8:30am - 8pm</li>
                                                <li>Sat: 9am - 5:30pm</li>
                                                <li>Sun: 10am - 4pm</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="callus" style={{display: "inline-block"}}>
                                    <div class="callus__title">Customer Services</div>
                                    <div class="callus__tel"><a class="callus__tel_no" href="tel:01604552925">01604 552925</a></div>
                                    <div class="callus__tagline"><a class="callus__viewtimes"><i class="fa fa-caret-right"></i> Opening times</a>
                                        <div class="callus__opentimes">
                                            <p class="callus__title">Telephone Hours</p>
                                            <ul>
                                                <li>Mon - Fri: 8:30am - 8pm</li>
                                                <li>Sat: 9am - 5:30pm</li>
                                                <li>Sun: 10am - 4pm</li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="header_get_quote" id="getQuoteBtn">
                            <span>Be covered in minutes</span>
                            <a href="https://travelinsurance.staysure.co.uk/quote/policy-details" onclick="triggerGolbalGoogleEvents_Standard(`cta`, `Header`, this)" class="btn-get-quote"><i class="fa fa-caret-right"></i> Get Quote</a>
                            <a href="https://my.staysure.co.uk/signin" onclick="triggerGolbalGoogleEvents_Standard(`cta`, `Header`, this)" class="btn-my-staysure"><i class="fa fa-user"></i> My Staysure</a>
                        </div>
                    </div>
                    <nav>
                        <ul id="menu-header" class="nav__list" style={{ display: "flex" }}>

                            <li class="nav__item nav__item--dropdown"><a href="/single-trip-travel-insurance/" class="nav__link dropdown__trigger">Travel Insurance</a>
                                <ul class="dropdown__menu">
                                    <li class="dropdown__item"><a href="/single-trip-travel-insurance/" class="nav__link">Single Trip Travel Insurance</a></li>
                                    <li class="dropdown__item"><a href="/annual-travel-insurance/" class="nav__link">Annual Travel Insurance</a></li>
                                    <li class="dropdown__item"><a href="https://wpdemo3.staysure.co.uk/medical-travel-insurance/" class="nav__link">Medical Travel Insurance</a></li>
                                    <li class="dropdown__item"><a title="Coronavirus Travel Insurance" href="https://wpdemo3.staysure.co.uk/coronavirus-travel-insurance/" class="nav__link">Coronavirus Travel Insurance</a></li>
                                    <li class="dropdown__item"><a href="https://wpdemo3.staysure.co.uk/worldwide-travel-insurance/" class="nav__link">Worldwide Travel Insurance</a></li>
                                    <li class="dropdown__item"><a href="https://wpdemo3.staysure.co.uk/europe-travel-insurance/" class="nav__link">Europe Travel Insurance</a></li>
                                    <li class="dropdown__item"><a href="https://wpdemo3.staysure.co.uk/uk-travel-insurance/" class="nav__link">UK Travel Insurance</a></li>
                                    <li class="dropdown__item"><a href="https://wpdemo3.staysure.co.uk/long-stay-travel-insurance/" class="nav__link">Long Stay Travel Insurance</a></li>
                                    <li class="dropdown__item"><a href="https://wpdemo3.staysure.co.uk/cruise-travel-insurance/" class="nav__link">Cruise Travel Insurance</a></li>
                                    <li class="dropdown__item"><a href="https://wpdemo3.staysure.co.uk/winter-sports-travel-insurance/" class="nav__link">Winter Sports Travel Insurance</a></li>
                                    <li class="dropdown__item"><a href="https://wpdemo3.staysure.co.uk/over-50-travel-insurance/" class="nav__link">Over 50s Travel Insurance</a></li>
                                </ul>
                            </li>
                            <li class="nav__item"><a href="/products/" class="nav__link">Other Products</a></li>
                            <li class="nav__item"><a href="https://wpdemo3.staysure.co.uk/why-staysure/" class="nav__link">Why Staysure</a></li>
                            <li class="nav__item"><a href="https://wpdemo3.staysure.co.uk/claims/" class="nav__link">Claims</a></li>
                            <li class="nav__item"><a href="/category/lifestyle/" class="nav__link">Lifestyle</a></li>
                            <li class="nav__item nav__item--dropdown"><a href="https://wpdemo3.staysure.co.uk/contact-us/" class="nav__link dropdown__trigger">Help</a>
                                <ul class="dropdown__menu">
                                    <li class="dropdown__item"><a href="https://wpdemo3.staysure.co.uk/contact-us/" class="nav__link">Contact us</a></li>
                                </ul>
                            </li>

                        </ul>
                    </nav>
                </header>
            </div>
        </>
    );
};

export default connect(Header);