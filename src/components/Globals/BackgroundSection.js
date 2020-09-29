import React from "react"
import BackgroundImage from "gatsby-background-image"

function BackgroundSection({ img, styleClass, title }) {
  return (
    <BackgroundImage fluid={img} className={styleClass}>
      <h1>{title}</h1>
    </BackgroundImage>
  )
}

export default BackgroundSection
