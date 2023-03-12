import * as React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

const Seo = ({pageTitle, children}) => {
  const { title } = useSiteMetadata()
  return (
    <head>
      <link href="https://fonts.googleapis.com/css?family=Open+Sans|Pacifico&display=swap" rel="stylesheet"></link>
      <script src="https://kit.fontawesome.com/d2a533daa7.js" crossorigin="anonymous"></script>
      <title>{ title } { pageTitle ? `| ${pageTitle}` : null }</title>
      { children }
    </head>
  )
}

export default Seo