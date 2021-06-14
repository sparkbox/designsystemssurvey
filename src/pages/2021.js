import React, { Component } from "react"
import Layout from '../components/2021/layout'
import SEO from '../components/SEO'


class Page2021 extends Component {
  render () {
    return (
      <Layout>  
        <SEO
          pageDescription="These survey results explore the challenges of a design system, from planning and managing changes to organizational adoption. They examine what makes a mature design system that positively impacts the team."
          image="ogimage-2021.png"
          year="2021"
        />
        <main>
         <h1>2021</h1>
        </main>
      </Layout>
    )
  }
} 

export default Page2021
