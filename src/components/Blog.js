import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Blog = ({ id, title, image, date, category, slug, desc }) => {
  return <Link to={`/blogs/${slug}`} key={id} className="blog">
    <article>
      <Image fluid={image.childImageSharp.fluid} className="blog-img" />
      <div className="blog-card">{title}</div>
      <p>{desc}</p>
      <div className="blog-footer">
        <p>{category}</p>
        <p>{date}</p>
      </div>

    </article>
  </Link>
}

Blog.propTypes = {}

export default Blog
