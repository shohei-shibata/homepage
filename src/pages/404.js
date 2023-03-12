import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const NotFoundPage = () => {
  return (
    <Layout>
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
    </Layout>
  )
}

export default NotFoundPage

export const Head = () => (
  <>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans|Pacifico&display=swap" rel="stylesheet"></link>
    <script src="https://kit.fontawesome.com/d2a533daa7.js" crossorigin="anonymous"></script>
    <title>404</title>
  </>
)