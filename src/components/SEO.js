import React, { Component } from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"


class SEO extends Component {
  constructor(props) {
    super(props);
    this.state = { jsEnabled: false };
  }
  
  componentDidMount() {
    this.setState({ jsEnabled : true })
  }

  render () {
    const htmlClass = this.state.jsEnabled ? 'safe-focus js' :  'safe-focus no-js';
  
    return (
      <StaticQuery
        query = {
          graphql`
            query {
              site {
                siteMetadata {
                  author
                  baseUrl
                  description
                  titleTemplate
                }
              }
            }
          `}
        render = { data => (
          <Helmet title={`The ${this.props.year} ${data.site.siteMetadata.titleTemplate}`}>
            <html className={htmlClass} />
            <meta name="application-name" content={`${this.props.year} Design Systems Survey`} />
            <meta name="author" content={data.site.siteMetadata.author} />
            <meta name="description" content={ this.props.pageDescription || data.site.siteMetadata.description } />
      
            <meta property="og:description" content={ this.props.pageDescription || data.site.siteMetadata.description } />
            <meta property="og:image" content={`${data.site.siteMetadata.baseUrl}/images/${this.props.image}`} />
            <meta property="og:locale" content={this.props.locale} />
            <meta property="og:title" content={`The ${this.props.year} ${data.site.siteMetadata.titleTemplate}`} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`${data.site.siteMetadata.baseUrl}/${this.props.year}`} />
      
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content={data.site.siteMetadata.author} />
      
            <link rel="canonical" href={`${data.site.siteMetadata.baseUrl}/${this.props.year}`} />
            {this.props.fontCSS && <link rel="stylesheet" type="text/css" href={this.props.fontCSS} />}
            <link rel="stylesheet" type="text/css" href={`/css/${this.props.year}.css`} />
          </Helmet>
        )}
      />
    )
  }
}

SEO.defaultProps = {
  pageDescription: null,
  image: null,
  locale: 'en_US',
  fontCSS: null, 
  year: null
}

SEO.propTypes = {
  pageDescription: PropTypes.string,
  lang: PropTypes.string,
  locale: PropTypes.string,
  fontCSS: PropTypes.string,
  year: PropTypes.string.isRequired
}

export default SEO