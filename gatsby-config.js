// gatsby-config.js
module.exports = {
  siteMetadata: {
    title: `Suntime`,
    description: `Simple e-commerce training project using Gatsby.js and local JSON data.`,
    author: `Paweł Trojnacki`,
    siteUrl: `https://suntime.netlify.app/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
  resolve: `gatsby-source-filesystem`,
  options: {
    name: `data`,
    path: `${__dirname}/src/`, // taruh products.json di src
  },
},

    {
      resolve: `gatsby-plugin-snipcart`,
      options: {
        apiKey: process.env.SNIPCART_API_KEY || "",
        autopop: true,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Suntime.com`,
        short_name: `Suntime`,
        start_url: `/`,
        background_color: `#ffe0c5`,
        theme_color: `#ffe0c5`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-mailchimp`,
    //   options: {
    //     endpoint: process.env.MAILCHIMP_ENDPOINT || "",
    //   },
    // },
    {
      resolve: `gatsby-plugin-netlify-headers`,
      options: {
        allPageHeaders: ["Access-Control-Allow-Origin: *"],
      },
    },
  ],
};
