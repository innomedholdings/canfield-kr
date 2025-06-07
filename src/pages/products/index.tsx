import React from "react";
import Layout from "../components/Layout";
import { graphql, HeadFC, Link, PageProps } from "gatsby";
import Seo from "../components/Seo";

export default function Products({data}: PageProps<Queries.ProductsQuery>) {
    return(
        <Layout>
        <section className="grid">
            {data.allMdx.nodes.map((product, index)=>(
                <article key={index}>
                  <Link to={`/products/${product.frontmatter?.slug}`}>
                  <h3>{product.frontmatter?.name}</h3>
                  <hr />
                  <p>{product.excerpt}</p>
                  </Link>
                </article>
            ))}
        </section>
        </Layout>
    )
}

export const query = graphql`
query Products {
  allMdx {
    nodes {
      frontmatter {
        name
        slug
      }
      excerpt
    }
  }
}
`

export const Head:HeadFC = () => <Seo title="Products" />