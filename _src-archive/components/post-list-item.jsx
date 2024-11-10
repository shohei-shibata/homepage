import React from "react"
import { Link } from "gatsby"
import { parseDate } from "../utils/parseDate"

export const PostListItem = ({post}) => {
  const d = parseDate(post.frontmatter.publishedAt)
  return (
    <div key={post.id}>
      <span>
        {`${d.year} ${d.month + 1} ${d.date}`}
      </span>
      <Link to={`/posts/${post.frontmatter.slug}`}>
        {post.frontmatter.title}
      </Link>
    </div>
  )
}