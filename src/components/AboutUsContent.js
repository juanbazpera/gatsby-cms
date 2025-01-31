import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

const ContentDiv = styled.div`
  padding-top: 4rem;
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 3rem;
  }
  p {
    line-height: 2;
    margin-top: 2rem;
  }
`

const AboutUsContent = () => {
  const info = useStaticQuery(graphql`
    query {
      allDatoCmsPage(filter: { slug: { eq: "nosotros" } }) {
        nodes {
          title
          content
          image {
            fluid(maxWidth: 1200) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)
  console.log(info)
  const { title, content, image } = info.allDatoCmsPage.nodes[0]
  return (
    <>
      <h2
        css={css`
          margin-top: 4rem;
          text-align: center;
        `}
      >
        {title}
      </h2>
      <ContentDiv>
        <p>{content}</p>
        <Image fluid={image.fluid} />
      </ContentDiv>
    </>
  )
}

export default AboutUsContent
