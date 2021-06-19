import React, { Component } from "react"
import Layout from '../components/2021/layout'
import SEO from '../components/SEO'

import Section1 from '../sections/2021/section-1'
import Section2 from '../sections/2021/section-2'
import Section3 from '../sections/2021/section-3'
import Section4 from '../sections/2021/section-4'
import Section5 from '../sections/2021/section-5'
import Section6 from '../sections/2021/section-6'

class Page2021 extends Component {
  render () {
    return (
      <Layout>  
        <SEO
          pageDescription="These survey results explore the challenges of a design system, from planning and managing changes to organizational adoption. They examine what makes a mature design system that positively impacts the team."
          image="ogimage-2021.png"
          year="2021"
        />
        <div className="obj-lines obj-max-width" htmlStyle="padding: 10vh 0;">
          
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />
          
        </div>
      </Layout>
    )
  }
} 

export default Page2021
