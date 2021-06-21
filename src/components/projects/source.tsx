import * as React from "react"
import CodeIcon from "../../assets/code.svg"

type SourceProps = {
  href: string
}
const Source = ({ href }: SourceProps) => (
  <a
    href={href}
    className="flex transition ease-in duration:500 transform-gpu hover:scale-110 items-center flex-col m-2 p-2 text-black"
  >
    <CodeIcon />
    <span className="font-semibold">Source code</span>
  </a>
)

export default Source
