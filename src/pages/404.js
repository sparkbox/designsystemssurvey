import React from "react"

import Layout from "../components/2020/layout"
import SEO from '../components/SEO'

const NotFoundPage = () => (
  <Layout>
    <SEO
      image="ogimage-2020.jpg"
      year="2020"
    />
    <div className="util-background-color-primary util-width-full util-min-height-full util-display-flex util-align-center util-justify-center">
      <div className="cmp-site-header">
        <h1 className="util-visually-hidden">404 Error. Page not found.</h1>
        <div className="obj-content-width util-pad-vertical-lg util-pad-vertical-h2@md util-pad-vertical-h3@lg">
          <div>
            <svg width="212" height="56" viewBox="0 0 53 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 9.1v2h.6l1.1-2H3zm6.4-4a1 1 0 100-2h-.2l-1.1 2h1.3zM3 3v2.2L6.2 3H3zm6.5 6h-.3l-2.8 2h3c.6 0 1-.5 1-1 0-.6-.4-1-1-1zm3-2.3l-2.4 1.6c.7.3 1.1 1 1.1 1.7 0 1-.8 1.7-1.7 1.7H5.2l-3 2-.1-.1 1-1.9h-.8V8.4v-.1H6v.1l-1.7 3 5.9-4H0 0v-.1l2.2-1.5V2.4H7.4L9.6.7l1.2-.8.2.1-1.3 2.2c.8.1 1.5.9 1.5 1.8 0 1-.8 1.7-1.7 1.7H6.7v-.1l1.9-3.3-6.3 4.3h10.2l-.1.1zM19.5 4.9l-.6.6c-.3-.3-.6-.7-1-.7-.2 0-.5.3-.5.8 0 .4.2.8.8 1.1.8.6 1.3 1.1 1.3 2 0 1.1-.6 1.9-1.6 1.9-.8 0-1.3-.5-1.6-1l.6-.6c.3.4.6.7 1 .7s.6-.3.6-.8-.1-.8-.9-1.2c-.7-.5-1.2-1-1.2-2s.7-1.8 1.6-1.8c.8 0 1.3.6 1.5 1zM21 4h1.3C23.4 4 24 4.8 24 6c0 1.4-.7 2.2-1.8 2.2H22v2.2h-1V4zm1 3.3h.2c.6 0 1-.4 1-1.2 0-.7-.4-1.2-1-1.2H22v2.4zM27.4 9H26l-.3 1.5h-1L26.3 4h1l1.5 6.5h-1L27.4 9zm-1.2-.9h1l-.5-2.6-.5 2.6zM29.9 4H31c1.1 0 1.9.8 1.9 2 0 .8-.3 1.4-.7 1.7l1 2.8h-1.1L31.4 8h-.5v2.4h-1V4zm1 3.2h.1c.6 0 1-.4 1-1.2 0-.7-.4-1-1-1h-.1v2.2zM36 7.8l-.4.9v1.8h-1V4h1V7L37 4H38l-1.3 2.8 1.4 3.7H37l-1-2.7zM39.8 4h1.5c1 0 1.6.7 1.6 1.7 0 .6-.3 1.2-.7 1.4.5.2.8.8.8 1.5 0 1.1-.7 1.9-1.8 1.9h-1.4V4zm1 2.8h.4c.4 0 .7-.4.7-1s-.3-1-.7-1h-.5v2zm.4 2.8c.5 0 .8-.4.8-1s-.3-1-.8-1h-.5v2h.5zM46 10.6c-1.2 0-1.9-1.2-1.9-3.4 0-2.1.7-3.3 2-3.3 1.2 0 2 1.2 2 3.3 0 2.2-.8 3.4-2 3.4zm0-1c.6 0 1-.8 1-2.4 0-1.5-.4-2.3-1-2.3-.5 0-.8.8-.8 2.3 0 1.5.3 2.4.9 2.4zM50.3 7.2L49 4h1.1l.8 2.3.8-2.3h1l-1.2 3.3 1.3 3.2h-1.2L50.8 8l-.8 2.4h-1l1.3-3.3z" fill="white"/>
            </svg>
          </div>
          <h2 className="util-font-h1">We can't seem to find the page you're looking&nbsp;for.</h2>
          <p className="util-font-p-big">Were you looking for this year's Design Systems Survey results?</p>
          <p className="util-font-p-big">
            <a className="util-link-color-blue" href="/">Take Me to the Latest Results</a>
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
