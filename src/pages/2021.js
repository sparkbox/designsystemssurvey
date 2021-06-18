import React, { Component } from "react"
import Layout from '../components/2021/layout'
import SEO from '../components/SEO'
import Grid from '../components/2021/grid'
import GridCell from '../components/2021/grid-cell'


class Page2021 extends Component {
  render () {
    return (
      <Layout>  
        <SEO
          pageDescription="These survey results explore the challenges of a design system, from planning and managing changes to organizational adoption. They examine what makes a mature design system that positively impacts the team."
          image="ogimage-2021.png"
          year="2021"
        />
        <div className="obj-lines obj-max-width">
          <Grid>
            <GridCell startLG="1" spanLG="6">
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit fames porta egestas interdum, volutpat tempus mus nascetur cum eget viverra accumsan sodales. Augue molestie lobortis vel tincidunt litora semper fringilla suspendisse nisi, varius dignissim fusce quis cubilia auctor duis magnis, luctus tempor sapien aliquet tellus mattis felis curae. Dignissim est nostra convallis laoreet eget ante mollis integer leo, aptent proin sodales phasellus interdum vehicula condimentum praesent turpis placerat, tincidunt ridiculus felis morbi auctor ipsum etiam torquent. Mi in nisi lectus tellus metus fusce tempus litora, orci duis ac vivamus sit venenatis. Nostra porttitor nam penatibus congue per tellus duis, aliquet accumsan habitasse bibendum malesuada consectetur ante, auctor risus mattis sollicitudin luctus lorem. Venenatis etiam fermentum elementum habitant magnis vulputate gravida, egestas adipiscing quam at orci parturient condimentum mollis, rhoncus semper imperdiet felis curae turpis. Odio imperdiet sociosqu urna iaculis dictumst id maecenas tempus massa dolor sit, purus ante aliquam quam parturient donec class mus auctor. Sed curabitur dis quam phasellus id tellus fermentum ut, dolor per dui natoque condimentum ultrices justo dapibus inceptos, penatibus fringilla dictumst dictum conubia morbi vivamus.</p>
            </GridCell>

            <GridCell startLG="9" spanLG="4" alignLG="center"  rowSpan="2">
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, est semper justo tincidunt eleifend imperdiet suspendisse, varius erat platea condimentum turpis lobortis. Justo suspendisse condimentum magna inceptos purus quam magnis amet, tincidunt tempus cras posuere ipsum duis a diam porttitor, aenean dictumst platea morbi nisi auctor ad. Non hendrerit fusce posuere senectus auctor pellentesque commodo rhoncus cubilia, odio diam fringilla amet primis duis purus imperdiet, neque euismod id tincidunt ut lacinia sollicitudin facilisis.</p>
              <p>Venenatis etiam fermentum elementum habitant magnis vulputate gravida, egestas adipiscing quam at orci parturient condimentum mollis, rhoncus semper imperdiet felis curae turpis. Odio imperdiet sociosqu urna iaculis dictumst id maecenas tempus massa dolor sit, purus ante aliquam quam parturient donec class mus auctor.</p>
            </GridCell>
            
            <GridCell startMD="3" spanMD="2" alignLG="center">
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dui, non vehicula quam viverra lacinia aliquam sem aliquet, interdum pulvinar aptent quis scelerisque ut integer.</p>
            </GridCell>

            <GridCell startLG="9" spanLG="4" alignLG="end">
              <p>Nostra consequat nibh ornare conubia ut varius purus, vivamus arcu hendrerit mus magnis nullam mollis egestas, adipiscing augue taciti tempus consectetur proin. Habitant nullam sagittis libero fusce commodo vitae ornare dui scelerisque dolor a quis, ut fames consectetur elit vel porta tempor nec pellentesque conubia tortor.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit duis placerat, ligula vel condimentum iaculis lacinia quam rutrum diam, mi sem leo urna mauris ridiculus id nulla. Praesent lorem sociis libero vestibulum sociosqu maecenas natoque a nec, tellus pretium quisque montes interdum cum magnis sollicitudin primis torquent, morbi volutpat dignissim vivamus sodales malesuada donec nascetur.</p>
            </GridCell>
            
            <GridCell>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dui, non vehicula quam viverra lacinia aliquam sem aliquet, interdum pulvinar aptent quis scelerisque ut integer.</p>
            </GridCell>
          </Grid>
        </div>
      </Layout>
    )
  }
} 

export default Page2021
