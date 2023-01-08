import React from 'react';
import style from "../../styles/Footer.module.css"

const Footer_new = () => {
  return (
    <div className={style.footer_container}>
        <div className={style.footer_child}>
          <h3 class="style__f16___7B4eA style__fweight500___oy16u">Know Us</h3>
          <ul>
            <li><a href="/aboutUs"><span>About Us</span></a></li>
            <li><a href="/contactUs"><span>Contact Us</span></a></li>
            <li><a href="/press-coverage"><span>Press Coverage</span></a></li>
            <li><a href="/jobs"><span>Careers</span></a></li>
            <li><a href="https://partners.1mg.com"><span>Business Partnership</span></a></li>
            <li><a href="/healthpartner"><span>Become a Health Partner</span></a></li>
            <li><a href="/corporategovernance"><span>Corporate Governance</span></a></li>
            </ul>
        </div>
        <div className={style.footer_child}>
          <h3 class="style__f16___7B4eA style__fweight500___oy16u">Our Policies</h3>
          <ul>
            <li><a href="/PrivacyPolicy"><span>Privacy Policy</span></a></li>
            <li><a href="/Tnc"><span>Terms and Conditions </span></a></li>
            <li><a href="/editorial-policy-processes"><span>Editorial Policy</span></a></li>
            <li><a href="/return-policy"><span>Return Policy</span></a></li>
            <li><a href="/ip-policy"><span>IP Policy</span></a></li>
            <li><a href="/grievance-redressal-policy"><span>Grievance Redressal Policy</span></a></li>
            <li><a href="/FakeJobsAndFraudDisclaimer"><span>Fake Jobs and Fraud Disclaimer</span></a></li>
          </ul>
        </div>
        <div className={style.footer_child}>
          <h3 class="style__f16___7B4eA style__fweight500___oy16u">Our Services</h3>
          <ul>
            <li><a href="/"><span>Order Medicines</span></a></li>
            <li><a href="/labs"><span>Book Lab Tests</span></a></li>
            <li><a href="/online-doctor-consultation"><span>Consult a Doctor</span></a></li>
            <li><a href="/ayurveda"><span>Ayurveda Articles</span></a></li>
            <li><a href="/hi/patanjali"><span>Hindi Articles</span></a></li>
            <li><a href="/subscription-plan/subscriptions"><span>Care Plan</span></a></li>
          </ul>
        </div>
        <div className={style.footer_child}>
          <h3 class="style__f16___7B4eA style__fweight500___oy16u">Connect</h3>
          <ul>
            <li><span class="style__s-head___367TK">Social Links</span></li>
            <li className={style.social_icons}>
              <a href="https://www.facebook.com/1mgOfficial" alt="Facebook" ><div class="facebook"><img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="" /></div></a>
              <a href="https://www.instagram.com/1mgofficialpage/" alt="Instagram"><div class="instagram"> <img src="https://toppng.com/uploads/preview/instagram-new-vector-logo-color-download-11573951803kylml5wdmi.png"/></div></a>
              <a href="https://twitter.com/1mgofficial" alt="Twitter" ><div class="twitter"><img src="https://cdn-icons-png.flaticon.com/512/124/124021.png" alt=""/></div></a>
              <a href="https://www.youtube.com/c/1mgofficial" alt="You Tube" ><div class="youtube"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="" /></div></a>
              <a href="https://www.linkedin.com/company/1mg" alt="Linkedin" ><div class="linkedin"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" /></div></a>
              <a href="https://medium.com/1mgofficial" alt="Medium Link" ><div class="medium"><img src="https://cdn-icons-png.flaticon.com/512/5968/5968906.png" alt="" /></div></a>
            </li>
            <li><span class="style__grey-txt___2FAow">Want daily dose of health?</span></li>
            <li><button className={style.signup_btn}>SIGN UP</button></li>
          </ul>
        </div>
        <div>
          <h5>Download App</h5>
          <ul>
            <li>
              <a href="https://play.google.com/store/apps/details?id=com.aranoah.healthkart.plus"><div class="google_play style__m12___25Let"></div></a>
            </li>
            <li>
              <a href="https://itunes.apple.com/in/app/1mg/id554578419?mt=8"><div class="apple_store"></div></a>
            </li>
          </ul>
        </div>

    </div>
  )
}

export default Footer_new;