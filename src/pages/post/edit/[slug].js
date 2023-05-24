import * as React from "react"
import Seo from '../../../components/seo'
import { useQuery, gql } from '@apollo/client'
import { marked } from "marked"
import * as DOMPurify from 'dompurify';
import PageTitle from "../../../components/page-title";

const GET_POST_BY_SLUG = gql`
  query getPostBySlug($slug: String!) {
    postBySlug(slug:$slug) {
      _id
      title
      content
    }
  }
` 

const EditPostsPage = ({ params }) => {
  const slug = params[`slug`]
  const { loading, error, data } = useQuery(GET_POST_BY_SLUG, {
    variables: {slug: slug}
  })
  if (loading) return <h3>Loading...</h3>
  if (error) {
    console.error(error)
    return <h3>Error: {error.message}</h3>
  }
  const postData = data?.postBySlug
  console.log("Data", postData)
  const htmlContent = postData ? DOMPurify.sanitize(marked.parse(postData?.content)) : null
  return (
    <>
      <PageTitle>Edit Post</PageTitle>
      {!postData ? (
        <h3>ERROR: No Post found with slug "{slug}"</h3>
      ) : (
        <>
          <p>Title: {postData.title}</p>
          <p>Content: </p>
          <div dangerouslySetInnerHTML={{__html: htmlContent}}/>
        </>
      )}
    </>
  )
}

export default EditPostsPage

export const Head = () => {
  return (
    <>
      <Seo pageTitle="Edit Post"></Seo>
    </>
  )
}