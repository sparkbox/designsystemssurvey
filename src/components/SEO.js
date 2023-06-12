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
  }

  componentDidMount() {
    this.setState({
      htmlClass : this.htmlClassCheck(),
    })
  }

  htmlClassCheck() {
    let htmlClass = 'safe-focus js';
    if ('IntersectionObserver' in window) {
      htmlClass = `${htmlClass} has-io`;
    } else {
      htmlClass = `${htmlClass} no-io`;
    }
    return htmlClass;
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
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=GTM-KQ53HCR"
            ></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
                  var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                  j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                  f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-KQ53HCR');
                `,
              }}
            />
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

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content={data.site.siteMetadata.author} />
            <meta name="twitter:image" content={`${data.site.siteMetadata.baseUrl}/images/${this.props.image}`} />

            <link rel="canonical" href={`${data.site.siteMetadata.baseUrl}/${this.props.year}`} />
            {this.props.fontCSS && <link rel="stylesheet" type="text/css" href={this.props.fontCSS} />}
            {(this.props.year !== '2021') && <link rel="stylesheet" type="text/css" href={`/css/${this.props.year}.css`} />}
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
