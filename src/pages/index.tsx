import * as React from "react"
import { graphql, Link, type HeadFC, type PageProps } from "gatsby"
import Layout from "./components/Layout"
import Seo from "./components/Seo"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

const IndexPage: React.FC<PageProps> = ({data}:PageProps<Queries.ProductsQuery>) => {

  return (
   <Layout>
          <div className="center__box">
        <div className="nav__notification">
            <StaticImage height={70} src="../images/canfield_logo.png" alt="" />
        </div>
        <span style={{padding:"10px", marginBottom:"10px", color: "#FBFBFB"}}>캔필드 &nbsp; 공식 &nbsp; 판매처 &nbsp;</span>
      </div>
      <div className="grid" style = {{backgroundColor:"#040720"}}>
        <StaticImage height={500} src="./vectra_banner.png" alt="sticker image" />
        <div style={{margin:"10px"}}>
            <h3 style={{color: "#ECFAE5"}}>의료용 촬영 장비 캔필드</h3>
            <p style={{color: "#ECFAE5"}}>The worldwide leader in specialized photographic systems and imaging software.</p>
            <p style={{color: "white"}}>Canfield has a legacy of firsts. Over the years, we have been at the frontier of 3D imaging and simulation, 2D image capture improvement, facial skin analysis, and created opportunities to continually push the envelope for what is possible.</p>
        </div>
      </div> 
      <hr />

      <section className="grid" style={{marginTop:"20px"}}>
          {data.allMdx.nodes.map((product, index)=>(
              <article key={index}>
                <Link to={`/products/${product.frontmatter?.slug}`}>
                <h3>{product.frontmatter?.name}</h3>
                <GatsbyImage image={getImage(product.frontmatter?.smallImage?.childImageSharp?.gatsbyImageData!)} />
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
        smallImage {
          childImageSharp {
            gatsbyImageData(height: 300, placeholder: BLURRED)
          }
        }
      }
      excerpt
    }
  }
}
`

export default IndexPage

export const Head: HeadFC = () => <Seo title="Home" />
