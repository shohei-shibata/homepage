import { graphql, useStaticQuery } from "gatsby"

export const useLandingPageText = () => {
  const data = useStaticQuery(graphql`
    query getLandingPageText {
      allMdx(filter: {frontmatter: {name: {eq: "Landing Page Text"}}}) {
        edges {
          node {
            body
          }
        }
      }
    }
  `)

  return data.allMdx.edges[0].node
}