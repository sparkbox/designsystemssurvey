import React, { Component } from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"


class SEO extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jsEnabled: false,
      htmlClass: 'no-js',
      isIE11: false,
    };
    this.htmlClassCheck = this.htmlClassCheck.bind(this);
    this.ie11Check = this.ie11Check.bind(this);
  }

  componentDidMount() {
    this.setState({ 
      htmlClass : this.htmlClassCheck(),
      isIE11 : this.ie11Check()
    })
  }

  htmlClassCheck() {
    let htmlClass = 'safe-focus js';
    if ( !!window.MSInputMethodContext && !!document.documentMode ) {
      htmlClass = `${htmlClass} ie11`;
    }
    if ('IntersectionObserver' in window) {
      htmlClass = `${htmlClass} has-io`;
    } else {
      htmlClass = `${htmlClass} no-io`;
    }
    return htmlClass;
  }
  
  ie11Check() {
    let isIE11;
    if ( !!window.MSInputMethodContext && !!document.documentMode ) {
      isIE11 = '/css/2021-ie.css'
    }
    return isIE11;
  }

  render () {
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
            <html className={this.state.htmlClass} lang="en"/>
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
            {this.state.isIE11 && <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;700&display=swap" rel="stylesheet" />}
            <link rel="stylesheet" type="text/css" href={`/css/${this.props.year}.css`} />
            {this.state.isIE11 && <link rel="stylesheet" type="text/css" href={this.state.isIE11} />}
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
