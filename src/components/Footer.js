import React from "react"
import styled from "styled-components"
import {
  FaPhoneSquareAlt,
  FaFacebook,
  FaInstagram,
}
from "react-icons/fa"
import { FiMail } from "react-icons/fi"
import AniLink from "gatsby-plugin-transition-link/AniLink"


const Footer = () => {
  return (
    <Wrapper>
      <div className="footer">
        copyright <span className="copyright">&copy;</span> Fenrir019 {new Date().getFullYear()} all
        rights reserved
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
          <a href="tel:+381112970419">
            <FaPhoneSquareAlt />
          </a>
        </div>

    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: var(--mainBlack);
  color: white;
  display: flex;
  justify-content: space-around;

  .footer {
    padding: 2rem;
  }

  .copyright {
    color: var(--primaryColor);
  }

.nav-social-links {
    display: flex;
    align-items: center;
    padding-right: 0.75rem;

    a {
      color: var(--offWhite);
      margin: 0.5rem 1rem;
      font-size: 1.8rem;
      transition: var(--mainTransition);
      
      &:hover {
        color: var(--primaryColor);
        transform: scale(1.3);
      }
    }
  }


`

export default Footer
