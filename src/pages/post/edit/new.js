import * as React from "react"
import Seo from '../../../components/seo'
import PageTitle from "../../../components/page-title"
import PostForm from "../../../components/post-form"
import { useMutation, gql } from '@apollo/client'

const NewPostPage = ({data}) => {
  return (
    <>
      <PageTitle>New Post</PageTitle>
      <PostForm><p>Description</p></PostForm>
    </>
  )
}

export default NewPostPage

export const Head = () => {
  return (
    <>
      <Seo pageTitle="Create New Post"></Seo>
    </>
  )
}
