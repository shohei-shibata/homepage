import * as React from "react"
import { useQuery, gql } from '@apollo/client'
import PageTitle from "../components/page-title"

const GET_ALL_POSTS = gql`
  query getAllPosts {
    allPosts {
      data {
        slug
        title
        content
      }
    }
  }
` 

const AdminPage = () => {
  const { loading, error, data } = useQuery(GET_ALL_POSTS)
  if (loading) return <h3>Loading...</h3>
  if (error) {
    console.error(error)
    return <h3>ERROR! {error.message}</h3>
  }
  const posts = data?.allPosts?.data
  console.log("DATA", data)
  return (
    <>
      <PageTitle>Admin Page</PageTitle>
      <h3>List of Posts</h3>
      <ul>
        {posts?.map(post => (
          <li key={post.slug}>
            {post.title}
          </li>
        ))}
      </ul>
    </>
  )
}

export default AdminPage