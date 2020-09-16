import React from "react"
import "./layout.css"
import Navbar from "./Navbar"
import SideBar from "./SideBar"
import styled from "styled-components"

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
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  background-color: var(--offWhite);

  
  .main-flex {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    }

  .children {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 2rem;
  }

  .sidebar {
    flex-basis: 400px;
    margin: 2rem;
  }

  `

export default Layout
