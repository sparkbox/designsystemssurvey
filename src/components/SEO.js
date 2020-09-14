import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ pageDescription, image, locale, fontCSS, year }) => {
  const { site } = useStaticQuery(
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
    `
  )

  const { author, baseUrl, description, titleTemplate } = site.siteMetadata;
  const metaDescription = pageDescription || description;
  const metaImage = `${baseUrl}/images/${image}`;
  const metaTitle = `The ${year} ${titleTemplate}`;
  const metaUrl = `${baseUrl}/${year}`;

  return (
    <Helmet title={metaTitle}>
      <html className="js safe-focus" />
      <meta name="application-name" content={`${year} Design Systems Survey`} />
      <meta name="author" content={author} />
      <meta name="description" content={metaDescription} />

      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:locale" content={locale} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={metaUrl} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={author} />

      <link rel="canonical" href={metaUrl} />
      {fontCSS && <link rel="stylesheet" type="text/css" href={fontCSS} />}
      <link rel="stylesheet" type="text/css" href={`/css/${year}.css`} />
    </Helmet>
  )
}

SEO.defaultProps = {
  pageDescription: null,
  image: null,
  locale: 'en_US',
  styleSheet: null, 
  year: null
}

SEO.propTypes = {
  pageDescription: PropTypes.string,
  lang: PropTypes.string,
  locale: PropTypes.string,
  styleSheet: PropTypes.string,
  year: PropTypes.string.isRequired
}

export default SEO
