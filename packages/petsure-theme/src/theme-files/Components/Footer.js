
import { connect } from "frontity";
import React from "react";

const Footer = ({ state }) => {

    return (
        <>
            <footer class="sitefooter">
                <div class="sitefooter__smallprint">
                    <div class="wrapper">
                        <div class="footer-navigation" style={{marginTop:"1.5em"}}>
                            <div class="footer-nav-col">
                                <ul>
                                    <li><a href="/why-staysure/">Why Staysure</a></li>
                                    <li><a href="/affiliates/">Affiliates</a></li>
                                    <li><a href="/privacy-policy/">Privacy Policy</a></li>
                                    <li><a href="/complaints/">Complaints</a></li>
                                </ul>
                            </div>
                            <div class="footer-nav-col">
                                <ul>
                                    <li><a href="/terms-and-conditions/">Terms and Conditions</a></li>
                                    <li><a href="/cookie-policy/">Cookie Policy</a></li>
                                    <li><a href="/accessibility/">Accessibility</a></li>
                                    <li><a href="/category/press-releases/">Press Centre</a></li>
                                    <li><a href="/modern-slavery/">Modern Slavery Statement</a></li>
                                </ul>
                            </div>
                            <div class="footer-nav-col" style={{marginRight:"0"}}>
                                <ul>
                                    <li><a href="/policy-documents/travel-insurance/">Policy-Documents</a></li>
                                    <li><a href="/terms-of-business/">Terms of Business</a></li>
                                    <li><a href="/claims/">Claims</a></li>
                                    <li><a href="https://www.howserv.co.uk/" onclick="triggerGolbalGoogleEvents_Standard(`Careers`, `Footer`, this)">Careers</a></li>
                                    <li><a href="/gender-pay-gap-summary/">Gender Pay Gap Report</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="footer-social-media" style={{marginTop:"1em"}}>
                            <ul>
                                <li><a href="https://www.facebook.com/Staysure/" onclick="triggerGolbalGoogleEvents_Standard(`Like on Facebook`, `Footer`, this)"><i class="fab fa-facebook"></i> Like us on Facebook</a></li>
                                <li><a href="https://twitter.com/staysure" onclick="triggerGolbalGoogleEvents_Standard(`Follow on Twitter`, `Footer`, this)"><i class="fab fa-twitter"></i> Follow us on Twitter</a></li>
                                <li><a href="https://www.instagram.com/staysuretravelinsurance/" onclick="triggerGolbalGoogleEvents_Standard(`Follow on Instagram`, `Footer`, this)"><i class="fab fa-instagram"></i> Follow us on Instagram</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="legal-footer">
                        <div class="wrapper">
                            <p><small>Staysure is a trading name of TICORP Limited. Staysure Travel Insurance is arranged by TICORP Limited which is registered in Gibraltar company number 111526. Registered ofﬁce: First Floor, Grand Ocean Plaza, Ocean Village, Gibraltar. TICORP Limited is authorised and regulated by the Gibraltar Financial Services Commission and trades into the UK on a freedom of services basis, Financial Conduct Authority FRN 663617.<br />Staysure Travel Insurance is administered by Howserv Limited which is registered in England and Wales number 03882026. Registered office: Britannia House, 3-5 Rushmills Business Park, Bedford Road, Northampton, NN4 7YB. Howserv Limited is authorised and regulated by the Financial Conduct Authority FRN 599282.</small></p>
                            <p style={{fontSize:"0.8em"}}>We are remunerated by commission for the arrangement, service and renewal of your insurance policy. Also, for some of our insurers we may receive a profit share payment if they achieve performance targets across their product portfolio.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default connect(Footer);