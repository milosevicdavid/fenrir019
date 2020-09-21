import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from 'gatsby'

const getData = graphql`
  query {
    site {
      siteMetadata {
        siteTitle: title
        siteDesc: description
        author
        siteUrl
        image
        instagramUsername
      }
    }
  }
`

const SEO = ({ title, description }) => {

  const { site } = useStaticQuery(getData)

  const {
    siteDesc,
    siteTitle,
    siteUrl,
    image,
    instagramUsername,
  } = site.siteMetadata

  return (
    <Helmet htmlAttributes={{ lang: "sr-Latn-rs" }} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={description} />
      <meta name="image" content={image} />
    </Helmet>
  )
}

export default SEO
