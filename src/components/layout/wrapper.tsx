import * as React from "react"
import Doodle from "../doodle/doodle"
import Seo from "../seo"
type WrapperProps = {
  children: React.ReactNode
}

const BgDoodle = Doodle`
@grid: 1x24 / 85%;

@place-cell: center;
@size: calc(@i * 5%);


border-style: dotted;
border-width: calc(@i * 2px);
border-color: hsla(
  calc(20 * @i), 82%, 68%,
  calc(3 / @i * .8)
);

transform: rotate(@r(360deg));

`

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <>
      <Seo title="PityubakLand" />
      <div className="bg-gray relative flex lg:items-center min-h-screen portrait:min-h-screen lg:justify-center w-screen ">
        <div className="absolute w-96 h-96 top-0 left-0 m-4">
          {typeof document !== "undefined" && <BgDoodle />}
        </div>
        <div className=" flex  flex-col w-full shadow-2xl   lg:w-10/12 blg:w-8/12 xl:w-9/12  md:items-center lg:rounded-lg  z-50 overflow-hidden bg-shiny bg-cover">
          {children}
        </div>
      </div>
    </>
  )
}

export default Wrapper
