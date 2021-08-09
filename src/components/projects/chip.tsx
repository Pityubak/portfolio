import * as React from "react"

interface ChipProps {
  text: string
}

const Chip = ({ text }: ChipProps) => {
  return (
    <p className="rounded-full text-prl3 bg-pine hd:text-xl uhd:text-2xl hd:px-6 hd:h-10 hd:mx-4  hd:pt-1  text-center px-2 h-6  mx-2 my-4">
      {text}
    </p>
  )
}

export default Chip
