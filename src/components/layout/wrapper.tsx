import * as React from "react"
import Doodle from "../doodle/doodle"
import useWindowSize from "../hooks/useWindowSize"
import Seo from "../seo"
type WrapperProps = {
  children: React.ReactNode
}

const BgDoodle = Doodle`
@grid: 1x24 / 50%;
@place-cell: center;
@size: calc(@i * 5%);
border-style: dotted;
border-width: calc(@i * 2px);
border-color: #157A6E;
opacity: calc(@i() * 0.03);
transform: rotate(@r(360deg));
`

const Wrapper = ({ children }: WrapperProps) => {
  const { width } = useWindowSize()
  return (
    <>
      <Seo title="PityubakLand" />
      <div className="bg-base relative flex lg:items-center min-h-screen portrait:min-h-screen lg:justify-center w-screen ">
        {width > 768 && (
          <div className=" absolute w-full h-full top-0 left-0 ">
            {typeof document !== "undefined" && <BgDoodle />}
          </div>
        )}
        <div className="relative  flex  flex-col w-full shadow-2xl   lg:w-10/12 blg:w-8/12 xl:w-9/12  md:items-center lg:rounded-lg  z-50 overflow-hidden bg-shiny bg-cover">
          {children}
        </div>
      </div>
    </>
  )
}

export default Wrapper
