const React = require("react")
const { default: Layout } = require("./src/components/layout")

exports.wrapPageElement = ({ element, props }) => {
  return (
    <>
      <link href="https://fonts.googleapis.com/css?family=Open+Sans|Pacifico&display=swap" rel="stylesheet"></link>
      <script src="https://kit.fontawesome.com/d2a533daa7.js" crossOrigin="anonymous"></script>
      <Layout {...props}>{element}</Layout>
    </>
  )
}