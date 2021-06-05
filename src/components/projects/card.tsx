import * as React from "react"
import WebIcon from "../../assets/web.svg"
import NonWebIcon from "../../assets/nonweb.svg"
import Chip from "./chip"

interface CardProps {
  web?: boolean
  title: string
  description: string
  chips?: Array<string> | null
  links: React.ReactNode
}
const Card = ({ web = false, title, description, chips, links }: CardProps) => {
  return (
    <div className="cursor-pointer my-8   rounded-sm flex text-black w-8/12  shadow-2xl relative ">
      <div className="absolute shadow-2xl -p-4  bg-pattern3 w-full flex items-center justify-center  h-full transition duration-700 ease-in-out opacity-0 hover:opacity-100">
        {links}
      </div>
      {/* <div className="w-40 px-2  flex items-center justify-center bg-gradient-to-b from-red-800 to-yellow-800">
        {web ? <WebIcon /> : <NonWebIcon />}
      </div> */}
      <div className={` bg-white border border-gray-900 bg-opacity-10 text-prl3 flex-1`}>
        <h1 className="text-center my-2 text-lg font-semibold">{title}</h1>
        <p className="py-2 px-4 text-center">{description}</p>
        <div className="flex flex-wrap items-center justify-center flex-1 ">
          {chips?.map(chip => (
            <Chip key={`chip-${Math.random() * 10000}`} text={chip} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Card
