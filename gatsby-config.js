const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Brian Bawuah, CMD student & developer`,
    description: `I am a creative developer who creates things in TypeScript with Node and React`,
    author: `Brian Bawuah`,
    image: `portrait-brian-bawuah.jpg`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    'gatsby-plugin-scss-typescript',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
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
        icon: `src/images/brainy-icon.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: [
            'horizon, horizon-outlined, HelveticaNeue-regular, HelveticaNeue-light, HelveticaNeue-medium, HelveticaNeue-thin'
          ],
          urls: ['myfonts.css']
        }
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 600
            }
          },
          `gatsby-remark-copy-linked-files`
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        resolveModules: [path.join(__dirname, 'styles')],
        utils: path.join(
          __dirname,
          'styles/variables',
          'styles/variables/functions'
        )
      }
    }
  ]
}
