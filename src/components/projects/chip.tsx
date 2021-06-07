import * as React from "react"

interface ChipProps {
  text: string
}

const Chip = ({ text }: ChipProps) => {
  return (
    <p className="rounded-full text-prl3 bg-pine text-center px-2 h-6  mx-2 my-4">
      {text}
    </p>
  )
}

export default Chip
