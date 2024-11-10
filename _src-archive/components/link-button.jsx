import * as React from "react"
import { Link } from "gatsby"
import { linkButton } from "./link-button.module.css"

export function LinkButton({ children, to, className, ...props }) {
  const isInternalLink = to.startsWith("/")
  return (
    isInternalLink ?
      <Link
        className={[className, linkButton].join(" ")}
        to={to}
        {...props}
      >
        {children}
      </Link>
      :
      <a
        href={to}
        className={[className, linkButton].join(" ")}
        {...props}
      >
        {children}
      </a>
  )
}
