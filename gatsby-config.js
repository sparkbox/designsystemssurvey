module.exports = {
  siteMetadata: {
    title: 'The 2019 Design Systems Survey by Sparkbox',
    name: '2019 Design Systems Survey',
    author: `@hearsparkbox`,
    description: 'How are design systems for websites and apps changing the way the industry works? Sparkbox conducted a survey and is excited to share findings on the benefits and challenges of this impactful, systemic work.'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-mdx`,
    `gatsby-plugin-sass`,
     // This must be last in the array
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/*": [
            "Basic-Auth: sparkbox:dss2019$",
          ],
        },
      }
    },
  ],
}
