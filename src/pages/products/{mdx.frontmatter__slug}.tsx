import React from "react";
import Layout from "../components/Layout";
import { graphql, HeadFC } from "gatsby";
import Seo from "../components/Seo";

interface IProductProps {
    data: Queries.ProductDetailQuery,
    children: any,
}

export default function Product({data, children}){
    return <Layout><div>{children}</div></Layout>
}

export const query = graphql`
query ProductDetail($frontmatter__slug:String) {
  mdx(frontmatter: {slug: {eq: $frontmatter__slug}}) {
    body
    frontmatter {
      name
      slug
    }
  }
}`

export const Head = ({data, children}:IProductProps) => <Seo title={data.mdx?.frontmatter.slug} />