import * as React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

const Seo = ({pageTitle, children}) => {
  const { title } = useSiteMetadata()
  return (
    <>
      <title>{ title } { pageTitle ? `| ${pageTitle}` : null }</title>
      { children }
    </>
  )
}

export default Seo