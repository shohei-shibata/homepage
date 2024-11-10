import * as React from "react"
import { box } from "./box.module.css"

const Box = ({children}) => (
  <div className={box}>
    {children}
  </div>
)

export default Box