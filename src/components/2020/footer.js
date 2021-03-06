import React from "react"
import AnchorLink from 'react-anchor-link-smooth-scroll'

const SiteFooter = ({animate}) => (
  <footer className="cmp-footer vcard">
    <div className={animate ? 'obj-footer cmp-fade-up js-watch' : 'obj-footer'} data-animate="cmp-fade-up--animate">
      <div className="util-text-center">
        <div aria-hidden="true" className="cmp-footer__logo org"><span className="util-visually-hidden">Sparkbox</span></div>
        <p className="util-font-p util-text-center">Assembled by your friends at <a href="https://sparkbox.com/" className="util-link url">Sparkbox</a>.</p>
      </div>
      <hr className="cmp-hr-blue util-margin-vertical-lg util-width-full" />
      <div className="obj-grid">
        <div className="obj-grid__full obj-grid__half@md obj-grid__third@lg">
          <h3 className="util-font-h4">Email</h3>
          <p className="util-font-p util-weight-700">
            <a href="https://sparkbox.com/contact" className="util-link url">/contact</a>
          </p>
        </div>
        <div className="obj-grid__full obj-grid__half@md obj-grid__third@lg">
          <h3 className="util-font-h4">Phone</h3>
          <p className="util-font-p util-weight-700">
            <a href="tel:+19374010915﻿" className="util-link tel">937 401 0915﻿</a>
          </p>
        </div>
        <div className="obj-grid__full obj-grid__half@md obj-grid__third@lg util-justify-end">
          <div className="cmp-footer__social-icons">
            <a href="https://twitter.com/hearsparkbox" className="cmp-footer__social-icon cmp-footer__social-icon--twitter url">
              <span className="util-visually-hidden">Twitter</span>
            </a>
            <a href="https://github.com/sparkbox" className="cmp-footer__social-icon cmp-footer__social-icon--github url">
              <span className="util-visually-hidden">GitHub</span>
            </a>
            <a href="https://codepen.io/team/sparkbox" className="cmp-footer__social-icon cmp-footer__social-icon--codepen url">
              <span className="util-visually-hidden">CodePen</span>
            </a>
            <a href="https://dribbble.com/sparkbox" className="cmp-footer__social-icon cmp-footer__social-icon--dribbble url">
              <span className="util-visually-hidden">Dribbble</span>
            </a>
            <a href="https://www.facebook.com/seesparkbox" className="cmp-footer__social-icon cmp-footer__social-icon--facebook url">
              <span className="util-visually-hidden">Facebook</span>
            </a>
            <a href="https://www.youtube.com/channel/UCfsWcRy7Yh1WWDrrZS0Q7xw" className="cmp-footer__social-icon cmp-footer__social-icon--youtube url">
              <span className="util-visually-hidden">YouTube</span>
            </a>
          </div>
        </div>
      </div>

      <p className="util-font-p util-weight-700 util-margin-vertical-x1">&copy;2020 Sparkbox. All rights reserved.</p>
      <hr className="cmp-hr-blue util-margin-vertical-lg util-width-full" />
      <p className="util-font-p util-text-center"><AnchorLink href="#top">Back to the Top</AnchorLink></p>
    </div>
  </footer>
)

export default SiteFooter
