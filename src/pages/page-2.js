import React from "react"
import { Gallery } from "gatsby-theme-gallery"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const SecondPage = () => (
  <Wrapper>
    <Layout>
      <div class="grid-gallery">
        <Gallery />
      </div>
    </Layout>
  </Wrapper>
)

const Wrapper = styled.div`
  background-color: #cddae1;
  

 
  @media (min-width: 1280px) {
    .css-dvst2w {
      grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
      grid-auto-rows: 24rem;
    }
  }
`

export default SecondPage
