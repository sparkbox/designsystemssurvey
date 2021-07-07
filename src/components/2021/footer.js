import React from "react"

const Footer = () => (
  <>
  <hr/>
  <footer className="cmp-footer util-pad-vertical-lg">
    <div className="util-text-center util-margin-bottom-md util-margin-bottom-lg@md">
      <p className="cmp-footer__details-text util-margin-bottom-md">Assembled by your friends at <a href="https://sparkbox.com/">Sparkbox</a></p>
    </div>
  
    <nav className="cmp-footer__social" title="Sparkbox social media (external)">
      <ul className="cmp-footer__social-icons">
        <li className="cmp-footer__social-icon">
          <a href="https://twitter.com/hearsparkbox" className="cmp-footer__social-link cmp-footer__social-link--twitter">
            <span className="util-visually-hidden">Twitter</span>
          </a>
        </li>
        <li className="cmp-footer__social-icon">
          <a href="https://github.com/sparkbox" className="cmp-footer__social-link cmp-footer__social-link--github">
            <span className="util-visually-hidden">Github</span>
          </a>
        </li>
        <li className="cmp-footer__social-icon">
          <a href="https://dribbble.com/sparkbox" className="cmp-footer__social-link cmp-footer__social-link--dribbble">
            <span className="util-visually-hidden">Dribbble</span>
          </a>
        </li>
        <li className="cmp-footer__social-icon">
          <a href="https://www.facebook.com/seesparkbox" className="cmp-footer__social-link cmp-footer__social-link--facebook">
            <span className="util-visually-hidden">Facebook</span>
          </a>
        </li>
        <li className="cmp-footer__social-icon">
          <a href="https://www.youtube.com/channel/UCfsWcRy7Yh1WWDrrZS0Q7xw" className="cmp-footer__social-link cmp-footer__social-link--youtube">
            <span className="util-visually-hidden">Youtube</span>
          </a>
        </li>
        <li className="cmp-footer__social-icon">
          <a href="https://www.linkedin.com/company/sparkbox/mycompany/" className="cmp-footer__social-link cmp-footer__social-link--linkedin">
            <span className="util-visually-hidden">LinkedIn</span>
          </a>
        </li>
      </ul>
    </nav>

    <div className="cmp-footer__links util-margin-vertical-lg">
        <div className="util-display-inline-block@md util-margin-all-md util-margin-vertical-none@md">
          <a href="https://sparkbox.com/contact">Drop us a line</a>
        </div>
        <div className="util-display-inline-block@md util-margin-all-md util-margin-vertical-none@md">
          <a href="https://sparkbox.com/contact#careers">Careers</a>
        </div>
        <div className="util-display-inline-block@md util-margin-all-md util-margin-vertical-none@md">
          <a href="https://apprentices.seesparkbox.com">Apprenticeship</a>
        </div>
    </div>
    <p className="cmp-footer__copyright util-text-center">&copy;2021 Sparkbox. All rights reserved. <a href="https://sparkbox.com/privacypolicy">Privacy Policy</a> and <a href="https://sparkbox.com/terms">Terms of Use</a></p>
  </footer>
  </>
)

export default Footer