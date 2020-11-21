import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"


export default ({ data }) => {
  const { allStrapiProjects: { nodes: projects },
    allStrapiBlogs: { nodes: blogs }
  } = data


  return (
    <Layout>
      <SEO title="home" description="this is our home page" />
      <Hero />
      <Services />
      <Jobs />
      <Projects projects={projects} title="featured projects" showLink />
      <Blogs blogs={blogs} title="Lates articles" showLink />
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects(filter: {featured: {eq: true}}) {
      nodes {
        description
        github
        id
        title
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
              
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
    allStrapiBlogs(sort: {fields: date, order: DESC}, limit: 3) {
      edges {
        node {
          id
          image {
            id
          }
        }
      }
      nodes {
        slug
        content
        date(formatString: "MMMM Do, YYYY")
        id
        title
        category
        description
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`