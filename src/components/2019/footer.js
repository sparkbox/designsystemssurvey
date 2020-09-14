import React from "react"
import Dribbble from "./icon-dribbble"
import Facebook from "./icon-facebook"
import GitHub from "./icon-github"
import LinkedIn from "./icon-linkedin"
import Twitter from "./icon-twitter"
import YouTube from "./icon-youtube"

const Footer = () => (
  <footer className="obj-layout-max-width cmp-footer">
    <div className="cmp-footer__flex">
      <a className="cmp-footer__logo-link cmp-footer__item cmp-footer__item--third cmp-footer__order-sm-1" href="https://seesparkbox.com/">
        <svg className="cmp-footer__logo" width="158" height="173" viewBox="0 0 158 173" fill="none">
          <title>Seesparkbox.com</title>
          <path fillRule="evenodd" stroke="#FFF" strokeWidth="2" d="M130.2 125.9c0 6.4-5.2 11.6-11.7 11.6H79.8l34.8-23.3h3.9c6.5 0 11.7 5.2 11.7 11.7zm-91.6 11.6v-23.3H60L46 137.5h-7.5zm0-97h39.6L38.6 66.9V40.5zm79.8 0c6.6 0 11.8 5.2 11.8 11.6 0 6.4-5.2 11.6-11.7 11.6H101.6l13.9-23.2h2.9zM155.7 84H31l78-52-23.7 39.8-.2.6c0 .7.6 1.3 1.3 1.3H118.5c12 0 21.8-9.7 21.8-21.6 0-11-8.3-20-19-21.4l15.9-26.8.2-.7a1.2 1.2 0 0 0-2-1L120.7 12 93.1 30.6H29.8c-.6 0-1.2.6-1.2 1.2V73.7l-27 18c-.3.3-.6.7-.6 1.1 0 .7.6 1.3 1.3 1.3H127l-72 48 21.2-35.7c.2-.3.3-.5.3-.8 0-.6-.6-1.2-1.2-1.2H29.8c-.7 0-1.2.6-1.2 1.2v40.7c0 .7.5 1.2 1.2 1.2h10.4l-13.4 22.7c-.2.2-.2.4-.2.7a1.3 1.3 0 0 0 2 1l36.3-24.4h53.6c12 0 21.8-9.6 21.8-21.5 0-9-5.5-16.6-13.3-19.9l29.3-19.6c.4-.2.7-.7.7-1.1 0-.7-.6-1.3-1.3-1.3z"/>
        </svg>
      </a>
      <div className="cmp-footer__item cmp-footer__item--third cmp-footer__order-sm-2">
        <p className="cmp-footer__details-text">
          Assembled by your friends at <a href="https://seesparkbox.com/">Sparkbox</a>
        </p>
        <p className="cmp-footer__details-text">
          Check out this site on <a href="https://github.com/sparkbox/designsystemssurvey">Github</a>
        </p>
      </div>
      <div className="cmp-footer__item cmp-footer__item--third cmp-footer__order-sm-3">
        <p className="cmp-footer__details-text">
          The header artwork was created in collaboration with <a href="https://signalnoise.com">Signalnoise</a>
        </p>
      </div>
    </div>
    <div className="cmp-footer__flex cmp-footer__contact">
      <div className="cmp-footer__item">
        <h4 className="font-diagram-heading font-diagram-heading--footer">Email</h4>
        <div className="cmp-footer__contact-link-container">
          <a className="cmp-footer__contact-link" href="https://seesparkbox.com/work-with-us">/work-with-us</a>
        </div>
      </div>
      <div className="cmp-footer__item">
        <h4 className="font-diagram-heading font-diagram-heading--footer">Phone</h4>
        <div className="cmp-footer__contact-link-container">
          <a className="cmp-footer__contact-link" href="tel:19374010915" aria-label="937-401-0915">937 401 0915</a>
        </div>
      </div>
      <div className="cmp-footer__item">
        <h4 className="font-diagram-heading font-diagram-heading--footer">Address</h4>
        <p className="cmp-footer__address">123 Webster St.</p>
        <p className="cmp-footer__address">Studio 2</p>
        <div className="cmp-footer__address">
          <span className="cmp-footer__address">Dayton</span>,
          <abbr className="cmp-footer__address util-margin-lft025" title="Ohio">OH</abbr>
          <span className="cmp-footer__address util-margin-lft025">45402</span>
        </div>
      </div>
    </div>
    <div className="cmp-footer__flex cmp-footer__social">
      <p className="cmp-footer__copyright">©2019 Sparkbox. All rights reserved.</p>
      <ul className="cmp-footer__social-list">
        <li className="cmp-footer__social-item">
          <a className="cmp-footer__social-link" href="https://github.com/sparkbox">
            <GitHub />
          </a>
        </li>
        <li className="cmp-footer__social-item">
          <a className="cmp-footer__social-link" href="https://dribbble.com/sparkbox">
            <Dribbble />
          </a>
        </li>
        <li className="cmp-footer__social-item">
          <a className="cmp-footer__social-link" href="https://twitter.com/hearsparkbox">
            <Twitter />
          </a>
        </li>
        <li className="cmp-footer__social-item">
          <a className="cmp-footer__social-link" href="https://www.facebook.com/seesparkbox">
            <Facebook />
          </a>
        </li>
        <li className="cmp-footer__social-item">
          <a className="cmp-footer__social-link" href="https://www.youtube.com/channel/UCfsWcRy7Yh1WWDrrZS0Q7xw/">
            <YouTube />
          </a>
        </li>
        <li className="cmp-footer__social-item">
          <a className="cmp-footer__social-link" href="https://www.linkedin.com/company/sparkbox">
            <LinkedIn />
          </a>
        </li>
      </ul>
    </div>
  </footer>
)

export default Footer
