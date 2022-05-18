import React from "react"
import Helmet from "react-helmet"
import SEO from "../components/SEO"
import Hero from "../components/2022/hero"

const Page2022 = () => {
  return (
    <>
      <SEO
        pageDescription="2022 Description"
        image="ogimage-2022.jpg"
        year="2022"
      />

      <Helmet>
        <link rel="preload" as="font" href="https://assets.sparkbox.com/fonts/sole/sole-sans-vf-regular-extra-condensed/font.woff2" type="font/woff2" crossorigin="anonymous" />
        <link rel="preload" as="font" href="https://assets.sparkbox.com/fonts/sole/sole-serif-hairline/font.woff2" type="font/woff2" crossorigin="anonymous" />
        <link
          rel="stylesheet"
          type="text/css"
          href="/css/2022.css"
          media="all and (-webkit-min-device-pixel-ratio: 0), (-moz-device-pixel-ratio: 0)"
        />
      </Helmet>

      <Hero />
    </>
  )
}

export default Page2022
