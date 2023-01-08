import React from "react";
import style from "../../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={style.footer_parent}>
      <div className={style.footer_container}>
        <div className={style.footer_child}>
          <h3>Know Us</h3>
          <ul>
            <p>
              <a href="#">
                <span>About Us</span>
              </a>
            </p>
            <p>
              <a href="#">
                <span>Contact Us</span>
              </a>
            </p>
            <p>
              <a href="#">
                <span>Press Coverage</span>
              </a>
            </p>
            <p>
              <a href="#">
                <span>Careers</span>
              </a>
            </p>
            <p>
              <a href="https://partners.1mg.com">
                <span>Business Partnership</span>
              </a>
            </p>
            <p>
              <a href="#">
                <span>Become a Health Partner</span>
              </a>
            </p>
            <p>
              <a href="#">
                <span>Corporate Governance</span>
              </a>
            </p>
          </ul>
        </div>
        <div className={style.footer_child}>
          <h3>Our Popcies</h3>
          <ul>
            <p>
              <a href="#">
                <span>Privacy Popcy</span>
              </a>
            </p>
            <p>
              <a href="#">
                <span>Terms and Conditions </span>
              </a>
            </p>
            <p>
              <a href="#">
                <span>Editorial Popcy</span>
              </a>
            </p>
            <p>
              <a href="#">
                <span>Return Popcy</span>
              </a>
            </p>
            <p>
              <a href="#">
                <span>IP Popcy</span>
              </a>
            </p>
            <p>
              <a href="#">
                <span>Grievance Redressal Popcy</span>
              </a>
            </p>
            <p>
              <a href="#">
                <span>Fake Jobs and Fraud Disclaimer</span>
              </a>
            </p>
          </ul>
        </div>
        <div className={style.footer_child}>
          <h3>Our Services</h3>
          <ul>
            <p>
              <a href="#">
                <span>Order Medicines</span>
              </a>
            </p>
            <p>
              <a href="#">
                <span>Book Lab Tests</span>
              </a>
            </p>
            <p>
              <a href="#">
                <span>Consult a Doctor</span>
              </a>
            </p>
            <p>
              <a href="#">
                <span>Ayurveda Articles</span>
              </a>
            </p>
            <p>
              <a href="#">
                <span>Hindi Articles</span>
              </a>
            </p>
            <p>
              <a href="#">
                <span>Care Plan</span>
              </a>
            </p>
          </ul>
        </div>
        <div className={style.footer_child}>
          <h3>Connect</h3>
          <ul>
            <p>
              <span>Social pnks</span>
            </p>
            <p className={style.social_icons}>
              <a href="https://www.facebook.com/1mgOfficial" alt="Facebook">
                <div>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
                    alt=""
                  />
                </div>
              </a>
              <a
                href="https://www.instagram.com/1mgofficialpage/"
                alt="Instagram"
              >
                <div>
                  {" "}
                  <img src="https://toppng.com/uploads/preview/instagram-new-vector-logo-color-download-11573951803kylml5wdmi.png" />
                </div>
              </a>
              <a href="https://twitter.com/1mgofficial" alt="Twitter">
                <div>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/124/124021.png"
                    alt=""
                  />
                </div>
              </a>
              <a href="https://www.youtube.com/c/1mgofficial" alt="You Tube">
                <div>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
                    alt=""
                  />
                </div>
              </a>
              <a href="https://www.pnkedin.com/company/1mg" alt="pnkedin">
                <div>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                    alt=""
                  />
                </div>
              </a>
              <a href="https://medium.com/1mgofficial" alt="Medium pnk">
                <div>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/5968/5968906.png"
                    alt=""
                  />
                </div>
              </a>
            </p>
            <p>
              <span>Want daily dose of health?</span>
            </p>
            <p>
              <button className={style.signup_btn}>SIGN UP</button>
            </p>
          </ul>
        </div>
        <div className={style.footer_child}>
          <h5>Download App</h5>
          <ul>
            <p>
              <a href="https://play.google.com/store/apps/details?id=com.aranoah.healthkart.plus">
                <div className={style.download_icon}>
                  <img
                    src="https://pay.google.com/about/static_kcs/images/icons/playstore/badge@en_us.png"
                    alt=""
                  />
                </div>
              </a>
            </p>
            <p>
              <a href="https://itunes.apple.com/in/app/1mg/id554578419?mt=8">
                <div className={style.download_icon}>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png"
                    alt=""
                  />
                </div>
              </a>
            </p>
          </ul>
        </div>
      </div>
      <hr />
      <div className={style.container}>
        <div className={style.reliable_container}>
          <div>
            <img
              src="https://onemg.gumlet.io/secure-rebrand_x6f8yq.svg"
              alt=""
            />
          </div>
          <div className={style.reliable_wrapper}>
            <h5>Reliable</h5>
            <p>
              All products displayed on Tata 1mg are procured from verified and
              licensed pharmacies. All labs listed on the platform are
              accredited
            </p>
          </div>
        </div>
        <div className={style.reliable_container}>
          <div>
            <img
              src="https://onemg.gumlet.io/reliable-rebrand_rcpof3.svg"
              alt=""
            />
          </div>
          <div className={style.reliable_wrapper}>
            <h5>Secure</h5>
            <p>
              Tata 1mg uses Secure Sockets Layer (SSL) 128-bit encryption and is
              Payment Card Industry Data Security Standard (PCI DSS) compliant
            </p>
          </div>
        </div>
        <div className={style.reliable_container}>
          <div>
            <img
              src="https://onemg.gumlet.io/affordable-rebrand_ivgidq.svg"
              alt=""
            />
          </div>
          <div className={style.reliable_wrapper}>
            <h5>Affordable</h5>
            <p>
              Find affordable medicine substitutes, save up to 50% on health
              products, up to 80% off on lab tests and free doctor
              consultations.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className={style.footerend_container}>
        <div className={style.footerend}>
          <a
            href="https://legitscript.com"
            target="_blank"
            title="Verify LegitScript Approval"
          >
            <img
              src="https://static.legitscript.com/seals/729605.png"
              alt="LegitScript approved"
              width="140"
              height="100"
              border="0"
            />
          </a>
          <img
            alt='We are certified "ISO/IEC 27001:2013"'
            src="https://onemg.gumlet.io/URS_ebgmxc.png"
            title='We are certified "ISO/IEC 27001:2013"'
          ></img>
        </div>
        <h3>
          India's only LegitScript and ISO/ IEC 27001 certified online
          healthcare platform
        </h3>
      </div>
    </div>
  );
};

export default Footer;
