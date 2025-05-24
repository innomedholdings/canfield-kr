import React from "react";
import Layout from "./components/Layout";
import { HeadFC } from "gatsby";
import Seo from "./components/Seo";

export default function AboutUs(){
    return (
        <Layout>
            <h1>About us</h1>
            <p>We are korean site of Canfield.</p>
        </Layout>
    )
}

export const Head:HeadFC = () => <Seo title="About Us" />