import * as React from "react"
import EyeIcon from "../../assets/eye.svg"

type ViewProps = {
  href: string
  text: string
}
const View = ({ href, text }: ViewProps) => (
  <a
    href={href}
    className="flex  transition ease-in duration:500 hover:text-yellow-500  items-center flex-col m-2 p-2 text-white"
  >
    <EyeIcon />
    <span>{text}</span>
  </a>
)

export default View
