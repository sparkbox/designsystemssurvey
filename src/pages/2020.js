import React from "react"
import Layout from "../components/2020/layout"
import SEO from '../components/2020/SEO'
import SiteFooter from '../components/2020/footer'
import IntroSection from "../sections/2020/intro"
import TableOfContents from "../sections/2020/table-of-contents"
import RespondentsSection from "../sections/2020/respondents"
import InHouseSection from "../sections/2020/in-house"
import ChallengesSection from "../sections/2020/challenges"
import MaturitySection from "../sections/2020/maturity"
import CultureSection from "../sections/2020/culture"
import ConclusionSection from "../sections/2020/conclusion"
import NewsletterSection from "../sections/2020/newsletter"

const Page2020 = () => (
  <Layout>
    <SEO
      image="ogimage-2020.jpg" 
      year="2020"
    />
    <IntroSection />
    <main>
      <TableOfContents />
      <section className="cmp-respondents" id="respondents">
        <RespondentsSection />
      </section>
      <section className="cmp-in-house" id="in-house">
        <InHouseSection />
      </section>
      <section className="cmp-challenges" id="challenges">
        <ChallengesSection />
      </section>
      <section className="cmp-maturity" id="maturity">
        <MaturitySection />
      </section>
      <section className="cmp-culture" id="culture">
        <CultureSection />
      </section>
      <section className="cmp-conclusion" id="conclusion">
        <ConclusionSection />
      </section>
      <div aria-hidden="true" className="obj-max-width">
        <hr />
      </div>
      <section id="newsletter">
        <NewsletterSection />
      </section>
    </main>
    <SiteFooter />
  </Layout>
)

export default Page2020
