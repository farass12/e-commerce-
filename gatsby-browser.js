/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from "react"
import "./src/styles/global.css" 

// Inject Google Fonts langsung ke <head>
export const onClientEntry = () => {
  const link = document.createElement("link")
  link.href = "https://fonts.googleapis.com/css2?family=Alegreya:wght@400&family=Lato:wght@300;400&display=swap"
  link.rel = "stylesheet"
  document.head.appendChild(link)
}
