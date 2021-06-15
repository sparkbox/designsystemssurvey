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
          <h1 className="cmp-type-hero">Design Systems Survey</h1>
          <h2 className="cmp-type-section">Section Title</h2>
          <h2>Heading Level Two</h2>
          <h3>Heading Level Three</h3>
          <p clasName="cmp-type-large">Large Body Type. Lorem ipsum dolor sit amet consectetur adipiscing elit porttitor nam, maecenas nullam posuere ornare leo lacinia fermentum tempor habitasse donec, eget aliquet volutpat felis hac nec proin torquent. Ornare varius primis neque id fringilla felis penatibus nullam eget, facilisis aliquam condimentum sociosqu volutpat molestie maecenas. Ligula condimentum nam ac lacinia sociosqu ornare elementum odio, nec mollis luctus parturient enim senectus quam, et vitae orci torquent litora dui turpis. Eros praesent euismod sed etiam non bibendum imperdiet nulla, conubia risus proin lobortis faucibus ut phasellus suspendisse ornare, quam at lectus taciti nostra fusce vehicula.</p>
          <p>Default Body Type. Lorem ipsum dolor sit amet consectetur adipiscing elit curae dapibus, maecenas pretium quis eu leo magnis nunc consequat, tempor etiam mollis penatibus feugiat volutpat arcu porttitor. Class venenatis purus orci volutpat facilisi primis vitae leo, dui sociosqu pharetra dictumst ipsum molestie taciti, nec mollis condimentum nascetur ante turpis felis. Accumsan in cubilia ornare pulvinar imperdiet litora, neque luctus cras laoreet convallis non arcu, sagittis sapien conubia lobortis commodo. Convallis rutrum accumsan eu varius taciti porta in, per donec metus facilisi libero dictumst dignissim, posuere dapibus auctor nostra mauris augue. Habitasse ornare at est placerat mattis phasellus proin, id felis justo taciti hendrerit ac malesuada tortor, nascetur turpis dignissim suspendisse consectetur hac. A gravida congue mus integer suscipit, ullamcorper sociis porta ridiculus.</p>
          <p className="cmp-type-sans-micro">Lorem ipsum dolor sit amet</p>
          <p className="cmp-type-mono-micro">Feugiat volutpat arcu porttitor</p>
        </main>
      </Layout>
    )
  }
} 

export default Page2021
