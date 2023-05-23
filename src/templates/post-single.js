import * as React from "react"
import Seo from '../components/seo'
import PageTitle from "../components/page-title"
import { Link } from "gatsby"

const PostSingle = ({ pageContext }) => {
  const { title, body } = pageContext
  return (
    <>
      <PageTitle pageTitle={title}></PageTitle>
      {/* TODO: Parse body as Markdown */}
      {body}
      <div><Link to="/">Back to Home</Link></div>
    </>
  )
}

export default PostSingle

export const Head = () => {
  return (
    <>
      <Seo pageTitle="Post"></Seo>
    </>
  )
}
