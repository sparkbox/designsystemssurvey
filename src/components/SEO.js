import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ description, image, lang, locale, styleSheet, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            baseUrl
            description
            title
            titleTemplate
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description;
  const metaImage = `${site.siteMetadata.baseUrl}/images/${image}`;
  const url = `${site.siteMetadata.baseUrl}/${title}`;

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`The %s ${site.siteMetadata.titleTemplate}`}
    >
      <meta name="application-name" content={`${title} Design Systems Survey`} />
      <meta name="author" content={site.siteMetadata.author} />
      <meta name="description" content={metaDescription} />

      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:locale" content={locale} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={site.siteMetadata.author} />

      <link rel="canonical" href={url} />
      {styleSheet && <link rel="stylesheet" type="text/css" href={styleSheet} />}
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: 'en',
  locale: 'en_US',
  description: '',
  styleSheet: ''
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  locale: PropTypes.string,
  title: PropTypes.string.isRequired,
  styleSheet: PropTypes.string
}

export default SEO