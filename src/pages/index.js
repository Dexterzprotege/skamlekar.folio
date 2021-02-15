import React from "react"
import {Link, graphql} from "gatsby"
import styled from "styled-components"
import { HeaderLogo, HeadingXL, HeadingL, Layout, SEO, TextBody, TextDate, HeaderBack, Button } from "../components"
import {BREAKPOINT} from "../utils/constants"

const Hero = styled.div`
  margin-bottom: 20vh;

  @media (max-width: ${BREAKPOINT}px) {
    margin-bottom: 15vh;
  }
`
const TextHome = styled.p`
  color: var(--dark-color-light);
  display: block;
  font-size: 22px;
  line-height: 1.6;
  margin-bottom: 10vh;
  margin-left: auto;
  margin-right: auto;
  max-width: 28em;
  text-align: center;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 19px;
    margin-bottom: 7vh;
  }
`
const Post = styled.div`
  border-bottom: 1px solid lightgray;
  margin-bottom: 50px;

  @media (max-width: ${BREAKPOINT}px) {
    padding-left: 0;
  }
`

export default function Home({data}) {
  return (
    <>
      <SEO title="Portfolio" />
      <HeaderLogo />
      <Layout>
        <Hero>
          <HeadingXL>Bonjour!</HeadingXL>
          <TextHome>
            My name is <strong>Sharath Kamlekar</strong> and I currently work at Amazon as a Developer. I previously interned at Amazon too. My primary interests are full-stack web development and like to explore new JS frameworks. My personal interest is in Data Science, Data Analytics which I am pursuing independently.
          </TextHome>
          <Button href="mailto:sharath.kamlekar&#64;outlook.com">Get in touch</Button>
        </Hero>
        
        {/* {data.allMarkdownRemark.edges.map(({node}) => (
          <Link to={node.fields.slug} key={node.id}>
            <Post>
              <HeadingL>{node.frontmatter.title}</HeadingL>
              <TextBody>{node.excerpt}</TextBody>
              <TextDate>{node.frontmatter.date}</TextDate>
            </Post>
          </Link>
        ))} */}
      </Layout>
    </>
  )
}

export const data = graphql`
  query {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
