import * as React from "react"
import Seo from '../components/seo'
import PageTitle from "../components/page-title"
import { marked } from "marked"
import * as DOMPurify from 'dompurify';

const PostSingle = ({ pageContext }) => {
  const { title, body } = pageContext
  const html = DOMPurify.sanitize(marked.parse(body))
  console.log("HTML", html)
  return (
    <>
      <PageTitle pageTitle={title}></PageTitle>
      {/* TODO: Parse body as Markdown */}
      <div dangerouslySetInnerHTML={{__html: html}}></div>
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
