require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: '',
    titleTemplate: 'Design Systems Survey by Sparkbox',
    name: 'Design Systems Survey',
    baseUrl: 'https://designsystemsurvey.sparkbox.com',
    author: '@hearsparkbox',
    description:
      'How are design systems for websites and apps changing the way the industry works? Sparkbox conducted a survey and is excited to share findings on the benefits and challenges of this impactful, systemic work.',
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
        name: `Design System Survey`,
        short_name: `DSS`,
        start_url: `/`,
        background_color: `#11161C`,
        theme_color: `#FFFFFF`,
        icon: `src/images/favicon-32x32.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-mdx`,
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: ['GTM-KQ53HCR'],
        gtagConfig: {
          anonymize_ip: true,
        },
        pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://seesparkbox.us1.list-manage.com/subscribe/post?u=c2fcafb7ccc2db34e99075bb1&amp;id=afd992cd7c',
      },
    },
  ],
}
