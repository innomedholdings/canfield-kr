import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `CanfieldKorea`,
    siteUrl: `https://www.yourdomain.tld`,
    description: "Contact to us for finding the best Vectra system."
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
  `gatsby-plugin-image`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`, // Needed for dynamic images
  `gatsby-plugin-mdx`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/canfield-products`,
    }
  },
  ],
}

export default config
