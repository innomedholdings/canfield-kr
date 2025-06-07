import React from "react";
import Layout from "../components/Layout";
import { graphql, HeadFC } from "gatsby";
import Seo from "../components/Seo";
import Video from "../components/Video";
import HeaderImage from "../components/HeaderImage";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

interface IProductProps {
    data: Queries.ProductDetailQuery,
    children: any,
}

export default function Product({data, children}:IProductProps){
  if(data.mdx?.frontmatter?.video) {
    return(      <Layout>
        <div>{children}</div>
        <Video videoSrcURL={data.mdx?.frontmatter?.video} />
        <p>캔필드</p>
      </Layout>)
  } else {
    return (
      <Layout>
        <div>{children}</div>
        <GatsbyImage image={getImage(data.mdx.frontmatter?.headerImage?.childImageSharp?.gatsbyImageData!)} />
        <p>캔필드</p>
      </Layout>
    )
  }

}

export const query = graphql`
query ProductDetail($frontmatter__slug:String) {
  mdx(frontmatter: {slug: {eq: $frontmatter__slug}}) {
    body
    frontmatter {
      name
      slug
      video
      headerImage {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
    }
  }
}`

export const Head = ({data, children}:IProductProps) => <Seo title={data.mdx?.frontmatter?.slug} />