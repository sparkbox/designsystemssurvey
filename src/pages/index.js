import React from "react"

import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"
import IntroSection from "../sections/intro"
import TableOfContents from "../components/table-of-contents"
import Section1 from "../sections/section-1"
import Section2 from "../sections/section-2"
import Section3 from "../sections/section-3"
import Section4 from "../sections/section-4"
import Section5 from "../sections/section-5"

const IndexPage = () => (
  <Layout>
    <IntroSection />
    <TableOfContents />
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
  </Layout>
)

export default IndexPage
