import * as React from "react"
import { pageTitleHeading, pageTitleHr } from './layout.module.css'

const PageTitle = ({children}) => (
  <>
    <h1 className={pageTitleHeading}>{children}</h1>
    <hr className={pageTitleHr} />
  </>
)

export default PageTitle