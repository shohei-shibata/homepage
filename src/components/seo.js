import * as React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

const Seo = ({pageTitle, children}) => {
  const { title } = useSiteMetadata()
  return (
    <head>
      <title>{ title } { pageTitle ? `| ${pageTitle}` : null }</title>
      { children }
    </head>
  )
}

export default Seo