import * as React from "react"
import GithubIcon from "../../assets/github.svg"
import CoderrankIcon from "../../assets/codersrank.svg"

const Footer = () => (
  <div className=" flex items-center   bg-prl3 justify-center w-full h-full z-100   p-2 ">
      <div className=" flex items-center  justify-around ">
    <a className="text-white" href="#" rel="noreferrer" target="_blank">
      <GithubIcon />
    </a>
    <a href="#" rel="noreferrer" target="_blank">
      <CoderrankIcon />{" "}
    </a>
  </div>
  </div>
)

export default Footer
