import React from "react"
import { Helmet } from "react-helmet"
import { Global, css } from "@emotion/core"
import useSeo from "../hooks/useSeo"

import Header from "../components/Header"
import Footer from "../components/Footer"

const Layout = props => {
  const seo = useSeo()
  const {
    siteName,
    fallbackSeo: { title, description },
  } = seo

  return (
    <>
      <Global
        styles={css`
          html {
            font-size: 62.5%;
            box-sizing: border-box;
          }
          body {
            font-size: 18px;
            font-size: 1.8rem;
            line-height: 1.5;
            font-family: "PT Sans", sans-serif;
          }
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }
          h1,
          h2,
          h3 {
            margin: 0;
            line-height: 1.5;
          }
          h1,
          h2 {
            font-family: "Roboto", seif;
          }
          h3 {
            font-family: "PT Sans", sans-serif;
          }
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }
        `}
      />
      <Helmet>
        <title>{siteName}</title>
        <meta name="description" content={description} />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          integrity="sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU="
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css?family=PT+Sans:400,700|Roboto:400,700&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <Header />
      {props.children}
      <Footer title={title} />
    </>
  )
}

export default Layout
