import * as React from "react"
import { HeadFC, PageProps } from "gatsby"
import Layout from "./components/Layout"

const NotFoundPage: React.FC<PageProps> = () => {
  return (
<Layout>We can't find this page.</Layout>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
