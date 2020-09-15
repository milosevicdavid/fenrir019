import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import img from "../images/dogs.jpg"

const IndexPage = ({data}) => (
  <Wrapper>
    <Layout>
    <Img className="cover" fluid={data.cover.childImageSharp.fluid} />
      <div className="text">

        <p>
          {" "}
          Fenrir019 veterinarska ambulanta je specijalizovana za pružanje
          preventive i terapije Vašim ljubimcima. Nalazimo se na teritoriji
          opštine Palilula, u ulici Marijane Gregoran 34a.
        </p>
        <p>
          {" "}
          Veterinarska ambulanta FENRIR019 pre svega sve svoje drage pacijente
          tretira jednako s ljubavlju i pažnjom a iznad svega nam je stalo da na
          najbolji i najadekvatniji način nađemo rešenje za problem koji ih muči
          bilo da su u oklopu,bodljikavi, pernati, čupavi, nervozni, uplašeni,
          ljuti...
        </p>
        <p>
          {" "}
          U našoj ambulanti rade dva licencirana doktora veterinarske medicine,
          koji će svojom stručnošću postaviti pravu dijagnozu i dati terapiju,
          po potrebi. Ljubav prema životinjama je glavni razlog zašto naša
          veterinarska ambulanta FENRIR019 postoji.
        </p>
        <p>
          {" "}
          Zdravlje Vaših ljubimaca nam je na prvom mestu, zato se trudimo da Vam
          pružimo najkvalitetniju uslugu uz pristupačne cene.
        </p>
        <p>
          {" "}
          Sprovodimo akcije za određene usluge na nedeljnom nivou. Pratite rad
          naše ambulante na Instagramu: @fenrir019veterinar.
        </p>
      </div>
    </Layout>
  </Wrapper>
)

const Wrapper = styled.div`
  
  .cover {
    margin-bottom: 50px;
    padding: 1rem;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7);
  }

  .text {
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--mainBlack);
    max-width: 650px;
  }
`
export const query = graphql`
  query {
    cover: file(relativePath: { eq: "dog.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
