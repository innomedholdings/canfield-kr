import React from "react";
import { graphql, Link, PageProps } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

interface ILayoutProps {
    children: any;
}
export default function Layout({children}: ILayoutProps){
    return(
        <div className="container">
            <nav>
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/inquiry">문의/신청</Link></li>
            </ul>
            </nav>
            <main>{children}</main>
        </div>        
    )
}