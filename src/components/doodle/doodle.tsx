import * as React from "react"

const Doodle =
  ([rule = ""]: TemplateStringsArray) =>
  () => {
    return <css-doodle>{rule}</css-doodle>
  }

export default Doodle
