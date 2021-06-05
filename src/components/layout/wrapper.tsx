import * as React from "react"
import Animated from "../../assets/shiny5.svg"


type WrapperProps = {
  children: React.ReactNode
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div className=" relative flex md:items-center md:min-h-screen portrait:h-screen md:justify-center w-screen bg-pattern3">
        {/* <Animated /> */}
      <div className="flex  flex-col w-full md:w-8/12 md:items-center rounded-lg  z-50 overflow-hidden bg-shiny bg-cover">
       
        {children}
      </div>
    </div>
  )
}

export default Wrapper
