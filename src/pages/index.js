import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { FaInstagram } from "react-icons/fa"
import { GiHouse, GiHealthNormal, GiPawHeart } from "react-icons/gi"
import "../components/layout.css"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  return (
    <main>
      <Layout>
        <SEO
          title="Dobrodošli"
          description="Dobrodošli na naslovnu stranicu Fenrir019 veterinarske ambulante"
        />
        <div className="index-container">
          <div className="grid-cell">
            <div className="text">
              <p className="headline">
                TIM VETERINARA
                <span className="icon">
                  <GiHealthNormal />
                </span>
              </p>

              <p className="paragraf1">
                U našoj ambulanti rade dva licencirana doktora veterinarske
                medicine, koji će svojom stručnošću postaviti pravu dijagnozu i
                dati terapiju, po potrebi. Ljubav prema životinjama je glavni
                razlog zašto naša veterinarska ambulanta FENRIR019 postoji.
              </p>
            </div>
            <div className="cover">
              <Img
                className="cover"
                fluid={data.second.childImageSharp.fluid}
              />
            </div>
          </div>
          <div className="grid-cell">
            <div className="text">
              <p className="headline">
                U VAŠEM KOMŠILUKU
                <span className="icon">
                  <GiHouse />
                </span>
              </p>

              <p className="paragraf2">
                Fenrir019 veterinarska ambulanta je specijalizovana za pružanje
                preventive i terapije Vašim ljubimcima. Nalazimo se na
                teritoriji opštine Savski Venac, u ulici Banjičkih Žrtava 36.
              </p>
            </div>
            <div className="cover">
              <Img className="cover" fluid={data.first.childImageSharp.fluid} />
            </div>
          </div>
          <div className="grid-cell">
            <div className="text">
              <p className="headline">
                LJUBIMCI
                <span className="icon">
                  <GiPawHeart />
                </span>
              </p>

              <p className="paragraf3">
                Veterinarska ambulanta FENRIR019 pre svega sve svoje drage
                pacijente tretira jednako s ljubavlju i pažnjom a iznad svega
                nam je stalo da na najbolji i najadekvatniji način nađemo
                rešenje za problem koji ih muči bilo da su u oklopu, bodljikavi,
                pernati, čupavi, nervozni, uplašeni, ljuti...
              </p>
            </div>
            <div className="cover-container">
              <Img className="cover" fluid={data.third.childImageSharp.fluid} />
            </div>
          </div>

          <div className="grid-cell">
            <div className="text">
              <p className="headline">
                NA INSTAGRAMU
                <span className="icon">
                  <FaInstagram />
                </span>
              </p>

              <p className="paragraf4">
                Sprovodimo akcije za određene usluge na nedeljnom nivou. Pratite
                rad naše ambulante na Instagramu: @fenrir019veterinar.
              </p>
            </div>
            <div className="cover">
              <Img
                className="cover"
                fluid={data.fourth.childImageSharp.fluid}
              />
            </div>
          </div>
        </div>
      </Layout>
    </main>
  )
}

export const query = graphql`
  query {
    first: file(relativePath: { eq: "top2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    second: file(relativePath: { eq: "them.jpg" }) {
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
    fourth: file(relativePath: { eq: "instacat.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
