import React from "react";
import Layout from "./components/Layout";
import { HeadFC } from "gatsby";
import Seo from "./components/Seo";

export default function AboutUs(){
    return (
        <Layout>
            <div className="center__box" style={{backgroundColor:"white"}}>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScdE4WUxFdCLiOkkzBgduuO-Y5ZNW4OL0lgReZ3ijKYOaAaag/viewform?embedded=true" width="640" height="1357" frameborder="0" marginheight="0" marginwidth="0">로드 중…</iframe>
            </div>
            
        </Layout>
    )
}

export const Head:HeadFC = () => <Seo title="Inquiry" />