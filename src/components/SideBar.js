import React from "react"
import styled from "styled-components"
import { MdPhoneIphone } from "react-icons/md"
import { FiMail } from "react-icons/fi"
import { GoLocation } from "react-icons/go"
import { FaPhoneAlt } from "react-icons/fa"
import { BsFillClockFill, BsClockHistory } from "react-icons/bs"
import { RiDoorClosedFill } from "react-icons/ri"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const getImages = graphql`
  query {
    ponuda: file(relativePath: { eq: "ponuda.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const SideBar = () => {
  const data = useStaticQuery(getImages)

  return (
    <Wrapper>
      <div className="ponuda">
        <Img fluid={data.ponuda.childImageSharp.fluid} />
      </div>

      <div className=" yellowbox">
        <h2>Kontakt</h2>
        <p>
          <span>
            <GoLocation />
          </span>
          &nbsp;&nbsp;&nbsp;Banjičkih Žrtava 36, Beograd
        </p>
        <p>
          <span>
            <MdPhoneIphone />
          </span>
          &nbsp;&nbsp;&nbsp;
          <a href="tel:+381642709470">064 / 270-94-70</a>, &nbsp;&nbsp;&nbsp;
          <a href="tel:+381616051271">061 / 60-512-71</a>
        </p>
        <p>
          <span>
            <FaPhoneAlt />
          </span>
          <a href="tel:+381117499540">&nbsp;&nbsp;&nbsp;011 / 749-95-40</a>
        </p>
        <p>
          <span>
            <FiMail />
          </span>
          &nbsp;&nbsp;&nbsp;fenrir019bgd@gmail.com
        </p>
      </div>

      <div className="worktime yellowbox">
        <h2>Radno vreme</h2>
        <p>
          <span>
            <BsFillClockFill />
          </span>
          &nbsp;&nbsp;&nbsp;Ponedeljak - Petak: &nbsp; 10h-20h
        </p>
        <p>
          <span>
            <BsClockHistory />
          </span>
          &nbsp;&nbsp;&nbsp;Subota: &nbsp; 10h-15h
        </p>
        <p>
          <span>
            <RiDoorClosedFill />
          </span>
          &nbsp;&nbsp;&nbsp;Nedelja: &nbsp;Po pozivu
        </p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-width: 350px;

  .yellowbox {
    box-shadow: 0 8px 6px -6px black;
    flex-basis: 400px;
    font-weight: 400;
    font-size: 0.9rem;
    padding: 15px 0px 15px 20px;
    line-height: 50px;
    align-items: end;
    background-color: var(--mainBlack);
    border-radius: 10px;

    a {
      color: white;
      text-decoration: none;
    }
  }

  @media (max-width: 1000px) {
    .yellowbox {
      width: 600px;
    }
  }

  @media (max-width: 641px) {
    .yellowbox {
      width: 350px;
    }
  }

  .worktime {
    margin-top: 30px;
  }

  .ponuda {
    border-radius: 10px;
    margin-bottom: 30px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.7);
  }

  @media (max-width: 576px) {
    line-height: 20px;
  }

  p {
    color: var(--offWhite);
  }

  h2 {
    color: var(--offWhite);
    font-family: "Montserrat", sans-serif;
  }

  span {
    color: var(--primaryColor);
    font-size: 1.2rem;
  }
`

export default SideBar
