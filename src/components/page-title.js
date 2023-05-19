import * as React from "react"
import { pageTitleHeading, pageTitleHr } from './layout.module.css'

const PageTitle = ({pageTitle}) => (
  <>
    <h1 className={pageTitleHeading}>{pageTitle}</h1>
    <hr className={pageTitleHr} />
  </>
)

export default PageTitle