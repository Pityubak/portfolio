import * as React from "react"
import EyeIcon from "../../assets/eye.svg"

type ViewProps = {
  href: string
  text: string
}
const View = ({ href, text }: ViewProps) => (
  <a
    href={href}
    className="flex  transition ease-in duration:500 transform-gpu hover:scale-110 items-center flex-col m-2 p-2 text-black"
  >
    <EyeIcon />
    <span className="font-semibold">{text}</span>
  </a>
)

export default View
