import * as React from "react"

import Chip from "./chip"

interface CardProps {
  title: string
  description: string
  chips?: Array<string> | null
  links: React.ReactNode
}
const Card = ({ title, description, chips, links }: CardProps) => {
  return (
    <div className=" my-8   rounded-sm flex text-black w-11/12 sm:w-10/12 md:w-8/12  shadow-2xl relative ">
      {/* <div className="absolute shadow-2xl -p-4  bg-pattern3 w-full flex items-center justify-center  h-full transition duration-700 ease-in-out opacity-0 hover:opacity-100">
        {links}
      </div> */}
      <div
        className={` bg-white border border-gray-900 bg-opacity-10 text-prl3 flex-1`}
      >
        <h1 className="text-center my-2 text-lg font-semibold">{title}</h1>
        <p className="py-2 px-4 text-center">{description}</p>
        <div className="flex flex-wrap items-center justify-center flex-1 ">
          {chips?.map(chip => (
            <Chip key={`chip-${Math.random() * 10000}`} text={chip} />
          ))}
        </div>
        <div className="mt-4  bg-prl3 bg-opacity-50 flex items-center justify-center">
          {links}
        </div>
      </div>
    </div>
  )
}

export default Card
