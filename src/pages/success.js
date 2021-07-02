import React, { Component } from "react"
import Layout from '../components/2021/layout'
import SEO from '../components/SEO'

class SuccessPage extends Component {
  render () {
    return (
      <Layout>
        <SEO
          pageDescription="Page Not Found"
          image="ogimage-2021.png"
          year="2021"
        />

        <div className="obj-lines util-height-full">
          <h1>Submitted Form!</h1>
        </div>

      </Layout>
    )
  }
}

export default SuccessPage

