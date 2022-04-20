import React, { useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import {
  FaAlignJustify,
  FaPhoneSquareAlt,
  FaFacebook,
  FaInstagram,
  FaPhoneAlt
} from "react-icons/fa"
import { FiMail } from "react-icons/fi"
import { GoLocation } from "react-icons/go"
import styled from "styled-components"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const getImages = graphql`
  query {
    logomain: file(relativePath: { eq: "logomain.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Navbar = () => {
  const data = useStaticQuery(getImages)

  const [isOpen, setNav] = useState(false)
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
    <Wrapper>
      <div className="nav-center">
        <div className="nav-header">
          <div class="logo-image">
            <AniLink fade to="/">
              <Img fluid={data.logomain.childImageSharp.fluid} />
            </AniLink>
          </div>
          <button type="button" className="logo-btn" onClick={toggleNav}>
            <FaAlignJustify className="logo-icon" />
          </button>
        </div>

        <div class="all-links">
          <div>
            <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
              <AniLink fade to="/">
                NASLOVNA
              </AniLink>
              <AniLink fade to="/Services/">
                USLUGE
              </AniLink>
              <AniLink fade to="/Contact/">
                KONTAKT
              </AniLink>
            </ul>
          </div>
          <div class="nav-links show-nav nav-links-phone">
            <a href="https://www.google.com/maps/place/Banji%C4%8Dkih+%C5%BErtava+36,+Beograd/@44.7868677,20.4297487,17z/data=!3m1!4b1!4m5!3m4!1s0x475a6fdf3f5f7145:0xf000ef7252f9ffaa!8m2!3d44.7868677!4d20.4319374">
              <GoLocation /> Banjičkih Žrtava 36, Beograd
            </a>
            <a href="tel:+381117499540">
              <FaPhoneAlt /> Telefon: 011 / 749-95-40
            </a>
          </div>
        </div>

        <div className="nav-social-links">
          <a href="https://www.facebook.com/FenrirVet019">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/fenrir019veterinar/">
            <FaInstagram />
          </a>
          <AniLink fade to="/Contact/">
            <FiMail />
          </AniLink>
          <a href="tel:+381117499540">
            <FaPhoneSquareAlt />
          </a>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`

   .cover-container {
    display: block;
    padding: auto 50px;
  }

  .logo-image {
    max-width: 200px;
    min-width: 200px;
  }

  .nav-header {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 1rem 1.25rem;
  }

  .logo-btn {
    background: transparent;
    border: none;
    outline: none;

    &:hover {
    cursor: pointer;
  }
}

 
  .logo-icon {
    color: var(--mainBlack);
    font-size: 2rem;
  }

  
  .nav-links {
    list-style-type: none;
    transition: var(--mainTransition);
    height: 0;
    overflow: hidden;
    text-align:center;
    margin-top: 20px;
    

    a {
    display: block;
    padding: 0.75rem 1.25rem;
    text-decoration: none;
    text-transform: capitalize;
    color: var(--mainBlack);
    transition: var(--mainTransition);
    font-weight: 700;
    letter-spacing: var(--mainSpacing);


      &:hover {
        color: var(--primaryColor);
           }
  }
}

  .show-nav {
    height: 216px;
  }

  .nav-links-phone {
    font-size: 0.8rem;
    height: 150px;
    margin-top: 20px;
  }


  .nav-social-links {
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      color: var(--mainBlack);
      margin: 0.5rem 1rem;
      font-size: 1.8rem;
      transition: var(--mainTransition);
      
      &:hover {
        color: var(--primaryColor);
        transform: scale(1.3);
      }
    }
  }



  @media screen and (min-width: 576px) {
    padding: 0 2rem;
  }
     
  }

  @media screen and (min-width: 1104px) {
    .logo-btn {
      display: none;
    }

    
    
    .nav-center {
      max-width: 1400px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }


    .nav-links {
      
      height: auto;
      display: flex;
      justify-content: center;

    }

      .nav-social-links {
      display: flex;
      line-height: 0;

      a {
        color: var(--mainBlack);
        margin: 0 0.5rem;
        font-size: 1.6rem;
        transition: var(--mainTransition);

        &:hover {
          color: var(--primaryColor);
          transform: scale(1.5);
        }
      }
    }
  }
`

export default Navbar
