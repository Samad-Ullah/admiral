import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../Assets/logo-header.svg";

const BottomFooter = () => {
  return (
    <div className="footer_parenbt">
      <div className="container">
        <div className="main_footer">
          <footer>
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="footer_logo">
                  <Image src={Logo} alt="..12" loading="lazy" />
                </div>
                <div className="social_links">
                  <ul>
                    <li>
                      <Link href="https://www.facebook.com/AAdmirals">
                        <a>
                          <i className="fa fa-facebook"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://twitter.com/AAdmiralsTravel">
                        <a>
                          <i className="fa fa-twitter"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://wa.me/13468574294">
                        <a>
                          <i className="fa fa-whatsapp"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.linkedin.com/company/aadmirals-group-inc">
                        <a>
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.yelp.com/biz/aadmirals-travel-and-transportation-houston-2">
                        <a>
                          <i className="fa fa-suitcase"></i>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="useful_contact col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="header_name">
                  <h3>Useful Links</h3>
                </div>
                <div className="links_footer">
                  <ul>
                    <li>
                      <Link href="/">
                        <a>Home</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/login">
                        <a>Login</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/FAQ">
                        <a>FAQs</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/about-us">
                        <a>About</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/fleet">
                        <a>fleet</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/sitemap">
                        <a>sitemap</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="useful_contact2 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="header_name">
                  <h3>Contact Us</h3>
                </div>
                <div className="links_footer">
                  <ul>
                    <li>
                      <Link href="">
                        <a>
                          <i
                            className="fa fa-map-marker"
                            aria-hidden="true"></i>{" "}
                          8222 Kingsbrook Rd , Houston, TX 77024
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="">
                        <a>
                          <i
                            className="fa fa-map-marker"
                            aria-hidden="true"></i>{" "}
                          17103 Imperial Valley Dr, Houston, TX 77060
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="mailto:info@aadmirals.com">
                        <a>
                          <i className="fa fa-envelope" aria-hidden="true"></i>{" "}
                          info@aadmirals.com
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>
                          <i className="fa fa-globe" aria-hidden="true"></i>{" "}
                          aadmirals.com
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <div className="sub-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 text-center">
              <p className="copy">
                Est 2013 All Rights Reserved©{" "}
                <Link href="/">
                  <a> AAdmirals Group,INC</a>
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
