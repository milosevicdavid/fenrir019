import React from "react"
import img from "../images/catyellow.png"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Error" />
    <div className="404"  >
      <img src={img} alt="404" width="600" />
      <h1>404 STRANICA NIJE PRONAĐENA</h1>
    </div>
  </Layout>
)

export default NotFoundPage
