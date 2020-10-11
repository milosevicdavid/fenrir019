import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import SEO from "../components/seo"

const Contact = () => {
  return (
    <Wrapper>
      <Layout>
        <SEO title="Kontakt" description="Mapa, adresa, email, telefoni" />
        <div className="iframe">
          <iframe
            className="maps"
            frameborder="0"
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJrVGu84p6WkcR48DWBhuHxps&key=AIzaSyCRMldkcAR2N9zYckH7LtYZ-d9VbsZZ9MI"
            allowfullscreen
          ></iframe>
        </div>

        <div className="center">
          <form
            action="https://formspree.io/fenrir019bgd@gmail.com"
            method="POST"
            className="form"
          >
            <div>
              <label htmlFor="name">name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                placeholder="Vaše Ime"
              />
            </div>
            <div>
              <label htmlFor="email">email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                placeholder="Vaš Email"
              />
            </div>
            <div>
              <label htmlFor="message">message</label>
              <textarea
                id="message"
                name="message"
                cols=""
                rows="10"
                className="form-control"
                placeholder="Poruka"
              />
              <div>
                <input type="submit" value="pošaljite poruku" className="submit" />
              </div>
            </div>
          </form>
        </div>
      </Layout>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  color: var(--mainBlack);

  .maps {
    width: 100%;
    height: 62vh;
    border: 0;
  }

  .iframe {
    margin: auto 1rem;
  }

  .contact {
    padding: 4rem 0;
  }
  .center {
    width: 100vw;
    margin: 0 auto;
  }
  @media screen and (min-width: 992px) {
    .center {
      width: 50vw;
      margin: 0 auto;
    }
  }
  label {
    text-transform: capitalize;
    display: block;
    margin-bottom: 0.5rem;
  }

  .form {
    padding: 1rem;
  }

  .form-control,
  .submit {
    width: 100%;
    font-size: 1rem;
    margin-bottom: 1rem;
    padding: 0.375rem 0.75rem;
    border: 1px solid var(--darkGrey);
    border-radius: 0.25rem;
  }
  .submit {
    background-color: var(--primaryColor);
    border-color: var(--primaryColor);
    text-transform: uppercase;
    color: var(--mainBlack);
    transition: var(--mainTransition);
    cursor: pointer;
  }
  .submit:hover {
    background: var(--darkGrey);
    color: var(--mainWhite);
    border-color: var(--darkGrey);
  }
`

export default Contact
