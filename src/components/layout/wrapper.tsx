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

// border-color: hsla(
//   calc(20 * @i), 82%, 68%,
//   calc(3 / @i * .8)
// );

transform: rotate(@r(360deg));
// :doodle {
//   @grid: 7 / 100%;
// }
// background: #2b2b2b;

// transform: scale(@rand(.2, .8))  ;
// opacity:@rand(1);
// box-shadow: @m5(
//   calc(@n * 2px) calc(@n * 2px) 0 0 #000
// );
// ;
// box-shadow:@rand(-6px,6px) @rand(-6px,6px) @rand(4px) #157A6E;

// :doodle { --s: 0 }
// :doodle(:hover) { --s: 1 }

// transition: .5s cubic-bezier(.175, .885, .32, 1.275);
// transition-delay: @rand(500ms);
// transform: translateY(calc(var(--s) * 100%));


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
