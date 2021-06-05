import * as React from "react"
import CodeIcon from "../../assets/code.svg"

type SourceProps = {
  href: string
}
const Source = ({ href }: SourceProps) => (
  <a href={href} className="flex transition ease-in duration:500 hover:text-yellow-500 items-center flex-col m-2 p-2 text-white">
    <CodeIcon />
    <span>Source code</span>
  </a>
)

export default Source
