import React from "react"
import "./layout.css"
import Navbar from "./Navbar"
import SideBar from "./SideBar"
import styled from "styled-components"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Wrapper>
        <Navbar />
        <div className="main-flex">
          <div className="children">
            <main>{children}</main>
          </div>
          <div className="sidebar">
            <SideBar />
          </div>
        </div>
        <Footer />
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  background-color: var(--offWhite);

  .main-flex {
    margin-top: 40px;
    display: flex;
    justify-content: center;
  }

  @media (max-width: 1000px) {
    .main-flex {
      flex-wrap: wrap;
    }
  }

  .children {
      margin: 2rem 2rem;
  }

  .sidebar {
    margin: 2rem;
  }
`

export default Layout
