import * as React from "react"
import { Link } from "gatsby"
import Seo from '../components/seo'
import PageTitle from "../components/page-title"

const NotFoundPage = () => {
  return (
    <>
      <PageTitle pageTitle="404"/>
      <h1>Page not found</h1>
      <p>
        Sorry 😔, we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </>
  )
}

export default NotFoundPage

export const Head = () => (
  <>
    <Seo pageTitle="404"/>
  </>
)