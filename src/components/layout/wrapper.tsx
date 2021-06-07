import * as React from "react"


type WrapperProps = {
  children: React.ReactNode
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div className=" relative flex lg:items-center min-h-screen portrait:min-h-screen lg:justify-center w-screen bg-pattern3">
      <div className="flex  flex-col w-full   lg:w-10/12 blg:w-8/12 xl:w-9/12  md:items-center lg:rounded-lg  z-50 overflow-hidden bg-shiny bg-cover">
        {children}
      </div>
    </div>
  )
}

export default Wrapper
