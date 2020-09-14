import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const getImages = graphql`
  query {
    slike: allImageSharp(filter: { original: { src: { regex: "/dog/" } } }) {
      edges {
        node {
          id
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

const Galerija = () => {
  const data = useStaticQuery(getImages)

  return (
    <Wrapper>
      {
          data.slike.edges.map(({node}) => (
          <Img class="slika" key={node.id} fluid={node.fluid} />
          ))
      }
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;

  .gatsby-image-wrapper {
    img {
      width: 100%;
      height: 100%;
  }
  transition: transform .2s;
  }

  .gatsby-image-wrapper:hover {
    transform: scale(1.5);
    z-index: 2;
  }

 
`

export default Galerija
