/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env`,
});


module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-page-transitions',
    `gatsby-plugin-styled-components`,
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    `gatsby-plugin-transition-link`,
    
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "http://localhost:1337",
        contentTypes: [
          "images",
          "tags",
        ],
        singleTypes:['about-image','contact-image'],
        queryLimit: 1000,
      },
    },
],
}
