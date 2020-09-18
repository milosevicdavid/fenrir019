import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const Services = ({ data }) => (
    <Wrapper>
        <Layout>
            <p className="headline">FENRIR019 pruža sledeće usluge: </p>
            <div className="services">
                <ul className="list">
                    <li>Preventiva</li>
                    <li>Vakcinacija protiv zaraznih bolesti i besnila</li>
                    <li>Obeležavanje mikročipom</li>
                    <li>Zaštita od spoljašnjih i unutrašnjih parazita</li>
                    <li>Terapije</li>
                    <li>Hirurške intervencije</li>
                    <li>Skidanje zubnog kamenca</li>
                    <li>Mikroskopski pregled stolice</li>
                    <li>
                        Konsultacije i preglede u dogovoru sa stručnjacima iz{" "}
                        <br />
                        pojedinih oblasti, a sa tim u vezi i kardiološki pregled
                    </li>
                    <li>Kućne posete (izlazak na teren)</li>
                </ul>
                <Img
                    className="services-image"
                    fluid={data.first.childImageSharp.fluid}
                />
            </div>
        </Layout>
    </Wrapper>
)

export const query = graphql`
    query {
        first: file(relativePath: { eq: "doggo.jpg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`

const Wrapper = styled.div`
    .services-image {
        border-radius: 10px;
        box-shadow: 0 10px 10px rgba(0, 0, 0, 0.7);
    }

    .list {
        font-weight: 600;
        margin-bottom: 40px;
    }

    .services {
        background-color: var(--mainGrey);
        margin-top: 50px;
        border: 1px solid var(--primaryColor);
        padding: 2rem;
        border-radius: 10px;
    }

    .headline {
        word-spacing: 0.5rem;
        font-size: 1.6rem;
        font-weight: 600;
    }
`

export default Services
