import React from "react"
import { Gallery } from "gatsby-theme-gallery"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const SecondPage = () => (
  <Wrapper>
    <Layout>
      <div className="gallery-wrapper">
        <Gallery />
      </div>
    </Layout>
  </Wrapper>
)

const Wrapper = styled.div`
  background-color: #cddae1;

  .gallery-wrapper {
    min-width: 1000px;
  }

  @media (max-width: 600px) {
    .css-dvst2w {
      grid-template-columns: 1fr;
      grid-auto-rows: 20rem;
    }
  }

  `

export default SecondPage
