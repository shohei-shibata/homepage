import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"
import { parseDate } from "../utils/parseDate"


const shortcodes = { Link } // Provide common components here

export default function PostTemplate({ data, children }) {
  const { title, publishedAt } = data.mdx.frontmatter
  const d = parseDate(publishedAt)
  const publishDateString = `${d.month+1}/${d.date}/${d.year}`
  return (
    <>
      <Link 
        to="/"
        className="link-navigation"
      >⬅ Home</Link>
      <h1>{title}</h1>
      <span>Published {publishDateString}</span>
      <MDXProvider components={shortcodes}>
        {children}
      </MDXProvider>
    </>
  )
}

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        publishedAt
      }
    }
  }
`