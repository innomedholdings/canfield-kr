import React from "react";
import Layout from "../components/Layout";
import { graphql, HeadFC } from "gatsby";
import Seo from "../components/Seo";
import Video from "../components/Video";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

interface IProductProps {
    data: Queries.ProductDetailQuery,
    children: any,
}

export default function Product({data, children}:IProductProps){
  const isheaderImage = data.mdx?.frontmatter?.headerImage;
  const isVideo = data.mdx?.frontmatter?.video;
  let renderContent;

  if(isheaderImage && isVideo) {
    renderContent = (<div>
      <div className="grid" style = {{backgroundColor:"#040720"}}>
        <GatsbyImage image={getImage(data.mdx.frontmatter?.headerImage?.childImageSharp?.gatsbyImageData!)} alt="header"/>
        <div style={{margin:"10px"}}>
            <h3 style={{color: "#ECFAE5"}}>의료용 촬영 장비 캔필드</h3>
            <p style={{color: "#ECFAE5"}}>The worldwide leader in specialized photographic systems and imaging software.</p>
            <p style={{color: "white"}}>Canfield has a legacy of firsts. Over the years, we have been at the frontier of 3D imaging and simulation, 2D image capture improvement, facial skin analysis, and created opportunities to continually push the envelope for what is possible.</p>
        </div>
      </div>
              <hr />
      <Video videoSrcURL={data.mdx?.frontmatter?.video} /> 
    </div>)
  } else if(isVideo) {
    renderContent = <Video videoSrcURL={data.mdx?.frontmatter?.video} />
  } else if(isheaderImage) {
    renderContent = <GatsbyImage image={getImage(data.mdx?.frontmatter?.headerImage?.childImageSharp?.gatsbyImageData!)} alt="header" />
  } else {
    renderContent = <div>no data</div>
  }
  console.log(renderContent);

  return(<Layout>
        <div>{children}</div>
        {renderContent}
      </Layout>) 
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