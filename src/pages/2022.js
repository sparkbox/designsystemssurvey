import React from "react"
import Helmet from "react-helmet"
import SEO from "../components/SEO"

const Page2022 = () => {
  return (
    <div>
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

      <h1>Future home of the 2022 Design Systems Survey</h1>
    </div>
  )
}

export default Page2022
