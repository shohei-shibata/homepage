import * as React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

const Seo = ({pageTitle, children}) => {
  const { title } = useSiteMetadata()
  return (
    <>
      <title>{ title } { pageTitle ? `| ${pageTitle}` : null }</title>
      { children }
      <script src="https://kit.fontawesome.com/d2a533daa7.js" crossOrigin="anonymous"></script>
    </>
  )
}

export default Seo