import React from "react"
import Helmet from "react-helmet"
import SEO from "../components/SEO"
import Demo from "../sections/2022/demo"

const Page2022 = () => {
  return (
    <>
      <SEO
        pageDescription="2022 Description"
        image="ogimage-2022.jpg"
        year="2022"
      />

      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          href="/css/2022.css"
          media="all and (-webkit-min-device-pixel-ratio: 0), (-moz-device-pixel-ratio: 0)"
        />
      </Helmet>

      <div className="obj-width-limiter">
        <Demo />
      </div>
    </>
  )
}

export default Page2022
