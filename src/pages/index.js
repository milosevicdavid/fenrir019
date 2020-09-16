import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { FaInstagram } from "react-icons/fa"
import { GiHouse, GiHealthNormal, GiPawHeart } from "react-icons/gi"
import "../components/layout.css"

const IndexPage = ({ data }) => {
  return (
    <main>
      
      <Layout>
        <div className="text">
          <p className="headline">
            U VAŠEM KOMŠILUKU
            <span className="icon">
              <GiHouse />
            </span></p>

          <p>
            Fenrir019 veterinarska ambulanta je specijalizovana za pružanje
            preventive i terapije Vašim ljubimcima. Nalazimo se na teritoriji
            opštine Palilula, u ulici Marijane Gregoran 34a.
          </p>
        </div>
        <div className="cover">
          <Img className="cover" fluid={data.first.childImageSharp.fluid} />
        </div>

        <div className="text">
          <p className="headline">
            TIM VETERINARA
            <span className="icon">
              <GiHealthNormal />
            </span>
          </p>

          <p>
            U našoj ambulanti rade dva licencirana doktora veterinarske
            medicine, koji će svojom stručnošću postaviti pravu dijagnozu i dati
            terapiju, po potrebi. Ljubav prema životinjama je glavni razlog
            zašto naša veterinarska ambulanta FENRIR019 postoji.
          </p>
        </div>
        <div className="cover">
          <Img className="cover" fluid={data.second.childImageSharp.fluid} />
        </div>

        <div className="text">
          <p className="headline">
            LJUBIMCI
            <span className="icon">
              <GiPawHeart />
            </span>
          </p>

          <p>
            Veterinarska ambulanta FENRIR019 pre svega sve svoje drage pacijente
            tretira jednako s ljubavlju i pažnjom a iznad svega nam je stalo da
            na najbolji i najadekvatniji način nađemo rešenje za problem koji ih
            muči bilo da su u oklopu, bodljikavi, pernati, čupavi, nervozni,
            uplašeni, ljuti...
          </p>
        </div>
        <div className="cover-container">
          <Img className="cover" fluid={data.third.childImageSharp.fluid} />
        </div>

        <div className="text">
          <p className="headline">
            U VAŠEM KOMŠILUKU
            <span className="icon">
              <FaInstagram/>
            </span>
          </p>

          <p> 
            Sprovodimo akcije za određene usluge na nedeljnom nivou. Pratite rad
            naše ambulante na Instagramu: @fenrir019veterinar.
          </p>
        </div>
        <div className="cover">
          <Img className="cover" fluid={data.first.childImageSharp.fluid} />
        </div>
      </Layout>
      
    </main>
  )
}




export const query = graphql`
  query {
    first: file(relativePath: { eq: "top.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    second: file(relativePath: { eq: "doctors.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    third: file(relativePath: { eq: "kuca.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
