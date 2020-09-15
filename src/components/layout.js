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
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
  }

  .children {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 3;
    margin: 2rem;
  }

  .sidebar {
    flex-basis:400px;
    flex-grow: 1;
    margin: 2rem;
    //margin-left: 2rem;
  }
`

export default Layout
