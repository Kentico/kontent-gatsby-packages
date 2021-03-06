import React from "react"
import { RichTextElement } from "@kentico/gatsby-kontent-components"
import { Link } from "gatsby"

const Index = () => {
  return (
    <>
      <RichTextElement value="<div>Hello Kontent!</div>" />
      <ul>
        <li><Link to="author">Image resolution example</Link></li>
        <li><Link to="articles">Article listing example</Link></li>
      </ul>
    </>
  )
}

export default Index;