import React, { useState } from "react"
import { postFormCss } from "./post-form.module.css"

const PostForm = ({children}) => {
  const [ title, setTitle ] = useState("")
  const [ slug, setSlug ] = useState("")
  const [ content, setContent ] = useState("")
  const handleChange = (event) => {
    event.preventDefault()
    console.log(event.target.name, event.target.value)
    if (event.target.name === "title") {
      setTitle(event.target.value)
    }
    if (event.target.name === "slug") {
      setSlug(event.target.value)
    }
    if (event.target.name === "content") {
      setContent(event.target.value)
    }
  }
  return (
    <>
      {children}
      <form className={postFormCss}>
        <label htmlFor="title">Title</label>
        <input name="title" type="text" value={title} onChange={handleChange}/>
        <label htmlFor="slug">Slug</label>
        <input name="slug" type="text" value={slug} onChange={handleChange}/>
        <label htmlFor="content">Title</label>
        <textarea name="content" type="text" value={content} onChange={handleChange}/>
        <input type="submit" value="Submit"/>
      </form>
    </>
  )
}

export default PostForm